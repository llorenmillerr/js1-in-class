
// EXCERCISE 1
// my attempt
var forms = document.forms;

var loginBtn = document.querySelector('.log-in');
loginBtn.addEventListener('click', function(e) {
  e.preventDefault(); //Mock Up for submitting data
  var email = forms.loginForm.email.value;
  var username = forms.loginForm.username.value;
  var password = forms.loginForm.password.value;
  localStorage.setItem("username", username);
});

var editName = document.querySelector('.edit-name');
editName.addEventListener('click', function(e) {
  e.preventDefault(); //Mock Up for submitting data
  var username = forms.loginForm.username.value;
  localStorage.setItem('username', username);
});

var clearName = document.querySelector('.clear-name');
clearName.addEventListener('click', function(e) {
  e.preventDefault(); //Mock Up for submitting data
  var username = forms.loginForm.username.value;
  localStorage.removeItem('username');
});


var alertName = document.querySelector('.alert-name');
alertName.addEventListener('click', function(e) {
  e.preventDefault(); //Mock Up for submitting data
  let name = localStorage.getItem('username');
  alert(name);
});

// EXERCISE 1
// w reyker
// not finished

var forms = document.forms;
var edit = forms.loginForm.editUserName
var clear = forms.loginForm.clearUserName
var aleret = forms.loginForm.alertUsername

var email = forms.loginForm.email.value;
var username = forms.loginForm.username.value;
var password = forms.loginForm.password.value;

var btns = document.querySelectorAll('button');

var attachListeners = function(element, evt) {
  element.addEventListener(evt, function(e) {
    switch(element) {
      case edit
        localStorage.setItem('username', )
    }


  });
};





























//
