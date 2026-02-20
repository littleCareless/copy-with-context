# 更新日志

所有本项目的重大变更都会记录在此文件中。

格式基于 [Keep a Changelog](https://keepachangelog.com/)，且本项目遵循 [Semantic Versioning](https://semver.org/)。

## [Unreleased] - 未发布

### Added
- 未来可能添加的功能

### Changed
- 未来可能的改进

### Fixed
- 未来可能修复的问题

---

## [1.0.0] - 2026-01-10

### ✨ 首次发布

这是一个功能完整的 VS Code 扩展，用于复制代码时附加上下文信息。

### Added

- **核心功能**：
  - 复制选中代码并附带完整上下文信息
  - 包含文件名、路径、语言类型、行列位置等信息
  - 支持工作区信息显示

- **使用方式**：
  - 右键菜单：`Copy with Context`
  - 快捷键：`Ctrl+Shift+C` (Windows/Linux) 或 `Cmd+Shift+C` (macOS)
  - 命令面板：`Copy with Context`

- **复制内容格式**：
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

  [选中的代码内容]

  ---

  Context for AI assistance:
  ```

- **项目文档**：
  - README.md - 项目说明和使用指南
  - INSTALL.md - 详细安装说明
  - USAGE.md - 使用示例
  - TEST.md - 测试指南
  - PACKAGING.md - 打包和发布指南

- **开源标准文件**：
  - LICENSE - MIT 许可证
  - CONTRIBUTING.md - 贡献指南
  - CODE_OF_CONDUCT.md - 行为准则
  - CHANGELOG.md - 更新日志（本文件）
  - .gitignore - Git 忽略配置

- **GitHub 模板**：
  - Issue 模板（Bug 报告、功能请求）
  - Pull Request 模板
  - Issue 配置文件

- **开发工具**：
  - TypeScript 配置
  - ESLint 配置
  - VS Code 调试配置
  - 测试框架配置

### Changed

- 从初始项目结构转换为完整的开源项目结构
- 更新 package.json 添加完整的元数据
- 完善 README.md 文档

### Fixed

- 修复 package.json 中的占位符（your-name, your-username）

---

## 项目历史

### [0.0.1] - 初始概念

- 项目初始化
- 基础功能开发

---

## 发布说明格式

对于未来的版本发布，请使用以下格式：

## [版本号] - YYYY-MM-DD

### Added
- 新增的功能

### Changed
- 对现有功能的改进

### Deprecated
- 即将移除的功能

### Removed
- 已移除的功能

### Fixed
- Bug 修复

### Security
- 安全相关变更

---

## 版本号规则

本项目遵循 [Semantic Versioning](https://semver.org/)（语义化版本）：

- **主版本号 (MAJOR)**: 当你做了不兼容的 API 修改
- **次版本号 (MINOR)**: 当你做了向下兼容的功能性新增
- **修订号 (PATCH)**: 当你做了向下兼容的问题修正

示例：
- `1.0.0` → `1.0.1`: 修复 bug
- `1.0.0` → `1.1.0`: 新增功能
- `1.0.0` → `2.0.0`: 破坏性变更

---

## 贡献

欢迎贡献更新日志！请遵循以下准则：
1. 在 `Unreleased` 部分添加你的变更
2. 使用清晰、简洁的描述
3. 关联相关 Issue（如果适用）
4. 提交 PR 时，更新日志应与代码变更一起提交
