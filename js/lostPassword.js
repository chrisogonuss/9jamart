const form = document.querySelector('form')
const email = document.querySelector('[name="email"]')
const submitBtn = document.querySelector('[type="submit"]')
const onclick = document.querySelector('[type="button"]')

const regexChar = /^[a-zA-Z]+$/
const regexNumLength = /^\+234[0-9]{10}$/
const emailRegex = /^[A-Za-z0-9]+_?[A-Za-z0-9]+@[a-zA-Z]{3,16}.[a-zA-Z]{3,8}.?[a-zA-Z]{0,8}$/

submitBtn.disabled = true

email.addEventListener('focusout', (e) => {
 ValidateInput(e, "Email is required")
 TestInput(e, emailRegex, "Incorrect email")
})
email.addEventListener('input', (e) => {
 ValidateInput(e, "email is required")
 TestInput(e, emailRegex, "Incorrect email")
})
onclickEvent.addEventListener("change", (e) => {
 if (e.target.checked == false) {
  button.disabled = show
 } else if (e.target.unchecked == true) {
  button.disabled = true
 } else {
  checkBox.disabled = hide
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
