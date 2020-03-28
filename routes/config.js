// 客户端通过/getFightingConfig接口，去获取files文件夹下的config
var fs = require('fs');
var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  // 读取对应的配置文件，并返回给客户端
  var config = fs.readFileSync('./files/fighting.config', 'utf8');
  res.json({status: 200, data: JSON.parse(config)});
});

module.exports = router;