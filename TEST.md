# 测试指南

## 🧪 功能测试

安装扩展后，按以下步骤测试：

### 测试文件

打开 `test-example.js` 文件，该文件包含测试代码。

### 测试1: 基础复制功能

1. 选中 `test-example.js` 中的 `function greet(name) {` 到 `}` 部分
2. 右键点击 → "Copy with Context"
3. 粘贴到新文件，检查输出格式

**预期输出**:
```
File: test-example.js
Path: test-example.js
Language: javascript
Selection: Line 6, Char 1 to Line 10, Char 2
Full Path: /home/xiaoning/coding/vsc/test-example.js

---

Selected Code:

---

function greet(name) {
    const message = `Hello, ${name}!`;
    console.log(message);
    return message;
}

---

Context for AI assistance:

Current Line Context:
function greet(name) {
```

### 测试2: 快捷键测试

1. 选中 `class Calculator {` 到 `}` 部分
2. 按 `Ctrl+Shift+C` (Windows/Linux) 或 `Cmd+Shift+C` (macOS)
3. 检查是否成功复制

### 测试3: 单行选择

1. 仅选中一行代码，例如 `const message = \`Hello, ${name}!\`;`
2. 使用右键菜单复制
3. 检查行列信息是否正确

### 测试4: 命令面板

1. 按 `Ctrl+Shift+P` 或 `Cmd+Shift+P`
2. 输入 "Copy with Context"
3. 回车执行
4. 检查是否正常工作

## 📊 测试检查清单

- [ ] 右键菜单显示 "Copy with Context"
- [ ] 快捷键 `Ctrl+Shift+C` / `Cmd+Shift+C` 工作
- [ ] 命令面板可以找到命令
- [ ] 复制内容包含文件名
- [ ] 复制内容包含相对路径
- [ ] 复制内容包含完整路径
- [ ] 复制内容包含语言类型
- [ ] 复制内容包含准确的行列信息
- [ ] 复制内容包含选中的代码
- [ ] 复制内容包含当前行上下文
- [ ] 有工作区时包含工作区信息
- [ ] 无选中文本时显示警告
- [ ] 无活动编辑器时显示错误

## 🔍 验证输出格式

复制的内容应该遵循以下格式：

```
File: [文件名]
Path: [相对路径]
Language: [语言]
Selection: Line [开始行], Char [开始字符] to Line [结束行], Char [结束字符]
Full Path: [完整路径]
Workspace: [工作区名称] (可选)

---

Selected Code:

---

[选中的代码]

---

Context for AI assistance:

Current Line Context:
[当前行内容] (可选)
```

## 🐛 问题报告

如果发现任何问题，请记录：

1. **问题描述**: 发生了什么？
2. **重现步骤**: 如何重现？
3. **预期结果**: 应该是什么？
4. **实际结果**: 实际是什么？
5. **环境信息**: VS Code 版本、操作系统

## 📈 性能测试

测试大文件处理：

1. 打开一个较大的文件（1000+ 行）
2. 选中不同位置的代码
3. 测试复制速度
4. 检查内存使用

## 🎯 边界测试

### 空选择
- 不选中任何内容 → 应显示警告

### 文件开头/结尾
- 选中文件第一行
- 选中文件最后一行

### 特殊字符
- 选中包含特殊字符的代码
- 选中多语言代码

### 多行选择
- 选中单行
- 选中多行
- 选中跨越多个函数

## ✅ 成功标准

如果所有测试通过，扩展就可以正常使用了！

需要帮助？查看：
- `README.md` - 项目说明
- `USAGE.md` - 使用指南
- `INSTALL.md` - 安装指南