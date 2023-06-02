const form = document.getElementById('form');
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("password2");


form.addEventListener('submit',(e)=>{
  e.preventDefault();
  checkValidation()
  if(isFormValid()){
    saveUserData()
    form.onsubmit();
  }else{
    e.preventDefault();
  }
})

function showError(input,message){
  const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}
function showSucces(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(re.test(input.value.trim())) {
      showSucces(input)
  }else {
      showError(input,'Email is not invalid');
  }
}

function checkPasswordMatch(input1, input2){
  if(input1.value != input2.value){
    showError(input2,'Passwords do not match')
  }
}

function checkLength(input,min,max){
  if(input.value.length < min){
    showError(input,`${getFieldName(input)} must be at least ${min} characters`);
  }else if(input.value.length > max){
    showError(input,`password must be at less than ${max} characters`)
  }else{
    showSucces(input)
  }
}
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


function saveUserData() {
  localStorage.setItem("username", username.value);
  localStorage.setItem("email", email.value);
  localStorage.setItem("password", password.value);
  setTimeout(() => {
    window.location = "login.html";
  }, 1500);
 
}
function checkValidation(){
  checkLength(username,3,15)
  checkLength(password,6,15)
  checkEmail(email)
  checkPasswordMatch(password,confirmPassword)
}

function isFormValid(){
  const inputContainers = form.querySelectorAll('.form-control');
  let result = true;
  inputContainers.forEach((item)=>{
    if(item.classList.contains('error')){
      result = false
    }
  })
  return result
}

