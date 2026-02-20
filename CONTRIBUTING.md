# 贡献指南

感谢您对 Copy with Context 项目的兴趣！我们欢迎所有形式的贡献，包括但不限于：

- 🐛 报告 Bug
- 💡 提出新功能建议
- 📝 改进文档
- 🔧 修复 Bug 或添加功能
- 🎨 改进 UI/UX

## 📋 目录

- [贡献流程](#贡献流程)
- [开发环境设置](#开发环境设置)
- [提交 Issue](#提交-issue)
- [提交 Pull Request](#提交-pull-request)
- [代码规范](#代码规范)
- [提交信息规范](#提交信息规范)

## 贡献流程

### 1. 寻找或创建 Issue

在开始编码之前：
- 浏览现有的 [Issues](https://github.com/your-username/copy-with-context/issues)
- 如果没有找到相关 Issue，请创建一个新的 Issue 来讨论你的想法
- 等待维护者确认后再开始工作

### 2. Fork 仓库

```bash
# Fork 这个仓库到你的 GitHub 账户
# 然后克隆你的 Fork
git clone https://github.com/YOUR_USERNAME/copy-with-context.git
cd copy-with-context
```

### 3. 创建分支

```bash
git checkout -b feature/your-feature-name
# 或者修复 bug
git checkout -b fix/your-bug-fix
```

### 4. 开发和测试

详细步骤请参考 [开发环境设置](#开发环境设置)

### 5. 提交 PR

完成开发后，提交 Pull Request 并关联相关的 Issue。

## 开发环境设置

### 前置要求

- Node.js (v18 或更高版本)
- npm (通常随 Node.js 一起安装)
- Visual Studio Code (用于测试扩展)

### 安装依赖

```bash
npm install
```

### 开发模式

1. **编译代码**:
   ```bash
   npm run compile
   # 或者监听模式
   npm run watch
   ```

2. **启动调试**:
   - 在 VS Code 中按 `F5`
   - 或者使用命令面板选择 "Run Extension"
   - 这会打开一个新的 VS Code 窗口，在其中测试扩展

3. **运行测试**:
   ```bash
   npm test
   ```

### 代码结构

```
copy-with-context/
├── src/                    # 源代码
│   └── extension.ts       # 扩展主文件
├── out/                   # 编译输出 (自动生成)
├── .vscode/               # VS Code 配置
├── package.json           # 扩展配置和依赖
├── tsconfig.json          # TypeScript 配置
└── README.md              # 项目说明
```

## 提交 Issue

### Bug 报告

使用 Bug 报告模板，包含以下信息：

- **问题描述**: 清晰描述问题
- **复现步骤**: 详细说明如何复现
- **预期行为**: 应该发生什么
- **实际行为**: 实际发生了什么
- **环境信息**:
  - VS Code 版本
  - 扩展版本
  - 操作系统
- **截图/日志**: 如果有的话

### 功能请求

使用功能请求模板，包含：

- **功能描述**: 你想要什么功能
- **使用场景**: 这个功能解决什么问题
- **替代方案**: 你目前如何解决这个问题
- **其他信息**: 任何相关的上下文

## 提交 Pull Request

### PR 检查清单

在提交 PR 之前，请确保：

- [ ] 代码遵循项目的代码风格
- [ ] 所有测试通过
- [ ] 新功能有相应的测试
- [ ] 文档已更新
- [ ] PR 描述清晰，关联了相关 Issue

### PR 描述格式

```markdown
## 变更类型
- [ ] Bug 修复
- [ ] 新功能
- [ ] 代码重构
- [ ] 文档更新
- [ ] 其他

## 变更描述
<!-- 描述你的变更 -->

## 相关 Issue
<!-- Fixes #123 -->

## 测试计划
<!-- 描述你如何测试这个变更 -->
```

## 代码规范

### TypeScript 风格

- 使用 2 个空格缩进
- 使用单引号
- 使用 TypeScript 类型注解
- 遵循 ESLint 规则

### 代码检查

```bash
# 运行 linting
npm run lint
```

### 提交信息规范

使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范：

```
<type>(<scope>): <description>

<body>

<footer>
```

**类型 (type)**:
- `feat`: 新功能
- `fix`: Bug 修复
- `docs`: 文档更新
- `style`: 代码风格（不影响功能）
- `refactor`: 代码重构
- `test`: 测试相关
- `chore`: 构建/工具相关

**示例**:
```
feat: 添加自定义快捷键配置

允许用户在设置中自定义复制快捷键。

Closes #45
```

## 代码审查流程

1. **提交审查**: PR 提交后会自动触发 CI 检查
2. **审查反馈**: 维护者会提供反馈和建议
3. **修改**: 根据反馈修改代码
4. **合并**: 通过审查后合并到主分支

## 贡献者

感谢所有贡献者的付出！✨

## 联系方式

如有问题，请通过以下方式联系：
- [创建 Issue](https://github.com/your-username/copy-with-context/issues)
- [讨论区](https://github.com/your-username/copy-with-context/discussions)

## 行为准则

请遵守我们的 [行为准则](CODE_OF_CONDUCT.md)，保持友好和专业的交流环境。
