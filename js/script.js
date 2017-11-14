// // ANONYMOUS FUNCTION:
//
// function(name) {
//   console.log(name);
// }('Loren');
//
// // NAMED FUNCTION:
// // best practice
//
// function logLastName(lastName) {
//   console.log(name);
// };
//
//
// // FUNCTION EXPRESSION:
// // do not get hoisted
// var logName = function(name) {
//   console.log(name);
// };
//
// // FUNCTION DECLARATION:
// // does get hoisted
// function declaredFunct() {
//   console.log();
// }
//
//


// Excercise 1
// prompt user for a sentance
// capitalize first capitalize the first letter, lowercase the rest
// alert new sentance
var userQuote = prompt('What is your favorite quote?');


function capFirstLetter(string) {

// // BONUS: deal with multiple sentances
//
// if (string.indexOf(". ") != -1) {
//   let firstLetter = string.substr(string.indexOf(". ") + 3, string.indexOf(". ") + 4);
//   firstLetter = firstLetter.toUpperCase();
//
//   let remainingString = string.substr(string.indexOf(". ") + 5);
//   remainingString = remainingString.toLowerCase();
// }

  let firstLetter = string.substr(0,1);
  firstLetter = firstLetter.toUpperCase();

  let remainingString = string.substr(1,userQuote.length);
  remainingString = remainingString.toLowerCase();

  return `\'${firstLetter}${remainingString}\' - Loren Miller`

};


alert(capFirstLetter(userQuote));

























//
