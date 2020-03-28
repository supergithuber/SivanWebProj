//user 数据模型对象
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
    head: String,
    nick: String,
    registerTime: String,
    lastLoginTime: String
  }
);

module.exports = mongoose.model('registerUser', userSchema);