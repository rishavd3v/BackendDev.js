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

// Collection
module.exports = mongoose.model("user",userSchema); 
// params -> (name,schema)

// Above steps will create a DB named 'demodb', with a collection named 'user' with properties of 'userSchema'.