function logMessage() {
  //logs message from p tag on click
  console.log('Hello, World!');
};

//Comparative "String Interpolation" Examples

var name = "Loren";

//ES5 String Interpolation
var message = "Hello there, " + name + "!";
console.log(message);

//ES6 String Interpolation
var secondMessage = `Hello there, ${name}!`;
console.log(secondMessage);

/*
BEST PRACTICE:
Same work with less code = GOOD
*/

//Variable Decleration
// var number;

//Variable Definition
// number = 14;

console.log(number);

var number = 14;
