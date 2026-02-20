# 打包指南

这个文档说明如何将 Copy with Context 扩展打包成 `.vsix` 文件。

## 前置要求

- Node.js (v18 或更高版本)
- npm (通常随 Node.js 一起安装)

## 快速开始

### 方法1: 使用自动化脚本 (推荐)

#### Linux/macOS:
```bash
chmod +x package.sh
./package.sh
```

#### Windows:
```cmd
package.bat
```

### 方法2: 手动执行命令

```bash
# 1. 安装依赖
npm install

# 2. 编译TypeScript
npm run compile

# 3. 打包成vsix
npm run package
```

或者使用一条命令:
```bash
npm run build
```

## 打包脚本的功能

自动化脚本会执行以下步骤:

1. **环境检查**: 验证 Node.js 和 npm 是否安装
2. **依赖安装**: 如果 node_modules 不存在，自动安装
3. **编译代码**: 将 TypeScript 编译成 JavaScript
4. **验证输出**: 检查编译后的文件是否存在
5. **打包**: 使用 vsce 生成 .vsix 文件

## 手动打包步骤

### 1. 安装依赖

```bash
npm install
```

这会安装:
- `@vscode/vsce`: VS Code 扩展打包工具
- TypeScript 编译器
- 类型定义文件
- ESLint 等开发工具

### 2. 编译代码

```bash
npm run compile
```

或者:

```bash
npx tsc -p ./
```

编译后的文件会生成在 `out/` 目录:
- `extension.js`: 主要代码
- `extension.js.map`: Source map
- `extension.d.ts`: TypeScript 声明
- `extension.d.ts.map`: 声明文件的 source map

### 3. 打包扩展

```bash
npm run package
```

或者:

```bash
npx vsce package
```

这会生成类似 `copy-with-context-1.0.0.vsix` 的文件。

### 4. 高级打包选项

#### 指定版本号:
```bash
npx vsce package 1.0.1
```

#### 包含/排除文件:
默认情况下，vsce 会自动排除:
- `node_modules`
- `out/*.map` (source maps)
- `src/*.ts` (TypeScript 源码)

如果需要包含这些文件，可以使用 `--no-yarn` 等参数。

#### 检查打包内容:
```bash
npx vsce ls
```

## 安装打包后的扩展

### 方法1: VS Code 界面安装

1. 打开 VS Code
2. 按 `Ctrl+Shift+P` (Windows/Linux) 或 `Cmd+Shift+P` (macOS)
3. 输入: `Extensions: Install from VSIX...`
4. 选择生成的 `.vsix` 文件

### 方法2: 命令行安装

```bash
code --install-extension copy-with-context-1.0.0.vsix
```

### 方法3: 手动安装

1. 将 `.vsix` 文件改名为 `.zip`
2. 解压到 `~/.vscode/extensions/copy-with-context-1.0.0/`
3. 重启 VS Code

## 发布到市场

如果要发布到 VS Code Marketplace:

```bash
# 1. 登录
npx vsce login [publisher-name]

# 2. 发布
npm run publish
```

或者:

```bash
npx vsce publish
```

## 常见问题

### Q: 打包时出现 "vsce not found" 错误?
A: 运行 `npm install` 确保 vsce 已安装。

### Q: 打包后文件太大?
A: 检查是否包含了不必要的文件，可以在 `.vscodeignore` 中添加排除规则。

### Q: 如何更新版本号?
A: 编辑 `package.json` 中的 `version` 字段，然后重新打包。

### Q: 打包失败，提示缺少图标?
A: 在 `images/` 目录下添加 `icon.png` (128x128像素)，或从 package.json 中移除 `"icon"` 字段。

## 文件结构

打包时会包含以下文件:
- `out/extension.js` (编译后的代码)
- `package.json` (扩展配置)
- `README.md` (说明文档)
- 其他在 package.json 中指定的文件

会自动排除:
- `node_modules/`
- `src/` (TypeScript 源码)
- `*.ts` 文件
- 测试文件
- 配置文件 (如 tsconfig.json)

## 验证打包结果

打包完成后，可以:

1. 检查文件大小 (应该在几十KB左右)
2. 使用 `unzip -l file.vsix` 查看内容
3. 在 VS Code 中安装测试

## 故障排除

### 问题: 打包后扩展不工作
- 检查 `out/extension.js` 是否存在
- 确认 `package.json` 中的 `main` 字段指向正确路径

### 问题: 快捷键冲突
- 检查 VS Code 的键盘快捷键设置
- 可以在 package.json 中修改快捷键

### 问题: 右键菜单不显示
- 确认 `activationEvents` 配置正确
- 检查 `when` 条件是否满足