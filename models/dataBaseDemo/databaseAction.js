// 增
// 定义一个要插入的数据库对象
// var userEntity = {username: 'admin', password: '123456', nick: '管理员'};

// 使用 user 模块并插入
var userModel = require('../models/registerUser');
userModel.create(userEntity).then(user => {
  // 这里返回的 user 便是插入成功的对象
});

// 删除
// 删除条件，这里指定 username
// var userEntity = {username: username};
// 使用 user 模块并删除
var userModel = require('../models/registerUser');
userModel.delete(userEntity).then(() => {
    // 删除成功
});

// 改
// 定义修改的数据库对象
// var userEntity = {username: 'admin', password: '123', nick: '金梧'};
// 使用 user 模块并更新
var userModel = require('../models/registerUser');
userModel.update(userEntity).then(() => {
    // 更新成功
});

// 查
// 定义修改的数据库对象，这里指定 username
// var userEntity = {username: 'admin'};

// 使用 user 模块
var userModel = require('../models/registerUser');
// 找列表
userModel.find(userEntity).then(users => {
    // 这里返回的 users 便是查找成功的对象
});
// 找唯一对象
userModel.findOne(userEntity).then(user => {
    // 这里返回的 user 便是查找成功的对象
});