var express = require('express');
var router = express.Router();
const userModel = require("./users");


router.get("/", function(req, res) {
  res.render('index');
});

// To add users
// '.create' is asynchronous so we make it synchronous by using 'async-await'.
router.get("/create", async function(req, res) {
  const createdUser = await userModel.create({
    username: "Rishav",
    name: "Rishav",
    age: 20
  });
  res.send(createdUser);
});
// when we will run '/create' route. It will add a schema (document) in our model(collection).


router.get("/alluser",async function(req,res){
  let allusers = await userModel.find();
  res.send(allusers);
});
// '.find' returns all documents present in collection.

router.get("/oneuser",async function(req,res){
  let oneUser = await userModel.findOne({username:"Rishav"});
  console.log(oneUser);
  res.send(oneUser);
});
// 'findOne' returns one user that matches the given condition.


router.get("/delete",async function(req,res){
  let deletedUser = await userModel.findOneAndDelete({
    username:"Rishav"
  });
  console.log(deletedUser);
  res.send(deletedUser);
});
// 'findOneAndDelete' will delete one entity with matching properties and returns it.

module.exports = router;