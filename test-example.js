// 这是一个测试文件，用于演示Copy with Context扩展的功能
// 请在VS Code中打开此文件，选中一些代码，然后使用右键菜单或快捷键测试

function greet(name) {
    const message = `Hello, ${name}!`;
    console.log(message);
    return message;
}

class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }
}

// 选中上面的代码并使用 "Copy with Context" 功能
// 你会得到类似这样的输出：
/*
File: test-example.js
Path: test-example.js
Language: javascript
Selection: Line 6, Char 5 to Line 8, Char 20
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
*/