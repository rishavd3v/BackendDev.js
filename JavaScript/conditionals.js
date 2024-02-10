var arr = [1,2,3,4,5,6];

// For-Each loop 
// Used to iterate over each element of an array
arr.forEach(
    function(val){
        console.log(val);
    }
)

// For-In loop
// Used for objects

var obj = {
    name : "Rishav",
    age : 20,
    city : "Patna"
}

for(var key in obj){
    console.log(obj[key]);
}
console.log(obj);

