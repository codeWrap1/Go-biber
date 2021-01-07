let password = document.querySelector('#Password');
let text = document.querySelector('#Text');
let long = document.querySelector('.long')
let body = document.querySelector('body');
let btn = document.querySelector('.btn');
btn.addEventListener('click', function() {
  console.log(password.value);
  console.log(text.value);
  let notes = localStorage.getItem('notes');
  if (notes == null) {
    myObj = [];
  }
  else {
    myObj = JSON.parse(notes);
  }
  let object = {
    password: password.value,
    text: text.value
  };
  myObj.push(object);
  localStorage.setItem("notes", JSON.stringify(myObj));
  password.value = '';
  text.value = '';
});