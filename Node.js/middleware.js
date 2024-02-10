// middleware is a function that is ran before any route
// If we want to run or do something before going to route we use middleware.

const express = require('express');
const app = express();

app.use(function(req,res,next){
    console.log("Hello from middleware!");
    next();
});
// above code is for middleware it will be run before '/' route.
// when a middleware is ran the request to run route gets stuck so we use 'next()' to push the request 

app.get("/", function (req, res) {
  res.send("Hiiii");
});
app.listen(3000);
