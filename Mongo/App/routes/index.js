var express = require('express');
var router = express.Router();

const userModel = require("./users");


router.get("/", function(req, res) {
  res.render('index');
});

router.get("/create", async function(req, res) {
  const createdUser = await userModel.create({
    username: "Rishav",
    name: "Rishav",
    age: 20
  });
  res.send(createdUser);
});

router.get("/alluser",async function(req,res){
  let allusers = await userModel.find();
  res.send(allusers);
});



module.exports = router;
