const userName = document.getElementById('userName')
const password = document.getElementById('password')
const loginBtn = document.getElementById('loginBtn')

 let getUser = localStorage.getItem('username')
 let getPassword = localStorage.getItem('password')



loginBtn.addEventListener('click',login)

function login(e){
    e.preventDefault()
    checkLoginValidation()
    checkUserData()
      
}

function checkLoginValidation(){
    if(userName.value == "" && password.value == "") alert('Please add login data')

}

function checkUserData(){
    if(getUser && getUser.trim() === userName.value.trim() &&
    getPassword && getPassword === password.value){
    setTimeout(()=>{
        window.location = 'index.html'
    },1500)
    }else{
    console.log("username or password is wrong!!")
    }
}