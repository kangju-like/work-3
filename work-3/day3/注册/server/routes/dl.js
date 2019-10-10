var express = require('express')
var router = express.Router()

router.post('/', function(req, res, next) {
    // let tou = req.body;
    // let username = tou.username;
    // let password = tou.password;
    let {
        username,
        password
    } = req.body
    if (username == 'node' && password == 'npm') {
        res.json({
            status: 1,
            msg: "登陆成功"
        });
    } else {
        res.json({
            status: 0,
            msg: "登陆失败"
        })
    }
})
module.exports = router;