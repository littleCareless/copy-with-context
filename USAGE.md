# Copy with Context 使用指南

## 快速开始

### 1. 在VS Code中打开项目

```bash
code /home/xiaoning/coding/vsc
```

### 2. 安装依赖（已完成）

```bash
npm install
```

### 3. 编译扩展（已完成）

```bash
npm run compile
```

### 4. 启动调试

按 `F5` 或点击 "Run Extension" 按钮，这会打开一个新的VS Code窗口来测试扩展。

## 使用方法

### 方法一：右键菜单（推荐）

1. 在任意文件中选中一段代码
2. 右键点击
3. 选择 "Copy with Context"

### 方法二：快捷键

- **Windows/Linux**: `Ctrl + Shift + C`
- **macOS**: `Cmd + Shift + C`

### 方法三：命令面板

1. 按 `Ctrl + Shift + P` (Windows/Linux) 或 `Cmd + Shift + P` (macOS)
2. 输入 "Copy with Context"
3. 回车执行

## 输出示例

假设你在 `test-example.js` 文件中选中了以下代码：

```javascript
function greet(name) {
    const message = `Hello, ${name}!`;
    console.log(message);
    return message;
}
```

复制后剪贴板内容将是：

```
File: test-example.js
Path: test-example.js
Language: javascript
Selection: Line 6, Char 5 to Line 10, Char 2
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
```

## 适用场景

### 1. AI编程助手

当你需要向ChatGPT、Claude等AI助手求助时，使用此扩展可以提供完整的上下文：

```
我遇到了一个JavaScript问题，以下是代码和上下文：

File: utils.js
Path: src/utils.js
Language: javascript
Selection: Line 15, Char 10 to Line 20, Char 5
Full Path: /home/user/project/src/utils.js

---

Selected Code:

---

function processData(data) {
    if (!data) return null;
    const result = data.map(item => {
        return item.value * 2;
    });
    return result;
}

---

Context for AI assistance:

问题：这个函数在处理空数据时应该返回什么？
```

### 2. 代码审查

分享代码片段时包含精确的位置信息，便于团队成员快速定位。

### 3. Bug报告

报告问题时提供准确的代码位置和上下文。

## 开发工作流

### 开发模式

1. 在 `src/extension.ts` 中修改代码
2. 按 `Ctrl + Shift + B` 重新编译
3. 按 `F5` 启动调试

### 测试建议

1. 打开 `test-example.js`
2. 选中不同位置的代码
3. 使用三种方法调用扩展
4. 检查剪贴板内容是否正确

## 常见问题

### Q: 扩展没有出现在右键菜单中？
A: 确保已编译代码 (`npm run compile`) 并重启VS Code。

### Q: 快捷键不工作？
A: 检查是否有其他扩展占用了相同的快捷键，或在键盘快捷键设置中查看冲突。

### Q: 如何修改快捷键？
A: 在VS Code设置中搜索 "Copy with Context"，或编辑 `keybindings.json`。

## 打包发布

如果要打包成 `.vsix` 文件：

```bash
npm install -g vsce
vsce package
```

这会生成 `copy-with-context-1.0.0.vix` 文件，可以手动安装或发布到VS Code Marketplace。