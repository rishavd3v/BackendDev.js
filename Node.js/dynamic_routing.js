const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World!!!');
});
app.get('/profile', function (req, res) {
  res.send('Hello World, from profile');
});

app.listen(3000);


// dynamic routing -> when a part of route reamains same and some part changes we use dynamic routing
// E.g -> facebook.com/profile/rishav
//        facebook.com/profile/rishi
//        facebook.com/profile/raj
// here facebook.com/profile is same but name is changing so t handle these cases we use dynamic routing.

app.get("/profile/:username",function(req,res){
    res.send(`Hello from ${req.params.username}`);
});
// We can make any route dynamic by using ':'. Now since this arg is passed by the browser the data is contained in 'req' parameter. We access that data using 'req.params.username'.