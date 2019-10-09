import { promises } from "fs";

function a() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('a');
            resolve()

        }, 453);
    })
}

function b() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('b');
            resolve()

        }, 2333);
    })
}

function c() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('c');
            resolve()

        }, 2333);
    })
}
console.log(0);
(async() => {
    await a()
    await b()
    await c()
})()
console.log(1)