var express = require('express');
var router = express.Router();

// '/'的get 路由
router.get('/', function(req, res, next) {
  	
  	res.render('index',{ title: '列表' });
});

// '/add'的get 路由
router.get('/add', function(req, res, next) {
  	
  	res.render('add',{ title: '增加' });
});

// '/updata'的get 路由
router.get('/updata/:id', function(req, res, next) {
  	
  	res.render('updata',{ title: '更新' });
});

module.exports = router;