// 数据库连接对象
var mongoose = require('mongoose');
mongoose.Promise = Promise;

const DB_URL = 'mongodb://localhost:27017/sivanMongoDB';
// 连接数据库，数据库名为，端口号为 27017
mongoose.connect(DB_URL, { useNewUrlParser: true },(err,res)=>{
    if(!err){
        console.log("mongodb数据库连接成功")
        console.log(res)
    }else{
        console.log("mongodb数据库连接失败", err)
    }
})

module.exports = mongoose;