// 引入依赖
var express = require('express');
var router = express.Router();

// 处理前端请求
/* GET home page. */
/* 这边的 router.get 是接收前端的 get 请求
  第一个参数是路由地址，这边的 '/' 就指根路由，也就是http://localhost:3000 啦
  第二个参数是一个响应接口的回调函数，里面有三个参数，分别是 请求头request 响应体response，和一个next
*/
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  // 处理好要返回给前端的数据
  let data = {
      name:'sivanwu',
      age:12 }
  // 用 res.json 方法写接口
  console.log('成功访问根目录，返回数据 =>', data);
  res.json({
    code:0,
    msg:'ok',
    data:data
  })
});

// 导出路由模块
module.exports = router;
