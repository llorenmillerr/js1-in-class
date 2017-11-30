
// EX 1
// Manipulating HTML with Javascript

// TEXT CONTENT
var text = document.querySelector('.text');
text.textContent = "trial"

// INNER HTML
var text2 = document.querySelector('.text2');
text.innerHTML = '<h1>trial two</h1>'


// EX 2
// Further DOM manip. examples:

var myNewPTag = document.createElement('p');
myNewPTag.textContent = 'test';

console.log(myNewPTag);


// EX 3

var myDiv = document.createElement('div');
myDiv.textContent = 'Ashoka Tano should have killed Anakin..';
var ul = document.querySelector('ul');
var lis = document.querySelectorAll('.myLi');

ul.insertBefore(myNewPTag, lis[4]);

text2.append(myDiv);

// EX 4
// Manipulating class/ID

myNewPTag.className = 'text-center text-danger';

myNewPTag.classList.remove('text-center');
// myNewPTag.classList.add('bg-success');

myNewPTag.addEventListener('click', function(e) {
  myNewPTag.classList.toggle('bg-succes');
});

myNewPTag.setAttribute('src', 'https://google.com');



var myImg = document.createElement('img');
myImg.setAttribute('scr', 'https://roqoodepot.files.wordpress.com/2011/03/clone-wars-02_011.jpg');

text.appendChild(myImg);



























//
