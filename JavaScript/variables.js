// var let const

// var was available in ES5
// let and const is instroduced in ES6

// var is function scoped
// let is braces scoped
function rand(){
    for(var i=0;i<11;i++){
        console.log(i); 
    }
    console.log(i); // 11 will print
}
rand();
function rand1(){
    for(let i=0;i<11;i++){
        console.log(i); 
    }
    console.log(i); // error
}
rand1();

// var adds itself to window
// let does no add itself to window



