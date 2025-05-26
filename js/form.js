// Get form elements
const form = document.querySelector('form')
const Name = document.querySelector('[name="name"]')
const email = document.querySelector('[name="email"]')
const countryCode = document.querySelector('[name="countryCode"]')
const phoneNumber = document.querySelector('[name="phoneNumber"]')
const houseNo = document.querySelector('[name="houseNumber"]')
const street = document.querySelector('[name="street"]')
const stateOfResidence = document.querySelector('[name="stateOfResidence"]')
const countryOfResidence = document.querySelector('[name="countryOfResidence"]')
const password = document.querySelector('[name="password"]')
const submitBtn = document.querySelector('[type="submit"]')
const checkBox = document.querySelector('[type="checkbox"]')
const onclick = document.querySelector('[type="button"]')

const regexChar = /^[a-zA-Z]+$/
const regexNumLength = /^\+234[0-9]{10}$/
const regexCountryCodeLength = /^\+234[0-4]{5}$/
const regexHuouseNumLength = /^[0-5]{6}$/
const emailRegex = /^[A-Za-z0-9]+_?[A-Za-z0-9]+@[a-zA-Z]{3,16}.[a-zA-Z]{3,8}.?[a-zA-Z]{0,8}$/

submitBtn.disabled = true

Name.addEventListener('focusout', (e) => {
 ValidateInput(e, "Name is required")
})
Name.addEventListener('input', (e) => {
 ValidateInput(e, "Name is required")
 TestInput(e, regexChar, "Only alphabetic characters are allowed")
})
email.addEventListener('focusout', (e) => {
 ValidateInput(e, "Email is required")
 TestInput(e, emailRegex, "Incorrect email")
})
email.addEventListener('input', (e) => {
 ValidateInput(e, "Email is required")
 TestInput(e, emailRegex, "Incorrect email")
})
countryCode.addEventListener('focusout', (e) => {
 ValidateInput(e, "countryCode is required")
 TestInput(e, regexCountryCodeLength, "Incorrect country code")
})
countryCode.addEventListener('input', (e) => {
 ValidateInput(e, "countryCode is required")
 TestInput(e, emailRegex, "Incorrect country code")
})
phoneNumber.addEventListener('input', (e) => {
 ValidateInput(e, "Phone number is required")
 TestInput(e, regexNumLength, "Phone number must be a Nigerian number")
})
phoneNumber.addEventListener('focusout', (e) => {
 ValidateInput(e, "Phone number is required")
})
houseNo.addEventListener('input', (e) => {
 ValidateInput(e, "House mumber is required")
 TestInput(e, regexHouseNumLength, "House mumber is required")
})
houseNo.addEventListener('focusout', (e) => {
 ValidateInput(e, "House number is required")
})
street.addEventListener('input', (e) => {
 ValidateInput(e, "Street address is required")
 TestInput(e, regexChar, "Street address is required")
})
street.addEventListener('focusout', (e) => {
 ValidateInput(e, "Street address is required")
})
stateOfResidence.addEventListener('input', (e) => {
 ValidateInput(e, "State of residence is required")
 TestInput(e, regexChar, "State of residence is required")
})
stateOfResidence.addEventListener('focusout', (e) => {
 ValidateInput(e, "State of residence is required")
})
countryOfResidence.addEventListener('input', (e) => {
 ValidateInput(e, "Country of residence is required")
 TestInput(e, regexChar, "Country of residence is required")
})
countryOfResidence.addEventListener('focusout', (e) => {
 ValidateInput(e, "Country of residence is required")
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



// form script styling

const url = "http://localhost/9jamart/backend/api/user/create.php";

const form1 = document.querySelector("form");
form1.addEventListener("submit", (e) => {
 e.preventDefault();
 const Name = document.querySelector('[name="name"]').value
 const email = document.querySelector('[name="email"]').value
 const countryCode = document.querySelector('[name="countryCode"]').value
 const phoneNumber = document.querySelector('[name="phoneNumber"]').value
 const houseNo = document.querySelector('[name="houseNumber"]').value
 const street = document.querySelector('[name="street"]').value
 const stateOfResidence = document.querySelector('[name="stateOfResidence"]').value
 const countryOfResidence = document.querySelector('[name="countryOfResidence"]').value
 const password = document.querySelector('[name="password"]').value



 const bodyInfo = {
  Name,
  email,
  countryCode,
  phoneNumber,
  houseNo,
  street,
  stateOfResidence,
  countryOfResidence,
  password,
 };

 console.log(bodyInfo);
 console.log(JSON.stringify(bodyInfo));

 fetch("http://localhost/9jamart/backend/api/user/create.php", {
  headers: {
   "content-Type": "application/json",
  },
  method: "POST",
  body: JSON.stringify(bodyInfo),
 })
  .then((res) => res.json())
  .then((json) => {
   console.log(json);

   if (json.err == false) {
    location.href = "./form.html";
   } else {
    alert(json.message);
   }
  });
});
