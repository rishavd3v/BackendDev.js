var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/createCookie', function(req, res, next) {
  res.cookie("age",26);
  res.send("Cookie created");
});

router.get('/readCookie', function(req, res, next) {
  res.send(req.cookies);
});


router.get('/deleteCookie', function(req, res, next) {
  res.clearCookie("age");
  res.send("Cookie Cleared")
});


module.exports = router;
