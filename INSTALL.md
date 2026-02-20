# 安装指南

## 📦 已打包完成

✅ 扩展已成功打包：`copy-with-context-1.0.0.vsix` (8.2 KB)

## 🚀 安装方法

### 方法1: VS Code 界面安装 (推荐)

1. 打开 VS Code
2. 按 `Ctrl+Shift+P` (Windows/Linux) 或 `Cmd+Shift+P` (macOS)
3. 在命令面板中输入：`Extensions: Install from VSIX...`
4. 选择 `copy-with-context-1.0.0.vsix` 文件
5. 重启 VS Code (如果提示)

### 方法2: 命令行安装

```bash
# 在项目目录中执行
code --install-extension copy-with-context-1.0.0.vsix
```

### 方法3: 手动安装

1. 将 `.vsix` 文件重命名为 `.zip`
2. 解压到 VS Code 扩展目录：
   - **Windows**: `%USERPROFILE%\.vscode\extensions\copy-with-context-1.0.0\`
   - **Linux/macOS**: `~/.vscode/extensions/copy-with-context-1.0.0/`
3. 重启 VS Code

## ✅ 验证安装

安装完成后，检查是否成功：

1. 打开任意代码文件
2. 选中一段代码
3. 右键点击，查看是否出现 "Copy with Context" 菜单项
4. 或者按 `Ctrl+Shift+C` (Windows/Linux) / `Cmd+Shift+C` (macOS)

## 🎯 使用方法

### 基本使用

1. **选中代码**: 在任意文件中用鼠标选中代码
2. **调用命令**:
   - 右键菜单 → "Copy with Context"
   - 快捷键: `Ctrl+Shift+C` 或 `Cmd+Shift+C`
   - 命令面板: 搜索 "Copy with Context"

### 输出示例

选中以下代码：
```javascript
function greet(name) {
    return `Hello, ${name}!`;
}
```

复制后剪贴板内容：
```
File: example.js
Path: src/example.js
Language: javascript
Selection: Line 1, Char 1 to Line 3, Char 2
Full Path: /home/user/project/src/example.js

---

Selected Code:

---

function greet(name) {
    return `Hello, ${name}!`;
}

---

Context for AI assistance:
```

## 🔧 配置快捷键

如果默认快捷键冲突，可以自定义：

1. 打开命令面板 (`Ctrl+Shift+P`)
2. 输入 "Preferences: Open Keyboard Shortcuts"
3. 搜索 "Copy with Context"
4. 右键点击 → "Change Keybinding"
5. 设置新的快捷键

## 🐛 故障排除

### 问题: 扩展不显示在右键菜单

**解决方案**:
1. 确认已正确安装
2. 重启 VS Code
3. 检查控制台是否有错误 (帮助 → 切换开发人员工具)

### 问题: 快捷键不工作

**解决方案**:
1. 检查是否有其他扩展占用相同快捷键
2. 重新绑定快捷键
3. 确认当前有选中的文本

### 问题: 复制的内容格式不正确

**解决方案**:
1. 确保有活动的编辑器
2. 确保有选中的文本（不能为空）
3. 检查控制台错误信息

## 📋 系统要求

- VS Code 1.85.0 或更高版本
- Windows, macOS, 或 Linux
- Node.js (仅用于开发，运行时不需要)

## 🔄 卸载方法

1. 打开扩展视图 (`Ctrl+Shift+X`)
2. 搜索 "Copy with Context"
3. 点击卸载按钮
4. 重启 VS Code

## 🎉 开始使用

安装完成后，你就可以：

- ✅ 复制代码时自动包含文件路径
- ✅ 获取精确的行列信息
- ✅ 为AI助手提供完整上下文
- ✅ 提高代码分享效率

祝使用愉快！如有问题，请查看 README.md 或提交 Issue。