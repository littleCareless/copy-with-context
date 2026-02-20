import * as vscode from 'vscode';

/**
 * 激活扩展时调用的函数
 * @param context 扩展上下文
 */
export function activate(context: vscode.ExtensionContext) {
    console.log('Copy with Context extension is now active!');

    // 获取配置
    const config = vscode.workspace.getConfiguration('copyWithContext');

    // 注册复制带上下文的命令
    const copyWithContext = vscode.commands.registerCommand('copy-with-context.copyWithContext', async () => {
        const editor = vscode.window.activeTextEditor;

        if (!editor) {
            // 使用本地化消息：没有活动的编辑器
            const message = vscode.l10n.t('No active editor');
            vscode.window.showErrorMessage(message);
            return;
        }

        const document = editor.document;
        const selection = editor.selection;

        // 检查是否有选中的文本
        if (selection.isEmpty) {
            // 使用本地化消息：请先选择要复制的文本
            const message = vscode.l10n.t('Please select text first');
            vscode.window.showWarningMessage(message);
            return;
        }

        // 获取选中的文本
        const selectedText = document.getText(selection);

        // 获取文件信息
        const filePath = document.fileName;
        const fileName = filePath.split(/[\\\\/]/).pop() || '';
        const workspaceFolder = vscode.workspace.getWorkspaceFolder(document.uri);
        const workspaceRoot = workspaceFolder ? workspaceFolder.uri.fsPath : '';

        // 计算相对路径（如果有工作区）
        let relativePath = filePath;
        if (workspaceRoot && filePath.startsWith(workspaceRoot)) {
            relativePath = filePath.substring(workspaceRoot.length + 1);
        }

        // 获取行列信息
        const startLine = selection.start.line + 1; // VS Code使用0-based索引，但用户期望1-based
        const startChar = selection.start.character + 1;
        const endLine = selection.end.line + 1;
        const endChar = selection.end.character + 1;

        // 获取语言类型
        const languageId = document.languageId;

        // 从配置中获取选项
        const includeWorkspace = config.get<boolean>('includeWorkspace', true);
        const customFormat = config.get<string>('format', '');

        // 构建上下文信息
        let contextInfo: string[];

        if (customFormat) {
            // 使用自定义格式
            contextInfo = [customFormat
                .replace(/\${fileName}/g, fileName)
                .replace(/\${relativePath}/g, relativePath)
                .replace(/\${languageId}/g, languageId)
                .replace(/\${startLine}/g, startLine.toString())
                .replace(/\${startChar}/g, startChar.toString())
                .replace(/\${endLine}/g, endLine.toString())
                .replace(/\${endChar}/g, endChar.toString())
                .replace(/\${filePath}/g, filePath)
                .replace(/\${workspace}/g, workspaceFolder?.name || '')
                .replace(/\${selectedText}/g, selectedText)
            ];
        } else {
            // 使用默认精简格式（节省 token）
            contextInfo = [
                `File: ${relativePath}`,
                `Lang: ${languageId}`,
                `Range: L${startLine}:C${startChar}-L${endLine}:C${endChar}`,
                '',
                'Code:',
                selectedText
            ];

            // 如果有工作区，按配置添加工作区信息
            if (workspaceRoot && includeWorkspace) {
                contextInfo.splice(1, 0, `Workspace: ${workspaceFolder?.name || ''}`);
            }
        }

        const finalText = contextInfo.join('\n');

        // 复制到剪贴板
        try {
            await vscode.env.clipboard.writeText(finalText);

            // 显示成功消息
            const message = vscode.l10n.t('Copied to clipboard: Line {0}, Char {1} to Line {2}, Char {3}',
                startLine, startChar, endLine, endChar);
            vscode.window.showInformationMessage(message);

            console.log('Copied to clipboard:', finalText);
        } catch (error) {
            const message = vscode.l10n.t('Copy failed: {0}', String(error));
            vscode.window.showErrorMessage(message);
            console.error('Copy error:', error);
        }
    });

    context.subscriptions.push(copyWithContext);
}

/**
 * 扩展停用时调用的函数
 */
export function deactivate() {
    console.log('Copy with Context extension is deactivated');
}
