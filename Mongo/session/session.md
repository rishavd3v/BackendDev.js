Session - Server side
Session is used to store data on server side.

Creating Sessions:
1. install express-session package

2. In app.js-
require("express-session");
app.use(session({
  resave:false,
  saveUninitialized: false,
  secret: "secret!!!"
})); //line 18.


3. Create session in index.js
req.session.[name] = [value];

Note: Session is deleted everytime server is restarted.