const path = require('path');	
const express = require('express');
const autoController = require('express-json-server');

const app = express();

//引入、使用路由
var indexRouter = require('./routes/index');
app.use('/', indexRouter);//使用路由

//使用art-template作为模板,设置html结尾为模板文件
// app.engine('html', require('express-art-template'));
// app.set('view options', {
//     debug: process.env.NODE_ENV !== 'production'
// });

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//使用json-server
autoController(app, path.join(__dirname, 'db'));

//静态内容
app.use(express.static(path.join(__dirname, 'public')));	
 
//监听3000端口
app.listen(3000);