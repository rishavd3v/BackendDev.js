// objects are basiically used to store data in key value pairs

var a = {}; // blank object

var person = {
  name: "Rishav",
  age: 20,
  occupation: "Student",
  mobile: 7854692132,
    email: "rishav@hotmail.com",

  intro: function () {
    console.log("Hi myself " + person.name);
  },
};

console.log(person.name);
console.log(person.age);
console.log(person.email);
person.intro();
person.name = "Jon Snow";
console.log(person.name);
console.table(person);

//Delete object property
delete person.age;
