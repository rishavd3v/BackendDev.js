template engine -> It is a markup style which gets converted into html.
Here we are using 'ejs'

To setup template engine
1. create a 'views' dir.
2. add 'ejs' files in 'views' dir.
3. in 'express' use 'res.render' instead of 'res.send'
4. Do not add '.ejs' in file name.

for e.g.
```
    app.get("/",function(req,res){
    res.render("index");
    });
```