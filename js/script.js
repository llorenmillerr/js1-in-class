
// "INTERACTING WITH THE DOM"
// how to attache user interaction to actions on the page

var colors = ["blue", "red", "yellow", "black", "purple", "pink", "green", "orange"];
var textWeights = [100, 200, 300, 400, 500, 600, 700, 800, 900];

// var myId = document.querySelector('#hello');
//
// myId.addEventListener('click', function(e){
//   console.log(e);
// });



// EXCERCISE 1

var input = document.querySelector('#myInput');
var body = document.querySelector('body');
var text = input.textContent
var output = document.querySelector('p')

console.log(text);

// body.addEventListener('keydown', ((e) => {
//
//   let r = Math.floor(Math.random() * ((colors.length - 1) - 1 +1))+1;
//   let randColor = colors[r]
//
//   body.style.backgroundColor = randColor;
//   console.log(e);
//
// }));

function logMessage(string) {
  output.textContent = text;

}






//solution

var myPTag = document.querySelector('#myPTag')


input.addEventListener('keydown', ((e) => {
    let userInput = e.target.value;
    myPTag.textContent = userInput;

    console.log(e);
    if(e.keycode == 13) {

      let r = Math.floor(Math.random() * ((textWeights.length - 1) - 1 +1));
      let randWeight = textWeights[r]

      myPTag.style.fontWeight = randWeight;
    }

}));



















//
