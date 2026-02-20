@echo off
setlocal enabledelayedexpansion

echo ================================
echo Copy with Context - 打包脚本
echo ================================
echo.

echo [步骤1] 检查环境...
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [错误] Node.js 未安装
    exit /b 1
)
echo [成功] Node.js 已安装

where npm >nul 2>nul
if %errorlevel% neq 0 (
    echo [错误] npm 未安装
    exit /b 1
)
echo [成功] npm 已安装

echo.
echo [步骤2] 安装依赖...
if not exist "node_modules" (
    call npm install
    if %errorlevel% neq 0 (
        echo [错误] 依赖安装失败
        exit /b 1
    )
    echo [成功] 依赖安装完成
) else (
    echo [跳过] 依赖已存在
)

echo.
echo [步骤3] 编译TypeScript...
call npm run compile
if %errorlevel% neq 0 (
    echo [错误] 编译失败
    exit /b 1
)
echo [成功] 编译完成

echo.
echo [步骤4] 检查编译输出...
if not exist "out\extension.js" (
    echo [错误] 编译输出文件不存在
    exit /b 1
)
echo [成功] 编译输出正常

echo.
echo [步骤5] 打包成vsix...
npx vsce package
if %errorlevel% neq 0 (
    echo [错误] 打包失败
    exit /b 1
)

echo.
echo [成功] 打包完成!
echo.
echo 找到生成的vsix文件:
dir /b *.vsix
echo.
echo 安装方法:
echo 1. 在VS Code中按 Ctrl+Shift+P
echo 2. 输入: Extensions: Install from VSIX...
echo 3. 选择生成的vsix文件
echo.
echo 或使用命令行:
echo code --install-extension [文件名].vsix