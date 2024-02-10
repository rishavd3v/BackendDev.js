
// Variable is intitialised before declaration.  This is hoisting. 
a = 12;
var a;
console.log(a);


// Types -
// primitives and reference
// Primitives - string, number, boolean, bigint, undefined, null, symbol
// Reference - Arrays, Objects, Fuctions, Collections, Dates 

var a = 12; // Primitive
var b = a; // b contains value of 12
a = 12; // value of a is changed to 12 but no effect in value of b;
console.log(a);
console.log(b);

