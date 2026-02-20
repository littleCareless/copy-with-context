/**
 * 本地化测试脚本
 * 用于验证 package.nls.json 和 l10n/bundle.l10n.json 文件
 */

const fs = require('fs');
const path = require('path');

// 颜色输出
const colors = {
    reset: '\x1b[0m',
    green: '\x1b[32m',
    red: '\x1b[31m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
    console.log(`${colors[color]}${message}${colors.reset}`);
}

function readJson(filePath) {
    try {
        return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    } catch (error) {
        return null;
    }
}

function testLocalization() {
    log('\n=== VSCode 插件本地化测试 ===\n', 'cyan');

    // 1. 检查 package.json
    log('1. 检查 package.json...', 'blue');
    const packageJson = readJson(path.join(__dirname, '..', 'package.json'));
    if (!packageJson) {
        log('❌ package.json 不存在', 'red');
        return false;
    }

    // 检查是否使用占位符
    const usesPlaceholders =
        packageJson.displayName.includes('%') &&
        packageJson.description.includes('%');

    if (usesPlaceholders) {
        log('✅ package.json 使用了占位符', 'green');
    } else {
        log('❌ package.json 未使用占位符', 'red');
        return false;
    }

    // 2. 检查 package.nls.json
    log('\n2. 检查 package.nls.json...', 'blue');
    const packageNls = readJson(path.join(__dirname, '..', 'package.nls.json'));
    if (!packageNls) {
        log('❌ package.nls.json 不存在', 'red');
        return false;
    }
    log(`✅ 找到 ${Object.keys(packageNls).length} 个英文键`, 'green');

    // 3. 检查 package.nls.zh.json
    log('\n3. 检查 package.nls.zh.json...', 'blue');
    const packageNlsZh = readJson(path.join(__dirname, '..', 'package.nls.zh.json'));
    if (!packageNlsZh) {
        log('❌ package.nls.zh.json 不存在', 'red');
        return false;
    }

    // 检查键的数量是否匹配
    const enKeys = Object.keys(packageNls).sort();
    const zhKeys = Object.keys(packageNlsZh).sort();

    if (JSON.stringify(enKeys) === JSON.stringify(zhKeys)) {
        log(`✅ 中英文键数量匹配 (${zhKeys.length} 个)`, 'green');
    } else {
        log('❌ 中英文键数量不匹配', 'red');
        log(`   英文: ${enKeys.length}, 中文: ${zhKeys.length}`, 'yellow');
        return false;
    }

    // 4. 检查 l10n/bundle.l10n.json
    log('\n4. 检查 l10n/bundle.l10n.json...', 'blue');
    const bundleL10n = readJson(path.join(__dirname, '..', 'l10n', 'bundle.l10n.json'));
    if (!bundleL10n) {
        log('❌ l10n/bundle.l10n.json 不存在', 'red');
        return false;
    }
    log(`✅ 找到 ${Object.keys(bundleL10n).length} 个运行时消息`, 'green');

    // 5. 检查 l10n/bundle.l10n.zh.json
    log('\n5. 检查 l10n/bundle.l10n.zh.json...', 'blue');
    const bundleL10nZh = readJson(path.join(__dirname, '..', 'l10n', 'bundle.l10n.zh.json'));
    if (!bundleL10nZh) {
        log('❌ l10n/bundle.l10n.zh.json 不存在', 'red');
        return false;
    }

    const bundleEnKeys = Object.keys(bundleL10n).sort();
    const bundleZhKeys = Object.keys(bundleL10nZh).sort();

    if (JSON.stringify(bundleEnKeys) === JSON.stringify(bundleZhKeys)) {
        log(`✅ 运行时消息键匹配 (${bundleZhKeys.length} 个)`, 'green');
    } else {
        log('❌ 运行时消息键不匹配', 'red');
        return false;
    }

    // 6. 检查关键翻译
    log('\n6. 检查关键翻译...', 'blue');
    const criticalKeys = [
        'extension.displayName',
        'command.copyWithContext.title',
        'File',
        'Path',
        'No active editor'
    ];

    let allCriticalPresent = true;
    criticalKeys.forEach(key => {
        const enValue = packageNls[key] || bundleL10n[key];
        const zhValue = packageNlsZh[key] || bundleL10nZh[key];

        if (enValue && zhValue) {
            log(`   ${key}: ${enValue} → ${zhValue}`, 'green');
        } else {
            log(`   ❌ ${key} 缺失`, 'red');
            allCriticalPresent = false;
        }
    });

    if (!allCriticalPresent) {
        return false;
    }

    // 7. 检查 package.json 中的配置项
    log('\n7. 检查配置项本地化...', 'blue');
    if (packageJson.contributes && packageJson.contributes.configuration) {
        const config = packageJson.contributes.configuration;
        if (config.title && config.title.includes('%')) {
            log('✅ 配置标题使用了占位符', 'green');
        }

        const props = config.properties || {};
        const configKeys = Object.keys(props);

        configKeys.forEach(key => {
            const prop = props[key];
            if (prop.title && prop.title.includes('%')) {
                log(`✅ ${key}.title 使用了占位符`, 'green');
            }
            if (prop.description && prop.description.includes('%')) {
                log(`✅ ${key}.description 使用了占位符`, 'green');
            }
        });
    }

    // 8. 检查编译后的代码
    log('\n8. 检查编译输出...', 'blue');
    const extensionJs = path.join(__dirname, '..', 'out', 'extension.js');
    if (fs.existsSync(extensionJs)) {
        const code = fs.readFileSync(extensionJs, 'utf8');
        if (code.includes('vscode.l10n.t')) {
            log('✅ extension.js 包含本地化 API 调用', 'green');
        } else {
            log('⚠️  extension.js 未找到 l10n.t 调用', 'yellow');
        }
    } else {
        log('❌ 未找到编译后的 extension.js', 'red');
        return false;
    }

    return true;
}

// 运行测试
if (testLocalization()) {
    log('\n🎉 所有本地化检查通过！', 'green');
    log('\n下一步:');
    log('1. npm run package 重新打包');
    log('2. 在 VSCode 中安装新 .vsix');
    log('3. 切换语言为中文 (zh-CN)');
    log('4. 重新加载窗口');
    log('5. 测试右键菜单');
} else {
    log('\n❌ 本地化检查失败，请修复上述问题', 'red');
    process.exit(1);
}