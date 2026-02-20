# 快速开始

欢迎使用 Copy with Context！本指南将帮助你快速上手这个 VS Code 扩展。

## 🎯 什么是 Copy with Context？

这是一个 VS Code 扩展，用于复制代码时自动附加完整的上下文信息，特别适合与 AI 助手（如 ChatGPT、Claude）协作开发。

## 🚀 30 秒快速体验

### 1. 安装扩展

**方法 A**: 从 VSIX 安装（推荐）
```bash
code --install-extension copy-with-context-1.0.0.vsix
```

**方法 B**: 从市场安装（如果已发布）
1. 打开 VS Code
2. 转到扩展视图 (`Ctrl+Shift+X`)
3. 搜索 "Copy with Context"
4. 点击安装

### 2. 使用扩展

1. **打开任意文件**
2. **选中一段代码**
3. **使用快捷键**: `Ctrl+Shift+C` (Windows/Linux) 或 `Cmd+Shift+C` (macOS)
4. **粘贴到任何地方** - 你会看到格式化的上下文信息！

### 3. 查看结果

复制的内容会像这样：

```
File: example.js
Path: src/utils/example.js
Language: javascript
Selection: Line 10, Char 5 to Line 12, Char 20
Full Path: /home/user/project/src/utils/example.js
Workspace: my-project

---

Selected Code:

---

function hello() {
    console.log("Hello, World!");
}

---

Context for AI assistance:
```

## 📖 使用方式

### 三种调用方式

#### 1. 快捷键（最快）
- **Windows/Linux**: `Ctrl + Shift + C`
- **macOS**: `Cmd + Shift + C`

#### 2. 右键菜单
- 选中代码 → 右键 → 选择 "Copy with Context"

#### 3. 命令面板
- `Ctrl/Cmd + Shift + P`
- 输入 "Copy with Context"
- 回车执行

## 🎯 适用场景

### 场景 1: AI 代码助手
```
你: [复制代码 + 上下文]
AI: 基于完整上下文，准确理解你的问题

✅ AI 知道：
- 文件位置
- 代码语言
- 具体行号
- 所在项目
```

### 场景 2: 代码审查
```
问题: "第 10 行的函数有问题"
解决方案: 复制时包含完整上下文

✅ 审查者可以快速定位
```

### 场景 3: Bug 报告
```
问题: "这个文件报错了"
解决方案: 复制错误代码 + 上下文

✅ 开发者立即知道位置
```

### 场景 4: 团队协作
```
场景: "帮我看看这段代码"
解决方案: 复制代码 + 上下文

✅ 队友知道从哪看起
```

## 🔧 配置

当前版本使用默认配置。未来版本将支持：

```json
{
  "copyWithContext.format": "standard",
  "copyWithContext.includeWorkspace": true,
  "copyWithContext.includeLineContext": true
}
```

## 🐛 常见问题

### Q: 快捷键不工作？
**A**:
1. 检查是否有选中的文本
2. 确认焦点在编辑器中
3. 检查快捷键冲突

### Q: 复制的内容格式不对？
**A**:
1. 确保选中了文本
2. 检查文件是否已保存
3. 查看 VS Code 输出面板

### Q: 如何卸载？
**A**:
1. 转到扩展视图 (`Ctrl+Shift+X`)
2. 找到 "Copy with Context"
3. 点击卸载

## 💡 小技巧

### 技巧 1: 快速复制当前行
- 不选中任何内容
- 使用快捷键
- 扩展会复制当前行

### 技巧 2: 多行代码
- 选中多行代码
- 复制的上下文会包含所有行号

### 技巧 3: 跨文件
- 在不同文件间切换
- 每个文件的上下文都会正确包含

## 📚 更多资源

- **完整文档**: [README.md](README.md)
- **安装指南**: [INSTALL.md](INSTALL.md)
- **使用示例**: [USAGE.md](USAGE.md)
- **贡献指南**: [CONTRIBUTING.md](CONTRIBUTING.md)
- **项目架构**: [ARCHITECTURE.md](ARCHITECTURE.md)

## 🤝 贡献

欢迎贡献！请查看 [CONTRIBUTING.md](CONTRIBUTING.md) 了解如何参与。

## 📞 支持

- 🐛 **报告 Bug**: [创建 Issue](https://github.com/your-username/copy-with-context/issues)
- 💡 **功能建议**: [创建 Issue](https://github.com/your-username/copy-with-context/issues)
- 💬 **讨论**: [GitHub Discussions](https://github.com/your-username/copy-with-context/discussions)

## 🎉 开始使用吧！

你现在可以：
1. ✅ 打开一个文件
2. ✅ 选中一些代码
3. ✅ 按 `Ctrl+Shift+C`
4. ✅ 粘贴到 AI 助手或任何地方

祝你编码愉快！🚀
