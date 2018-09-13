// db/index.js
module.exports = {
  delay: 500,                 // 响应延迟(ms), 可选, 默认0
  // foreignKeySuffix: 'Id',  // 外键后缀, 可选, 默认'Id', 'userId'则外键关联user表的id,
  // id: 'id',                // 数据id, 可选, 默认'id'
  json: 'db.json',            // json数据存储到文件中, 可选, 默认直接返回js生成的动态数据
  // jsonSpaces: 2,           // json缩进空格数, 可选, 默认2
  // middlewares: [],         // 中间件列表, 可选
  // noCors: false,           // 禁止跨域访问, 可选, 默认false不禁止
  // noGzip: false,           // 禁止压缩传输, 可选, 默认false不禁止
  // readOnly: false,         // 只读模式, 可选, 默认false非只读
  // route: '/api',           // 挂载到express下的路由, 可选, 默认'/api', 则访问路径为'/api/${table}'
 
  // 路由别名, 可选
  // routes: {
  //   '/companies': '/companies',
  //   '/member': '/user',
  // },
 
  // 表数据, 必须
  tables: {
    code: require('./code'),
  },
 
};