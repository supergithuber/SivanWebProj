// 数据库连接对象
var mongoose = require('mongoose');
mongoose.Promise = Promise;

// 连接数据库，数据库名为，端口号为 27017
var db = mongoose.createConnection('mongodb://localhost:27017/sivanMongoDB');
// 监听连接的情况，并在控制台输出响应内容
db.on('error', (error) => console.log('连接数据库错误 => ' + error));
db.on('open', () => console.log('连接数据库成功'));

module.exports = db;