//user 数据模型对象
var mongoose = require('mongoose');
var db = require('./dbConnection.js');

var userSchema = new mongoose.Schema(
  {
    username: String,
    email: String,
    password: String,
    nick: String,
    mobile: String,
    question: String,
    answer: String,
    registerTime: String,
    lastLoginTime: String
  }
);

let registerModel = db.model('registerUser', userSchema);
module.exports =  registerModel;