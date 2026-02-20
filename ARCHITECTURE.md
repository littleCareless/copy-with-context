# 项目架构

本文档描述了 Copy with Context 扩展的内部架构和设计决策。

## 📋 目录

- [概述](#概述)
- [核心组件](#核心组件)
- [数据流](#数据流)
- [配置管理](#配置管理)
- [扩展生命周期](#扩展生命周期)
- [技术栈](#技术栈)

## 概述

Copy with Context 是一个 VS Code 扩展，旨在增强开发者在使用 AI 辅助编程时的体验。它通过复制代码时自动附加完整的上下文信息，让 AI 助手能够更好地理解代码的背景。

## 核心组件

### 1. 扩展入口 (`src/extension.ts`)

```typescript
// 主要功能流程
activate(context) {
  // 1. 注册命令
  const command = vscode.commands.registerCommand(...)

  // 2. 添加到上下文
  context.subscriptions.push(command)
}

deactivate() {
  // 清理资源
}
```

**职责**:
- 扩展激活和停用
- 命令注册
- 资源管理

### 2. 核心功能模块

#### 2.1 选区获取 (Selection Handler)
```typescript
function getSelection(): SelectionInfo {
  // 获取当前编辑器
  const editor = vscode.window.activeTextEditor

  // 获取选区信息
  const selection = editor.selection
  const text = editor.document.getText(selection)

  return {
    text,
    start: selection.start,
    end: selection.end
  }
}
```

#### 2.2 上下文收集 (Context Collector)
```typescript
function collectContext(): ContextData {
  return {
    // 文件信息
    fileName: document.fileName,
    relativePath: getRelativePath(),
    languageId: document.languageId,

    // 选区信息
    selection: getSelection(),

    // 工作区信息
    workspace: getWorkspaceInfo(),

    // 当前行上下文
    lineContext: getCurrentLineContext()
  }
}
```

#### 2.3 格式化器 (Formatter)
```typescript
function formatContext(data: ContextData): string {
  // 构建格式化的上下文字符串
  return `
File: ${data.fileName}
Path: ${data.relativePath}
Language: ${data.languageId}
Selection: Line ${start.line}, Char ${start.char} to Line ${end.line}, Char ${end.char}
Full Path: ${data.fullPath}
Workspace: ${data.workspace}

---

Selected Code:

---

${data.selection.text}

---

Context for AI assistance:
  `.trim()
}
```

#### 2.4 剪贴板管理器 (Clipboard Manager)
```typescript
function copyToClipboard(formatted: string): Promise<void> {
  return vscode.env.clipboard.writeText(formatted)
}
```

## 数据流

```
用户操作 (快捷键/右键/命令)
    ↓
命令处理器
    ↓
获取编辑器选区
    ↓
收集上下文信息
    ↓
格式化输出
    ↓
写入剪贴板
    ↓
显示通知
```

### 数据结构

#### SelectionInfo
```typescript
interface SelectionInfo {
  text: string;           // 选中的文本
  start: Position;        // 起始位置
  end: Position;          // 结束位置
}
```

#### ContextData
```typescript
interface ContextData {
  // 文件信息
  fileName: string;
  relativePath: string;
  fullPath: string;
  languageId: string;

  // 选区信息
  selection: SelectionInfo;

  // 工作区信息
  workspace?: {
    name: string;
    path: string;
  };

  // 上下文信息
  lineContext?: {
    lineNumber: number;
    lineText: string;
  };
}
```

## 配置管理

当前扩展使用 VS Code 的默认配置系统，未来可能支持：

```json
{
  "copyWithContext.format": "standard",
  "copyWithContext.includeWorkspace": true,
  "copyWithContext.includeLineContext": true,
  "copyWithContext.customTemplate": "..."
}
```

## 扩展生命周期

### 激活阶段

1. **VS Code 启动** 或 **首次使用扩展**
2. 调用 `activate()` 函数
3. 注册命令
4. 添加到 `context.subscriptions`
5. 显示激活通知

### 运行阶段

1. 用户触发命令
2. 验证环境（是否有活动编辑器、是否有选区）
3. 执行核心逻辑
4. 更新剪贴板
5. 显示成功/错误通知

### 停用阶段

1. VS Code 关闭 或 扩展被禁用
2. 调用 `deactivate()` 函数
3. 清理资源

## 技术栈

### 核心技术
- **TypeScript**: 类型安全的 JavaScript 超集
- **VS Code Extension API**: 官方扩展 API

### 开发工具
- **ESLint**: 代码质量检查
- **TypeScript Compiler**: 代码编译
- **Mocha**: 测试框架
- **vsce**: 扩展打包工具

### 依赖说明

```json
{
  "dependencies": {
    "@types/vscode": "^1.85.0"  // VS Code 类型定义
  },
  "devDependencies": {
    "@types/node": "^18.19.0",  // Node.js 类型定义
    "@types/mocha": "^10.0.6",  // 测试框架类型
    "typescript": "^5.3.3",     // TypeScript 编译器
    "eslint": "^8.57.0",        // 代码检查
    "@vscode/vsce": "^2.22.0"   // 扩展打包
  }
}
```

## 设计决策

### 为什么使用 TypeScript？

1. **类型安全**: 减少运行时错误
2. **IDE 支持**: 更好的代码提示和重构
3. **可维护性**: 更容易理解和修改

### 为什么使用命令模式？

1. **VS Code 标准**: 遵循 VS Code 最佳实践
2. **可扩展**: 容易添加新的使用方式
3. **可测试**: 命令可以独立测试

### 为什么包含工作区信息？

1. **上下文完整**: AI 可以理解项目结构
2. **多项目支持**: 区分不同项目中的同名文件
3. **调试友好**: 更容易定位问题

## 测试策略

### 单元测试
- 测试格式化函数
- 测试上下文收集
- 测试边界情况

### 集成测试
- 测试完整命令执行
- 测试不同文件类型
- 测试不同选区情况

### 手动测试
- 不同 VS Code 版本
- 不同操作系统
- 不同项目结构

## 性能考虑

### 优化点
1. **惰性加载**: 只在需要时收集上下文
2. **缓存**: 缓存工作区信息
3. **异步操作**: 避免阻塞 UI

### 限制
- 最大选区大小：无硬限制（依赖 VS Code）
- 复杂度：O(1) - 只收集当前文档信息

## 未来扩展

### 可能的改进
1. **自定义模板**: 用户可配置输出格式
2. **多格式支持**: Markdown、JSON 等格式
3. **智能分析**: 自动检测代码类型
4. **批量操作**: 处理多个选区
5. **导出功能**: 保存到文件

### API 扩展
```typescript
// 未来可能的 API
interface CopyWithContextOptions {
  format?: 'text' | 'markdown' | 'json';
  includeWorkspace?: boolean;
  includeLineContext?: boolean;
  customTemplate?: string;
}

function copyWithContext(options?: CopyWithContextOptions): Promise<void>;
```

## 贡献指南

修改架构前请：
1. 讨论设计决策
2. 更新本文档
3. 添加相应测试
4. 确保向后兼容

---

**最后更新**: 2026-01-10
**维护者**: your-username
