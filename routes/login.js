const express = require('express');
const router = express.Router();
let operate = require('../dbOperation/operate');
router.post('/', function (req, res, next) {
    let param = {};
    param.email = req.body.email;
    param.password = req.body.password;
    console.log("login接口传过来的参数：" + param.email + " " + param.password);
    operate.save(param).then(result => {
        if (result) {
            res.json({
                data: result,
                success: true
            })
        } else {
            res.json({
                data: result,
                success: false
            })
        }
    });
});
module.exports = router;