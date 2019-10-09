function a() {
    console.log('a')
}

function b(callback) {
    setTimeout(() => {
        console.log('b');
        callback()
        setTimeout(() => {
            console.log('c')
            setTimeout(() => {
                console.log("d")
            }, 1000);
        }, 1000);
    }, 1000);
}
// 回调让异步变得有意义
// 如果异步没有回调，那么有可能失去异步的结果；；
// 有回调函数的一般这个函数都是异步.JQAPI("callPhone",{
b()
a()