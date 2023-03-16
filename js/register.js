const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const registerBtn = document.getElementById("register-btn");
// console.log(registerBtn)

registerBtn.addEventListener("click", register);

function register(e) {
  e.preventDefault();
  checkValidation();
  saveUserData();
}

function checkValidation() {
  if (username.value == "" && email.value == "" && password.value == "")
    alert("Please fill the data");
}

function saveUserData() {
  localStorage.setItem("username", username.value);
  localStorage.setItem("email", email.value);
  localStorage.setItem("password", password.value);
  setTimeout(() => {
    window.location = "login.html";
  }, 1500);
}
