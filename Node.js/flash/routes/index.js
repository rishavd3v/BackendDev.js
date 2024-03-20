var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get("/failed",function(req,res){
  req.flash("age",20);
  res.send("flash created");
});

router.get("/check",function(req,res){
  var a = req.flash("age");
  console.log(a);
  res.send("data printed in console");
});


module.exports = router;