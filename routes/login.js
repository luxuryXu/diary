/**
 * Created by 30613 on 2017/5/10.
 */
var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('login', { title: '哈哈哈好' });
});

express

module.exports = router;