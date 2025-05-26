const form = document.querySelector('form')
const email = document.querySelector('[name="email"]')
const password = document.querySelector('[name="password"]')
const userName = document.querySelector('[name="username"]')
const submitBtn = document.querySelector('[type="submit"]')
const checkBox = document.querySelector('[type="checkbox"]')
const onclick = document.querySelector('[type="button"]')

const regexChar = /^[a-zA-Z]+$/
const regexNumLength = /^\+234[0-9]{10}$/
const emailRegex = /^[A-Za-z0-9]+_?[A-Za-z0-9]+@[a-zA-Z]{3,16}.[a-zA-Z]{3,8}.?[a-zA-Z]{0,8}$/

submitBtn.disabled = true

userName.addEventListener('input', (e) => {
 console.log("typing");

 ValidateInput(e, "Username is required")
 TestInput(e, regexChar, "Only alphabetic characters are allowed")
})
userName.addEventListener('focusout', (e) => {
 ValidateInput(e, "Username is required")
})
email.addEventListener('focusout', (e) => {
 ValidateInput(e, "Email is required")
 TestInput(e, emailRegex, "Incorrect email")
})
email.addEventListener('input', (e) => {
 ValidateInput(e, "email is required")
 TestInput(e, emailRegex, "Incorrect email")
})
password.addEventListener('focusout', (e) => {
 ValidateInput(e, "Password is required")
 console.log(e.target);
})
password.addEventListener('input', (e) => {
 ValidateInput(e, "Password is requried")
 WriteInput(e, "I don't want white space")
})
checkBox.addEventListener("change", (e) => {
 if (e.target.checked == false) {
  submitBtn.disabled = true
 } else {
  submitBtn.disabled = false
 }
})



//To make sure users type in the input
function ValidateInput(e, errorMessage) {
 const elem = e.target.nextElementSibling.querySelector('small') || e.target.parentElement.querySelector("small")
 const inputValue = e.target.value

 if (inputValue.trim() == "" || !inputValue) {
  elem.innerText = errorMessage
  submitBtn.disabled = true
 } else {
  elem.innerText = ""
  submitBtn.disabled = false
 }
}

//Make sure users type a particular way
function TestInput(e, regex, regexErrMessage) {
 const elemVal = e.target.value
 const errorElem = e.target.parentElement.querySelector("small")

 if (!regex.test(elemVal)) {
  errorElem.innerText = regexErrMessage
  submitBtn.disabled = true
 }
}

function WriteInput(e, regexErrMessage) {
 const elemVal = e.target.value
 const errorElem = e.target.parentElement.querySelector("small")

 if (elemVal.includes(" ")) {
  errorElem.innerText = regexErrMessage
 }
}

//To show/hide password
function togglePassword() {
 var passwordInput = document.querySelector(".password");
 if (passwordInput.type === "password") {
  passwordInput.type = "text";
 } else {
  passwordInput.type = "password";
 }
}
