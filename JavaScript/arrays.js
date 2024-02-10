var arr = [1,2,3,4,5];


arr.push(8); //add an element
arr.pop(); // remove an element
arr.unshift(9); // add element in start
arr.shift() // remove element from start
arr.splice(2,2); // remove element arg(start index,no of elements)

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

var a = [1,2,3,4,5];
var b = a; //Copy by reference. here b is reference of a.

b.pop(); //5 is removed from a as well.

// for (let i = 0; i < b.length; i++) {
//     console.log(b[i]);
// }


// how to copy values not reference.
var c = [1,2,3,4,5,6];
var d = [...c]; // '...' is spread operator. It copies the values.

d.pop(); // 5 is removed from d only. 
console.log(c);
console.log(d);