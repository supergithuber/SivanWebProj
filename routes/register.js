var express = require('express');
var userModel = require('../models/registerUser');
var router = express.Router();

router.get('/register', (req, res, next) => {
  var username = req.query.username;
  var password = req.query.password;
  var nick = req.query.nick;

  // 参数检查
  if (username == null) {
    res.json({status: 201, msg: '缺少参数username'});
    return;
  }
  if (password == null) {
    res.json({status: 201, msg: '缺少参数password'});
    return;
  }
  if (nick == null) {
    res.json({status: 201, msg: '缺少参数nick'});
    return;
  }

  getUser(username, user => {
    // 检查用户是否存在
    if (user != null) {
      res.json({status: 201, msg: '该用户已存在'});
      return;
    }

    // 正确注册
    var userEntity = {username: username, password: password, nick: nick, registerTime: utils.getDateTime()};
    userModel.create(userEntity).then(user => {
      console.log('创建用户成功');
      res.json({status: 200, data: user});
    });
  });
  
});

router.get('/delete', (req, res, next) => {
  var username = req.query.username;
  var userEntity = {username: username};
  userModel.delete(userEntity).then(() => {
    // 删除成功
    res.json({status: 200, msg: "delete success"});
  });
});

// 获取用户信息
function getUser(username, callback) {
  console.log('调用了去数据库查找用户函数，等待数据库返回');
  userModel.findOne({username: username}).then(user => {
    console.log('从数据库中查找用户 =>', user);
    callback(user);
  });
}

module.exports = router;