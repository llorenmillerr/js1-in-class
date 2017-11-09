
////EX1
//
// let isOldEnough = true;
// let hasWork = false;
// let hasMoney = true;
//
// function compare() {
//   if (isOldEnough == true && hasMoney == true && hasWork == false) {
//     console.log('You\'re good!');
//
//   } else {
//       console.log('Don\'t do this to yourself.');
//   }
// }
//
// console.log(compare());
//
//
// // Ex2
//
// var anyString = 'thisString';
// var stringObject = new String(anyString);
//
// function sameSame () {
//   if (anyString === stringObject && anyString == stringObject) {
//     return('Strictly & Loosely Equal');
//
//   }
//   if(anyString === stringObject ) {
//       return('Strictly Equal');
//   }
//   if(anyString == stringObject ) {
//       return('Looseley Equal');
//   }
//   else {
//     return('Not equal');
//   }
// }
//
// var comparison = sameSame();
//
// console.log(comparison);
//
//
// // Excercse 1
//
// var myString = "Ted";
// var myStringObject = new String(myString);
//
// var isStrictlyEqual = myString === myStringObject;
// console.log(isStrictlyEqual); //false?
// var isLooselyEqual = myString == myStringObject;
// console.log(isLooselyEqual); //true?
//
//
// // Ex3
// //NaN = Object
//
// var stringToNum = 'Vacation';
// var yes = parseInt(stringToNum);
//
// console.log(yes);
//
//
//
// // Excercise 2
// // parseInt();
//
//
// var num = prompt('What is a number?', 10);
// num = parseInt(num);
//
// var secondNum = prompt('What is another number?', 10);
// secondNum = parseInt(secondNum);
//
// console.log(num + secondNum);
//
// if (num == 22) {
//   console.log('# 22!');
// }
//
//
// // EX4?
//
// switch (num) {
//   case 22:
//     console.log('# 22!');
//     break;
//   case 10:
//     console.log('10!!!!');
//     break;
//   default:
//     console.log('Is not 22 or 10...');
// }
//
//
//
// var = userREsponse = prompt('Give me a number');
// userREsponse = parseInt(userREsponse);
//
// userREsponse == NaN ? alert('Oh no!') : alert(userREsponse);
//
//
//


//milliseconds/year

mspYear = 31536000000

var birthday = prompt('What is your date of birth?');
var birthDate = new Date(birthday);
var today = new Date();
var age = Math.abs((today - birthDate)/mspYear);
console.log(age);


if (age < 18) {
  alert('You are not old enough to enter.');
} else {
  alert('Your are old enough!')


}










 //
