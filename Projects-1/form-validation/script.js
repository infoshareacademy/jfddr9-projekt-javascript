const firstNameInput = document.querySelector("#validationCustom01");
const lastNameInput = document.querySelector("#validationCustom02");
const usernameInput = document.querySelector("#validationCustomUsername");
const cityInput = document.querySelector("#validationCustom03");
const stateInput = document.querySelector("#validationCustom04");

firstNameInput.addEventListener("change", firstNameValidation);
lastNameInput.addEventListener("change", lastNameValidation);
usernameInput.addEventListener("change", usernameValidation);
cityInput.addEventListener("change", cityValidation);
stateInput.addEventListener("change", stateValidation);

const MIN_NAME_LENGTH = 10;
const MAX_NAME_LENGTH = 100;
const MIN_USERNAME_LENGTH = 10;
const MAX_USERNAME_LENGTH = 30;

function showNameErrorMessage(errorMessage, id) {
  const validationDiv = document.querySelector(id);
  const errorMessageP = document.createElement("p");
  validationDiv.innerHTML = "";
  errorMessageP.style.color = "red";
  errorMessageP.innerText = errorMessage;
  validationDiv.appendChild(errorMessageP);
}

function checkIsOnlyLetters(text) {
  const regEx = new RegExp(/^[a-zA-Z]+$/);
  return text.match(regEx);
}

//IMIE
function firstNameValidation() {
  const firstNameValue = firstNameInput.value;
  const firstNameLength = firstNameValue.length;
  const validationDiv = document.querySelector("#firstNameValidationMessage");

  validationDiv.innerHTML = "";

  //błąd za mało znaków
  if (firstNameLength < MIN_NAME_LENGTH) {
    showNameErrorMessage(
      "Minimalna liczba znakow to 3",
      "#firstNameValidationMessage"
    );
  }

  //błąd za dużo znaków
  if (firstNameLength > MAX_NAME_LENGTH) {
    showNameErrorMessage(
      "Maksymalna liczba znakow to 25",
      "#firstNameValidationMessage"
    );
  }

  //tylko literki
  if (!checkIsOnlyLetters(firstNameValue)) {
    showNameErrorMessage(
      "Błędne znaki w imieniu",
      "#firstNameValidationMessage"
    );
  }
}

//NAZWISKO
function lastNameValidation() {
  const lastNameValue = lastNameInput.value;
  const lastNameLength = lastNameValue.length;
  const validationDiv = document.querySelector("#lastNameValidationMessage");

  validationDiv.innerHTML = "";

  //błąd za mało znaków
  if (lastNameLength < MIN_NAME_LENGTH) {
    showNameErrorMessage(
      "Minimalna liczba znakow to 3",
      "#lastNameValidationMessage"
    );
  }

  //błąd za dużo znaków
  if (lastNameLength > MAX_NAME_LENGTH) {
    showNameErrorMessage(
      "Maksymalna liczba znakow to 25",
      "#lastNameValidationMessage"
    );
  }

  //tylko literki
  if (!checkIsOnlyLetters(lastNameValue)) {
    showNameErrorMessage(
      "Błędne znaki w imieniu",
      "#lastNameValidationMessage"
    );
  }
}

function checkIsLettersOrNumbers(text) {
  const regEx = new RegExp(/^[a-zA-Z0-9]+$/);
  return text.match(regEx);
}

//NAZWA UŻYTKOWNIKA
function usernameValidation() {
  const usernameValue = usernameInput.value;
  const usernameLength = usernameValue.length;
  const validationDiv = document.querySelector("#usernameValidationMessage");

  validationDiv.innerHTML = "";

  if (usernameLength < MIN_USERNAME_LENGTH) {
    showNameErrorMessage(
      "Minimalna liczba znaków to 10",
      "#usernameValidationMessage"
    );
  }
  if (usernameLength > MAX_USERNAME_LENGTH) {
    showNameErrorMessage(
      "Maksymalna liczba znaków to 30",
      "#usernameValidationMessage"
    );
  }
  if (!checkIsLettersOrNumbers(usernameValue)) {
    showNameErrorMessage(
      "Błędne znaki w nazwie użytkownika",
      "#usernameValidationMessage"
    );
  }
}

//MIASTO
function cityValidation() {
  const cityValue = cityInput.value;
  const validationDiv = document.querySelector("#cityValidationMessage");

  validationDiv.innerHTML = "";

  if (cityValue != "Bydgoszcz") {
    showNameErrorMessage(
      "Niepoprawna nazwa miejscowości",
      "#cityValidationMessage"
    );
  }
}

//WOJEWÓDZTWO
function stateValidation() {
  const stateValue = stateInput.value;
  const validationDiv = document.querySelector("#stateValidationMessage");

  validationDiv.innerHTML = "";

  //co jest nie tak w tym warunku?
  if (
    stateValue !== "Kujawsko-pomorskie" ||
    stateValue !== "kuj-pom" ||
    stateValue !== "kuj-pomorskie"
  ) {
    showNameErrorMessage("Niepoprawna nazwa województwa", "#stateValidationMessage");
  }
}


