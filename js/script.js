let name = "ryeker";

// let name = "ryan";

// console.log(name);

// var string = new String('new string lol');
//
// console.log(string);
//
//
// var myObj = {
//        firstName: "",
//        lastName: ""
//      };
//
// var first = prompt('first name plz');
// myObj.firstName = first;
//
//
// var number = 7;
// var string = 'hello';
// var array = [true, false, true];
// var bool = true;
// var obj = {
//       where : 'far out',
//       when : 'now',
//       pitted : 'yes'
//     };
//
// console.log(number);


function Movie(title, releaseYear, IMDBRating, director) {
  this.title = title;
  this.releaseYear = releaseYear;
  this.IMDBRating = IMDBRating;
  this.direcetor = director;
};

Movie.prototype.sayThings = function() {
  return `the movie ${this.title} was released in ${this.releaseYear} and was directed by ${this.director}`
};

var jaws = new Movie('Jaws', 1975, 8/10, 'Steven Spelberg');
console.log(jaws);

jaws.snootyLevel = 3/10;
jaws.redditRating = 10/10;
console.log(jaws);

// jaws.sayThings();


function Arthouse(title, releaseYear, IMDBRating, director, snootyLevel, redditRating) {
  Movie.call(this, title, releaseYear, IMDBRating, director, snootyLevel, redditRating);
  this.snootyLevel = snootyLevel;
  this.redditRating = redditRating;
};


var theRoom = new Arthouse('The Room', 2002, 0, "Tommy Wiesaou", 10, 0);

console.log(theRoom);


function User(userName, password, email) {
  this.userName = userName;
  this.password = password;
  this.email = email;
}


var userName = prompt('please choose a username.');
var password = prompt('please enter a password.');
var email = prompt('please enter a valid email.');

var newUser = new User(userName, password, email);

console.log(newUser);













//
