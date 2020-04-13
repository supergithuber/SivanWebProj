var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');

// router
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var fightingConfigRouter = require('./routes/config');
var loginUserRouter = require('./routes/login');

var app = express();
// const DB_URL = 'mongodb://localhost:27017/SivanWebProjDatabase';
// // 连接数据库，数据库名为，端口号为 27017
// mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true },(err,res)=>{
//     if(!err){
//         console.log("mongodb数据库连接成功")
//         console.log(res)
//     }else{
//         console.log("mongodb数据库连接失败", err)
//     }
// })

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/getFightingConfig', fightingConfigRouter);
app.use('/login', loginUserRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
