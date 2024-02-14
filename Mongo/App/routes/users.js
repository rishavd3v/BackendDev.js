const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/demodb"); // DB creation
// 127.0.0.1 is localhost and 27017 is port
// demodb is name of database.

// Schema / Document
const userSchema = mongoose.Schema({
  username: String,
  name: String,
  age: Number
});


// Model / Collection
module.exports = mongoose.model("user",userSchema); 
// params -> (collection_name,schema)
// Model that we created will be exported which we can use elsewhere.


// Above steps will create a DB named 'demodb', with a collection named 'user' with properties of 'userSchema'.