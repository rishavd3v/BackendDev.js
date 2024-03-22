var express = require('express');
var router = express.Router();
const userModel = require("./users");


router.get("/", function(req, res) {
  res.render('index');
});

// To add users
// '.create' is asynchronous so we make it synchronous by using 'async-await'.
router.get("/create", async function(req, res) {
  const userData = await userModel.create({
    username: "Ruchi@gmail.com",
    name: "Ruchi",
    description : " I am learning Cloud",
    categories: ["Aws", "GCP", "Azure", "Oracle"],
    age: 21
  });
  res.send(userData);
});
// when we will run '/create' route. It will add a schema (document) in our model(collection).


router.get("/findall",async function(req,res){
  let allusers = await userModel.find();
  res.send(allusers);
});
// '.find' returns all documents present in collection.

router.get("/find",async function(req,res){
  let oneUser = await userModel.find({username:"rishav"});  // Case Sensitive

  console.log(oneUser);
  res.send(oneUser);

});
// We can also use 'findOne' instead of 'find'. 'findOne' returns one user that matches the given condition.

// perform case-insensitive search
router.get("/findCase",async function(req,res){

  var regex = new RegExp("^rishav$",'i'); // ^ $ is used to specify start and end points
  let oneUser = await userModel.find({username:regex});   // Case insensitive search

  console.log(oneUser);
  res.send(oneUser);

});

// search on basis of categories
router.get("/findCatagories",async function(req,res){

  let user = await userModel.find({categories: {$all : ['java']}});

  console.log(user);
  res.send(user);

});

// search on basis of date 
router.get("/findDate",async function(req,res){
  var date1 = new Date("2023-03-20");
  var date2 = new Date("2023-03-19");
  let user = await userModel.find({dateCreated: {$gte:date1}}); //$gte - greaterThanOrEqual, $lte - lessThanOrEqual
  // let user = await userModel.find({dateCreated: {$exists:true}}); // all user that have specified field

  console.log(user);
  res.send(user);

});

router.get("/delete",async function(req,res){
  let deletedUser = await userModel.findOneAndDelete({
    username:"Rishav"
  });
  console.log(deletedUser);
  res.send(deletedUser);
});
// 'findOneAndDelete' will delete one entity with matching properties and returns it.



module.exports = router;