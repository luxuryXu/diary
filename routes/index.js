var express = require('express');
var mysql = require('mysql');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '哈哈哈好' });
});

//创建一个connection
var connection = mysql.createConnection({
  host     : 'localhost',       //主机
  user     : 'root',               //MySQL认证用户名
  password : 'root',        //MySQL认证用户密码
  port: '3306',                   //端口号
  database:'node'
});
//创建一个connection
connection.connect(function(err){
  if(err){
    console.log('[query] - :'+err);
    return;
  }
  console.log('[connection connect]  succeed!');
});

//执行SQL语句
var sql = 'select * from user';
connection.query(sql, function(err, result) {
  if (err) {
    console.log('[query] - :'+err);
    return;
  }
  console.log('The solution is: ', result);
});
//关闭connection
connection.end(function(err){
  if(err){
    return;
  }
  console.log('[connection end] succeed!');
});

module.exports = router;
