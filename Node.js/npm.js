// npm - node package manager.

// Packages are set of codes that we can download and install and integrate with our code. 

// www.npmjs.com


// INSTALL
// To install a package -> "npm install [package-name]"
// or "npm i [package-name]"




// USE
// usage of every package is given on site.
// For eg -
var oneLinerJoke = require('one-liner-joke');


// PRINT
//Example 1

// var oneLinerJoke = require('one-liner-joke');
// var joke = oneLinerJoke.getRandomJokeWithTag('women');
// console.log(joke);

//Example2

var figlet = require("figlet");

figlet("Rishav!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
//  ____  _     _
// |  _ \(_)___| |__   __ ___   __
// | |_) | / __| '_ \ / _` \ \ / /
// |  _ <| \__ \ | | | (_| |\ V /
// |_| \_\_|___/_| |_|\__,_| \_/