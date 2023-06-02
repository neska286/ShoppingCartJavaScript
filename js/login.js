const form = document.getElementById('form');
const username = document.getElementById('username')
const password = document.getElementById('password')


 let getUser = localStorage.getItem('username')
 let getPassword = localStorage.getItem('password')



form.addEventListener('click',login)

function login(e){
    e.preventDefault()
    checkValidation()
    // checkUserData()
    if(isFormValid()){
        checkUserData()
        form.onsubmit();
      }else{
        e.preventDefault();
      }
      
}

function showError(input,message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small')
    small.innerText = message;
}

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className ='form-control success'
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

function checkValidation(){
    checkLength(username,3,15)
    checkLength(password,6,15)
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

function checkUserData(){
    if(getUser && getUser.trim() === username.value.trim() &&
    getPassword && getPassword === password.value){
    setTimeout(()=>{
        window.location = 'index.html'
    },1500)
    }else{
    console.log("username or password is wrong!!")
    }
}