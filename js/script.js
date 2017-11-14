
// ARRAY

var starWarsFan;
var testArray = ['Dunkirk', 0, starWarsFan = true, 2011];

console.log(testArray, testArray.length);
console.log(Array.isArray(testArray));

// .PUSH
// adds to end of array

var favTVShow = 'Sunny'
testArray.push(favTVShow);

console.log(testArray);

// .UNSHIFT
// inserts to front of array

var favColor = 'blue';
testArray.unshift(favColor);

console.log(testArray);

// .POP
// removes last item

testArray.pop();
console.log(testArray);

// .SHIFT
// removes first item of array

testArray.shift();
console.log(testArray);

// .SPLICE
// removes and *optionally* adds/inserts new items

testArray.splice(1);
console.log(testArray);

// .SLICE
// creates and RNA copy of a range of indeces

testArray.slice()


// Exercise 1
// TRY IT OUT!!!!!!

var favMovieOne = ['Return of the Jedi', 'Luke Skywalker', 1];
var favMovieTwo = ['The Lion King', 'Simba', 3];
var favMovieThree = ['Eternal Sunshine of the Spotless Mind', 'Joel', 5];
var favMovieFour = ['Gladiator', 'Maximus Decimus Meridius', 2];
var favMovieFive = ['300', 'Leonidas', 4];


var favoriteMovies = [];

favoriteMovies.splice(0, 0, favMovieOne, favMovieTwo, favMovieThree, favMovieFour, favMovieFive);

console.log(favoriteMovies);

var movieTitles = [];

movieTitles.push(favoriteMovies[0][0], favoriteMovies[1][0], favoriteMovies[2][0], favoriteMovies[3][0], favoriteMovies[4][0]);
// alert(movieTitles);

var polar = [];
polar.push(movieTitles[0], movieTitles[2]);
console.log(polar);

// alert(polar.length)

favoriteMovies.sort();




// LOOPS

// WHILE LOOP
var arr = ['JS1', 'Websites for Beginners', 'Mobile Friendly Websites', 'Angular 2'];
var n = 0;

while (n < arr.length) {
  console.log(arr[n]);
  n++;
}

// FOR LOOP























//
