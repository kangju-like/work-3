const fs = require("fs");
// 读取文件
function readFile() {
    return new Promise((resolve, reject) => {
        fs.readFile('./index.js', (err, data) => {
            if (err) throw err;
            // 读出来是二进制，所以需要用tostring转码。
            let code = data.toString();
            // 使用正则匹配所有的console.log；
            let output = code
                .replace(/console.log\([a-z0-9'"]+\)/g, '')
                .replace(/const/g, 'var')
            console.log(output);
            // 把结果交给下一个promise；
            resolve(output)
        })
    })
}

function writeFile(output) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./output.js', output, (err) => {
            if (err) throw err;
            console.log("写入成功");
        })
    })
};
(async() => {
    let output = await readFile()
    await writeFile(output)
})()