<<<<<<< HEAD
let firstNameInput = document.getElementById("validationCustom01");
firstNameInput.addEventListener("change", firstNameValidation);

const MIN_FIRST_NAME = 3;
const MAX_FIRST_NAME = 18;
const MIN_LAST_NAME = 3;
const MAX_LAST_NAME = 34;
const MIN_USER_NAME = 10;
const MAX_USER_NAME = 30;
=======
const firstNameInput = document.querySelector("#validationCustom01")
firstNameInput.addEventListener("change", firstNameValidation)
>>>>>>> main

const MIN_FIRST_NAME_LENGTH = 3
const MAX_FIRST_NAME_LENGTH = 100

const abc = 'abcdefghijklmnoprestuwyz'

function showFirstNameErrorMessage(errorMessage) {
    const validationDiv = document.querySelector("#firstNameValidationMessage")
    const errorMessageP = document.createElement("p")
    errorMessageP.style.color = "red"
    errorMessageP.innerText = errorMessage
    validationDiv.appendChild(errorMessageP)
}

function checkIsOnlyLetters(text) {
    const regEx = new RegExp(/^[a-zA-Z]+$/)
    return text.match(regEx)
}

function firstNameValidation() {
    const firstNameValue = firstNameInput.value
    const firstNameLength = firstNameValue.length

    const validationDiv = document.querySelector("#firstNameValidationMessage")
    validationDiv.innerHTML = ''

    // bład, za mało znaków
    if (firstNameLength < MIN_FIRST_NAME_LENGTH) {
        showFirstNameErrorMessage( "Minimalna liczba znaków to 3")
    }

    // bład, za dużo znaków
    if (firstNameLength > MAX_FIRST_NAME_LENGTH) {
        showFirstNameErrorMessage("Maksymalna liczba znaków to 100")
    }

    // tylko literki

    if (!checkIsOnlyLetters(firstNameValue)){
        showFirstNameErrorMessage("Błędne znaki w imieniu")
    }
}

function showMustGoOn(errorMessage){
    const validationDiv = document.getElementById("fancy-message");
    const errorMessageP = document.createElement("p");
    validationDiv.innerHTML=''
    errorMessageP.style.color = "red";
    errorMessageP.innerText = errorMessage;
    validationDiv.appendChild(errorMessageP)
}

function checkIsOnlyLetters(text){
   const regEx = new RegExp(/[a-z A-Z]+/)
    return text.match(regEx)
}

function firstNameValidation() {
  const firstNameValue = firstNameInput.value;
  const firstNameLength = firstNameValue.length;

  const validationDiv = document.getElementById("fancy-message")
  validationDiv.innerHTML = ''

  if (firstNameLength < MIN_FIRST_NAME) {
    showMustGoOn("Za mało liter w Twoim imieniu!")
   }
  if (firstNameLength >= MAX_FIRST_NAME){
    showMustGoOn("Za dużo liter w Twoim imieniu!")
  }
  if (!checkIsOnlyLetters(firstNameValue)){
    showMustGoOn("To nie litery!")
  }
}

function showMustGoOff(errorMessage){
    const validationDiv = document.getElementById("not-a-fancy-message");
    const errorMessageP = document.createElement("p");
    validationDiv.innerHTML=''
    errorMessageP.style.color = "red";
    errorMessageP.innerText = errorMessage;
    validationDiv.appendChild(errorMessageP)
}
function checkIsOnlyLettersDash(text){
    const regEx = new RegExp(/([a-z A-Z])+-{0,1}([a-z A-Z])+/)
     return text.match(regEx)
 }

let lastNameInput = document.getElementById("validationCustom02");
lastNameInput.addEventListener("change", lastNameValidation);
function lastNameValidation() {
    const lastNameValue = lastNameInput.value;
    const lastNameLength = lastNameValue.length;

    const validationDiv = document.getElementById("not-a-fancy-message")
    validationDiv.innerHTML = ''
  
    if (lastNameLength < MIN_LAST_NAME) {
      showMustGoOff("Za mało liter w Twoim nazwisku!")
     }
    if (lastNameLength >= MAX_LAST_NAME){
      showMustGoOff("Za dużo liter w Twoim nazwisku!")
    }
    if (!checkIsOnlyLettersDash(lastNameValue)){
      showMustGoOff("To nie litery!")
    }
  }

function showMustOn(errorMessage){
    const validationDiv = document.getElementById("another-fancy-message");
    const errorMessageP = document.createElement("p");
    validationDiv.innerHTML=''
    errorMessageP.style.color = "red";
    errorMessageP.innerText = errorMessage;
    validationDiv.appendChild(errorMessageP)
}

let userNameInput = document.getElementById("validationCustomUsername");
userNameInput.addEventListener("change", userNameValidation);
function userNameValidation() {
    const userNameValue = userNameInput.value;
    const userNameLength = userNameValue.length;

    const validationDiv = document.getElementById("another-fancy-message")
    validationDiv.innerHTML = ''
  
    if (userNameLength < MIN_USER_NAME) {
      showMustOn("Za mało liter w nazwie użytkownika!")
     }
    if (userNameLength >= MAX_USER_NAME){
      showMustOn("Za dużo liter w nazwie użytkownika!")
    }
    if (!checkIsOnlyLetters(userNameValue)){
      showMustOn("To nie litery!")
    }
  }

function tellMeCity(errorMessage){
    const validationDiv = document.getElementById("valid-city");
    const errorMessageP = document.createElement("p");
    validationDiv.innerHTML=''
    errorMessageP.style.color = "red";
    errorMessageP.innerText = errorMessage;
    validationDiv.appendChild(errorMessageP)
}
let cityNameInput = document.getElementById('c');
cityNameInput.addEventListener('change', cityNameValidation);

function cityNameValidation(){
    const cityNameValue = cityNameInput.value;

    const validationDiv = document.getElementById("valid-city")
    validationDiv.innerHTML = ''

    if (cityNameValue !== "Bydgoszcz"){
        tellMeCity("To nie Bydgoszcz!")
    }
}
function tellMeState(errorMessage){
    const validationDiv = document.getElementById("valid-state");
    const errorMessageP = document.createElement("p");
    validationDiv.innerHTML=''
    errorMessageP.style.color = "red";
    errorMessageP.innerText = errorMessage;
    validationDiv.appendChild(errorMessageP)
}
let stateNameInput = document.getElementById('validationCustom04');
stateNameInput.addEventListener('change', stateNameValidation);

function stateNameValidation(){
    const stateNameValue = stateNameInput.value;

    const validationDiv = document.getElementById("valid-state")
    validationDiv.innerHTML = ''

    if (stateNameValue !== "kujawsko-pomorskie" ){
        tellMeState("To nie jest kujawsko-pomorskie!")
    }
}
let zipInput = document.getElementById('validationCustom05');
zipInput.addEventListener('change', zipValidation);

function zipValidation(){
    const zipValue = document.getElementById('ZIP')

}