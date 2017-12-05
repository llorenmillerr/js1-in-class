// var forms = document.forms;
// var email = forms.login.email
// var submit = document.querySelector('.submit');
//
// var loginForm = ;
//
// for (let i = 0; i < loginForm.length; i++) {
//
//   loginForm[i].addEventListener('keyup', function(e) {
//
//     for (let j = 0; j < loginForm.length; j++) {
//       val[0] = e.target.value;
//       console.log(val);
//       let mt = false;
//       for (let i = 0; i < val.length; i++) {
//         mt = val[i].length > 0;
//       };
//
//       if ( mt == true ) {
//
//         loginForm.submit.removeAttribute('disabled');
//
//       };
//     };
//   });
//
// };
//
// var hasContent;
//
// submit.addEventListener('click', function(e) {
//   hasContent = false;
//
//   for (let i = 0; i < val.length; i++) {
//       if( val[i].length < 0) {
//         hasContent = true;
//       };
//   };
//
//   if( hasContent == true) {
//     submit.removeAttribute('disabled');
//   } else {
//     submit.setAttribute('disabled');
//   };
//
// });
//
//
// console.log(hasContent);

//
// var loginForm = forms.login;
//
// if (loginForm.password.value.length > 0 $$ loginForm.email.value.length > 0 $$ loginForm.username.value.length > 0 ) {
//
// loginForm.submit.removeAttribute('disabled');
//
// };

var practice = function() {
  debugger;
  var name = 'Loren';
  alert(this);

};

// practice();


var me = 'd';

console.log(this.me);

var clickDiv = document.querySelector('#click')
clickDiv.addEventListener('click', function(e) {
  console.log(this);
});

var checkScope = function() {
  console.log(this);
};

var obj = {
  test: checkScope
};

obj.test();
// checkScope();
// console.log(obj.a);

checkScope.call(obj);





















//
