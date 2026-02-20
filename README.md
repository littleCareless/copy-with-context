# Copy with Context

<div align="center">

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/your-username/copy-with-context/releases)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![VS Code](https://img.shields.io/badge/vscode-^1.85.0-blue.svg)](https://code.visualstudio.com/)
[![Build Status](https://github.com/your-username/copy-with-context/actions/workflows/ci.yml/badge.svg)](https://github.com/your-username/copy-with-context/actions)
[![Downloads](https://img.shields.io/badge/downloads-0%20total-blue.svg)](https://marketplace.visualstudio.com/items?itemName=your-name.copy-with-context)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Code Style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io)

**复制代码时自动附加完整上下文，让 AI 助手更懂你的代码**

[快速开始](#-快速开始) • [功能特性](#-功能特性) • [使用指南](#-使用指南) • [贡献代码](#-贡献代码)

</div>

## 🌟 项目简介

Copy with Context 是一个 Visual Studio Code 扩展，专为 AI 辅助开发场景设计。当你复制代码时，它会自动附加完整的上下文信息，包括文件路径、语言类型、行列位置等，让 AI 助手能够更准确地理解你的代码。

## 🚀 快速开始

### 安装

**已打包完成**: `copy-with-context-1.0.0.vsix`

```bash
# 从 VSIX 安装
code --install-extension copy-with-context-1.0.0.vsix
```

或查看 [详细安装指南](INSTALL.md) | [快速上手教程](QUICKSTART.md)

### 使用

1. **选中代码** → **按 `Ctrl+Shift+C`** → **粘贴到任何地方**

输出示例：
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

## ✨ 功能特性

当您在代码编辑器中选中文本后，使用此扩展可以复制以下信息：

- 📄 **文件名**: 当前文件的名称
- 📁 **文件路径**: 相对路径和完整路径
- 🌐 **语言类型**: 文件的编程语言
- 📍 **选中位置**: 起始行号、字符位置到结束行号、字符位置
- 📝 **选中内容**: 实际选中的代码文本
- 🏗️ **工作区信息**: 如果文件在工作区内，会包含工作区名称
- 🔍 **当前行上下文**: 选中代码所在的行内容

## 🎯 使用指南

### 三种调用方式

#### 1. 快捷键（推荐）⚡
- **Windows/Linux**: `Ctrl + Shift + C`
- **macOS**: `Cmd + Shift + C`

#### 2. 右键菜单 🖱️
- 选中代码 → 右键 → 选择 "Copy with Context"

#### 3. 命令面板 ⌘
- 打开命令面板 (`Ctrl/Cmd + Shift + P`)
- 输入 "Copy with Context"
- 回车执行

## 🎯 适用场景

| 场景 | 优势 |
|------|------|
| **AI 代码助手** | 提供完整上下文，让 AI 更准确理解代码 |
| **代码审查** | 包含精确位置信息，快速定位问题 |
| **问题报告** | 提供详细上下文，便于复现和修复 |
| **团队协作** | 快速分享代码片段及其完整背景 |

## 📚 文档

- 🚀 **[快速开始](QUICKSTART.md)** - 30秒上手教程
- 📖 **[详细安装](INSTALL.md)** - 完整安装指南
- 🛠️ **[使用示例](USAGE.md)** - 实际使用案例
- 🧪 **[测试指南](TEST.md)** - 如何测试扩展
- 🏗️ **[项目架构](ARCHITECTURE.md)** - 技术架构说明
- 📦 **[发布指南](PUBLISHING.md)** - 如何发布扩展

## 🤝 贡献代码

我们欢迎所有形式的贡献！

### 如何贡献

1. 🐛 **报告 Bug**: [创建 Issue](https://github.com/your-username/copy-with-context/issues)
2. 💡 **建议功能**: [创建 Issue](https://github.com/your-username/copy-with-context/issues)
3. 🔧 **提交代码**: 查看 [贡献指南](CONTRIBUTING.md)
4. 📚 **改进文档**: 编辑 README 或其他文档

### 开发流程

```bash
# 1. Fork 仓库
git clone https://github.com/YOUR_USERNAME/copy-with-context.git

# 2. 安装依赖
npm install

# 3. 开发调试
npm run watch  # 监听模式
# 按 F5 启动调试

# 4. 运行测试
npm test

# 5. 提交 PR
git commit -m "feat: 添加新功能"
git push origin feature/your-feature
```

### 贡献者

<a href="https://github.com/your-username/copy-with-context/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=your-username/copy-with-context" />
</a>

## 🛠️ 开发者信息

### 项目结构

```
copy-with-context/
├── src/                      # 源代码
│   └── extension.ts         # 扩展主文件
├── .github/                  # GitHub 配置
│   ├── workflows/           # CI/CD 工作流
│   ├── ISSUE_TEMPLATE/      # Issue 模板
│   └── PULL_REQUEST_TEMPLATE.md  # PR 模板
├── .vscode/                 # VS Code 配置
├── out/                     # 编译输出
├── package.json             # 扩展配置
├── tsconfig.json            # TypeScript 配置
├── .gitignore              # Git 忽略规则
├── CHANGELOG.md            # 更新日志
├── CODE_OF_CONDUCT.md      # 行为准则
├── CONTRIBUTING.md         # 贡献指南
├── LICENSE                 # 许可证
├── README.md               # 项目说明
└── SECURITY.md             # 安全策略
```

### 常用命令

```bash
npm install          # 安装依赖
npm run compile      # 编译 TypeScript
npm run watch        # 监听编译
npm run lint         # 代码检查
npm test             # 运行测试
npm run build        # 完整构建
npm run package      # 打包扩展
npm run publish      # 发布到市场
```

### 配置说明

**package.json** 中的关键字段：
- `name`: 扩展标识符
- `version`: 版本号 (遵循 SemVer)
- `publisher`: 发布者名称
- `engines`: VS Code 版本要求
- `categories`: 扩展分类
- `keywords`: 搜索关键词

## 📊 项目状态

- ✅ **功能完整**: 核心功能已实现
- ✅ **文档齐全**: 包含完整使用和开发文档
- ✅ **测试覆盖**: 包含测试用例
- ✅ **CI/CD**: GitHub Actions 自动化
- 🔄 **持续改进**: 欢迎贡献和建议

## 📄 许可证

本项目采用 [MIT License](LICENSE) - 详见许可证文件

```
MIT License

Copyright (c) 2026 your-username

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 🙏 致谢

- 感谢 VS Code 团队提供优秀的扩展 API
- 感谢所有贡献者的付出
- 感谢用户的反馈和建议

## 📞 联系我们

- 💬 **讨论区**: [GitHub Discussions](https://github.com/your-username/copy-with-context/discussions)
- 🐛 **Issue**: [GitHub Issues](https://github.com/your-username/copy-with-context/issues)
- 📧 **邮件**: your-email@example.com

---

<div align="center">

**如果这个项目对你有帮助，请给我们一个 ⭐️ Star！**

[Star History](https://star-history.com/#your-username/copy-with-context&Date)

</div>