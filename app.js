const path = require('path');	
const express = require('express');
const autoController = require('express-json-server');

const app = express();

//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

//引入、使用路由
var indexRouter = require('./routes/index');
app.use('/', indexRouter);

//使用ejs模板引擎
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//使用json-server
autoController(app, path.join(__dirname, 'db'));

//静态内容
app.use(express.static(path.join(__dirname, 'public')));	
 
//监听3000端口
app.listen(3000);