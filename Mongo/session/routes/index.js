var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
  res.render('index', { title: 'Express' });
});

router.get('/createSession', function(req, res, next) {
  req.session.name1 = "This is a session";
  // when we will go to '/' route a session with value "This is a session" will be saved in the browser.
  res.send("Session created");
});

router.get("/sessionCheck",function(req,res){
  res.send(req.session);
});

router.get("/removeSession", function(req,res){
  req.session.destroy(function(err){
    console.log(err);
    res.send("Session destroyed!!!")
  });
});

module.exports = router;