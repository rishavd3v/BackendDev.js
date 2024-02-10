// express is a framework for nodejs 
// used for -> routing

// Eg - www.facebook.com/profile
// here '/profile' is a route.

// types of routing -> GET POST
// GET -> data is visible in url 
// POST -> data is 'not' visible in url



// first we will install express using 'npm install express'
const express = require('express');
const app = express();

app.get(
  '/',
  function (req, res) {
    res.send('Hiiii');
  }
);
app.listen(3000); //port
// here '/' represent slash route which is default route for every webpage

// here we have created a server.
// When we will run this file using node, the server will be start running on port 3000.
// To stop the server use 'CTRL+C' in terminal

// every time we make changes to the server we will have to restart the server again to see changes. To deal with this we have another package called as 'nodemon' which we have installed using 'npm i nodemon'
// if we run our file using nodemon ('npx nodemon ./express.js') our server will be restarted automatically everytime we make changes to our server

app.get(
  "/profile",
  function(req,res){
    res.send("hello profile");
  }
);
// here we have made another route "/profile". 

// 'app.listen(3000)' is used only once for each server

// req -> contains user data
// res -> to send server data