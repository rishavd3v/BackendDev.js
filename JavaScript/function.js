function hello(){
    console.log("Hello!");
}
hello();

function helloName(name){ //here name is an Parameter.
    console.log("Hello!"+ name);
}
helloName("Rishav"); //here "Rishav" is an argument



// Callback functions
setTimeout(function(){
    console.log("2 sec delay");
},2000)



// First class functions
// We can store function in a variable
var a = function(){
    console.log("I am a first class function");
}
a();

function abc(a){
    a();
}
abc(function(){console.log("Function as argument!");}) // example of first class function