/**
 * 本地化更新脚本
 * 用于从 package.nls.json 同步到 bundle.l10n.json
 */

const fs = require('fs');
const path = require('path');

// 文件路径
const packageNlsPath = path.join(__dirname, '..', 'package.nls.json');
const packageNlsZhPath = path.join(__dirname, '..', 'package.nls.zh.json');
const bundleL10nPath = path.join(__dirname, '..', 'l10n', 'bundle.l10n.json');
const bundleL10nZhPath = path.join(__dirname, '..', 'l10n', 'bundle.l10n.zh.json');

// 运行时消息映射（package.nls.json -> bundle.l10n.json）
const runtimeMessageMap = {
    'File': 'File',
    'Path': 'Path',
    'Language': 'Language',
    'Selection': 'Selection',
    'Line': 'Line',
    'Char': 'Char',
    'Full Path': 'Full Path',
    'Workspace': 'Workspace',
    'Cursor': 'Cursor',
    'Selected Code': 'Selected Code',
    'Context for AI assistance': 'Context for AI assistance',
    'Current Line Context': 'Current Line Context',
    'No active editor': 'No active editor',
    'Please select text first': 'Please select text first',
    'Copied to clipboard: Line {0}, Char {1} to Line {2}, Char {3}': 'Copied to clipboard: Line {0}, Char {1} to Line {2}, Char {3}',
    'Copy failed: {0}': 'Copy failed: {0}'
};

// 中文映射
const runtimeMessageMapZh = {
    'File': '文件',
    'Path': '路径',
    'Language': '语言',
    'Selection': '选中',
    'Line': '行',
    'Char': '字符',
    'Full Path': '完整路径',
    'Workspace': '工作区',
    'Cursor': '光标',
    'Selected Code': '选中代码',
    'Context for AI assistance': 'AI 辅助上下文',
    'Current Line Context': '当前行上下文',
    'No active editor': '没有活动的编辑器',
    'Please select text first': '请先选择要复制的文本',
    'Copied to clipboard: Line {0}, Char {1} to Line {2}, Char {3}': '已复制到剪贴板：行 {0}，字符 {1} 到行 {2}，字符 {3}',
    'Copy failed: {0}': '复制失败：{0}'
};

function readJson(filePath) {
    try {
        return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    } catch (error) {
        console.error(`Error reading ${filePath}:`, error.message);
        return null;
    }
}

function writeJson(filePath, data) {
    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
        console.log(`✓ Updated: ${path.relative(process.cwd(), filePath)}`);
    } catch (error) {
        console.error(`Error writing ${filePath}:`, error.message);
    }
}

function updateL10nFiles() {
    console.log('Updating localization files...\n');

    // 读取 package.nls.json
    const packageNls = readJson(packageNlsPath);
    if (!packageNls) {
        console.error('Failed to read package.nls.json');
        return;
    }

    // 读取 package.nls.zh.json
    const packageNlsZh = readJson(packageNlsZhPath);
    if (!packageNlsZh) {
        console.error('Failed to read package.nls.zh.json');
        return;
    }

    // 更新 bundle.l10n.json
    const bundleL10n = { ...runtimeMessageMap };
    writeJson(bundleL10nPath, bundleL10n);

    // 更新 bundle.l10n.zh.json
    const bundleL10nZh = { ...runtimeMessageMapZh };
    writeJson(bundleL10nZhPath, bundleL10nZh);

    console.log('\n✓ All localization files updated successfully!');
    console.log('\nFiles created/updated:');
    console.log('  - package.nls.json (package metadata)');
    console.log('  - package.nls.zh.json (package metadata - Chinese)');
    console.log('  - l10n/bundle.l10n.json (runtime messages)');
    console.log('  - l10n/bundle.l10n.zh.json (runtime messages - Chinese)');
}

// 运行更新
updateL10nFiles();