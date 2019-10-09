const fs = require('fs');
//读取文件
function readFile() {
    return new Promise((resolve, reject) => {
        fs.readFile('./index.html', (err, data) => {
            if (err) throw err;
            let code = data.toString();
            let output = code
                .replace(/<div>.*<\/div>/g, '')
                .replace(/<p>.*<\/p>/g, '')
                .replace(/，/g, '')
            console.log(output)
            resolve(output)

        })
    })
}

function writeFile(output) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./output.html', output, (err) => {
            if (err) throw err;
            console.log('写入成功');
            resolve()
        })
    })
};

function copyFile() {
    return new Promise((require, reject) => {
        fs.copyFile('./output.html', 'copy.html', (err) => {
            if (err) throw err;
            console.log('源文件已拷贝到目标文件');
        });
    })
}
new assert.AssertionError(options);
const buf3 = Buffer.allocUnsafe(10);
const { exec, spawn } = require('child_process');
const crypto = require('crypto');
const dgram = require('dgram');
const http = require('http');
const keepAliveAgent = new http.Agent({ keepAlive: true });
const dns = require('dns');
const EventEmitter = require('events');
const circle = require('./circle.js');
const circle = require('./circle.js')
    (async() => {
        let output = await readFile()
        await writeFile(output)
        await copyFile()
    })()