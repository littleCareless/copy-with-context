/**
 * 本地化字符串类型定义
 * 这些键对应 package.nls.json 和 package.nls.zh.json 中的键
 */
export interface NlsStrings {
	// 扩展信息
	'extension.displayName': string;
	'extension.description': string;

	// 命令
	'command.copyWithContext.title': string;
	'command.copyWithContext.category': string;

	// 菜单显示名称
	'menus.editor.context.displayName': string;
	'menus.editor.title.context.displayName': string;

	// 键绑定
	'keybindings.copyWithContext.key': string;
	'keybindings.copyWithContext.mac': string;
	'keybindings.copyWithContext.when': string;

	// 配置
	'config.copyWithContext.title': string;
	'config.copyWithContext.description': string;
	'config.copyWithContext.format.title': string;
	'config.copyWithContext.format.description': string;
	'config.copyWithContext.includeWorkspace.title': string;
	'config.copyWithContext.includeWorkspace.description': string;

	// UI 消息（扩展运行时使用的消息）
	'message.noActiveEditor': string;
	'message.noSelection': string;
	'message.copiedSuccessfully': string;
	'message.copyFailed': string;
	'message.workspace': string;
	'message.file': string;
	'message.path': string;
	'message.language': string;
	'message.selection': string;
	'message.fullPath': string;
	'message.selectedCode': string;
	'message.cursor': string;
}

/**
 * 获取本地化字符串的辅助函数
 * @param key 本地化键
 * @param defaultText 默认文本（用于开发时）
 */
export function localize(key: keyof NlsStrings, defaultText: string): string {
	// 在 VSCode 环境中，使用 vscode.l10n.t
	// 这里提供一个简单的实现用于类型安全和回退
	const vscode = require('vscode');
	if (vscode && vscode.l10n && vscode.l10n.t) {
		return vscode.l10n.t(key);
	}
	return defaultText;
}
