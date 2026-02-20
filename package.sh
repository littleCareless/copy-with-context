#!/bin/bash

# Copy with Context - 打包脚本
# 用于编译和打包VS Code扩展

set -e  # 遇到错误立即退出

echo "🚀 开始打包 Copy with Context 扩展..."

# 颜色定义
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# 步骤1: 检查Node.js和npm
echo -e "${YELLOW}步骤1: 检查环境...${NC}"
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ 错误: Node.js 未安装${NC}"
    exit 1
fi

if ! command -v npm &> /dev/null; then
    echo -e "${RED}❌ 错误: npm 未安装${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Node.js: $(node --version)${NC}"
echo -e "${GREEN}✅ npm: $(npm --version)${NC}"

# 步骤2: 安装依赖
echo -e "\n${YELLOW}步骤2: 安装依赖...${NC}"
if [ ! -d "node_modules" ]; then
    npm install
    echo -e "${GREEN}✅ 依赖安装完成${NC}"
else
    echo -e "${GREEN}✅ 依赖已存在，跳过安装${NC}"
fi

# 步骤3: 编译TypeScript
echo -e "\n${YELLOW}步骤3: 编译TypeScript...${NC}"
npm run compile

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ 编译成功${NC}"
else
    echo -e "${RED}❌ 编译失败${NC}"
    exit 1
fi

# 步骤4: 检查编译输出
echo -e "\n${YELLOW}步骤4: 检查编译输出...${NC}"
if [ ! -f "out/extension.js" ]; then
    echo -e "${RED}❌ 错误: 编译输出文件不存在${NC}"
    exit 1
fi
echo -e "${GREEN}✅ 编译输出正常${NC}"

# 步骤5: 创建打包所需的目录结构
echo -e "\n${YELLOW}步骤5: 检查打包资源...${NC}"
if [ ! -d "images" ]; then
    mkdir -p images
    echo -e "${YELLOW}⚠️  警告: images目录已创建，但需要添加图标文件${NC}"
fi

# 步骤6: 执行打包
echo -e "\n${YELLOW}步骤6: 打包成vsix...${NC}"
npx vsce package

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ 打包成功${NC}"

    # 查找生成的vsix文件
    VSIX_FILE=$(ls *.vsix 2>/dev/null | head -1)

    if [ -n "$VSIX_FILE" ]; then
        echo -e "\n${GREEN}🎉 打包完成!${NC}"
        echo -e "${GREEN}📦 生成的文件: $VSIX_FILE${NC}"

        # 显示文件信息
        if command -v ls &> /dev/null; then
            echo -e "\n${YELLOW}文件信息:${NC}"
            ls -lh "$VSIX_FILE"
        fi

        echo -e "\n${YELLOW}安装方法:${NC}"
        echo "1. 在VS Code中按 Ctrl+Shift+P"
        echo "2. 输入: 'Extensions: Install from VSIX...'"
        echo "3. 选择生成的 $VSIX_FILE 文件"
        echo ""
        echo "或者使用命令行安装:"
        echo "code --install-extension $VSIX_FILE"
    else
        echo -e "${RED}❌ 错误: 未找到生成的vsix文件${NC}"
        exit 1
    fi
else
    echo -e "${RED}❌ 打包失败${NC}"
    exit 1
fi

echo -e "\n${GREEN}✅ 全部步骤完成!${NC}"