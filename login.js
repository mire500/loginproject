const form = document.getElementById('form')
const email = document.getElementById('email')
const password = document.getElementById('password')
const fname = document.getElementById('fname')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
const emailValue = email.value.trim();
const passwordValue = password.value.trim();
const fnameValue = fname.value.trim();


if (fnameValue.length >= 2) {
    fname.parentElement.className = 'form-control success';
    document.getElementById("errormsg").innerHTML = "";
  } else {
    fname.parentElement.className = 'form-control fail';
    document.getElementById("errormsg").innerHTML = "Error name must be entered";
  }
if (checkEmail(emailValue)){
    console.log('Success: valid email');
  } else {
    console.log('fail: invalid email');
  }
if (checkEmail(emailValue)) {
    email.parentElement.className = 'form-control success';
    document.getElementById("erroremail").innerHTML = "";
  } else {
    email.parentElement.className = 'form-control fail';
    document.getElementById("erroremail").innerHTML = "Email must with @ format";
  }

if (passwordValue.length >= 6) {
    password.parentElement.className = 'form-control success';
    document.getElementById("errorpass").innerHTML = "";
  } else {
    password.parentElement.className = 'form-control fail';
    document.getElementById("errorpass").innerHTML = "Password needs exceed 6 character";
  }
});


function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email);
  }