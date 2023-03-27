const firstNameInput = document.querySelector("#validationCustom01");
firstNameInput.addEventListener("change", firstNameValidation);

const MIN_FIRST_NAME_LENGTH = 3;
const MAX_FIRST_NAME_LENGTH = 100;

function showFirstNameErrorMessage(errorMessage) {
  const validationDiv = document.querySelector("#firstNameValidationMessage");
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

function firstNameValidation() {
  const firstNameValue = firstNameInput.value;
  const firstNameLength = firstNameValue.length;

  const validationDiv = document.querySelector("#firstNameValidationMessage");
  validationDiv.innerHTML = "";

  if (firstNameLength < MIN_FIRST_NAME_LENGTH) {
    showFirstNameErrorMessage("Minimalna liczba znaków to 3");
  }

  if (firstNameLength > MAX_FIRST_NAME_LENGTH) {
    showFirstNameErrorMessage("Maksymalna liczba znaków to 100");
  }

  if (!checkIsOnlyLetters(firstNameValue)) {
    showFirstNameErrorMessage("Użyłeś niedozwolonych znaków w imieniu");
  }
}

const lastNameInput = document.querySelector("#validationCustom02");
lastNameInput.addEventListener("change", lastNameValidation);

const MIN_LAST_NAME_LENGTH = 3;
const MAX_LAST_NAME_LENGTH = 100;

function showLastNameErrorMessage(errorMessage) {
  const validationDiv = document.querySelector("#lastNameValidationMessage");
  const errorMessageP = document.createElement("p");
  validationDiv.innerHTML = "";
  errorMessageP.style.color = "red";
  errorMessageP.innerText = errorMessage;
  validationDiv.appendChild(errorMessageP);
}

function checkIsOnlyLetters(text) {
  const regEx = new RegExp(/^([a-zA-Z])+(-)?([a-zA-Z])+$/);
  return text.match(regEx);
}

function lastNameValidation() {
  const lastNameValue = lastNameInput.value;
  const lastNameLength = lastNameValue.length;

  const validationDiv = document.querySelector("#lastNameValidationMessage");
  validationDiv.innerHTML = "";

  if (lastNameLength < MIN_LAST_NAME_LENGTH) {
    showLastNameErrorMessage("Minimalna liczba znaków to 3");
  }

  if (firstNameLength > MAX_LAST_NAME_LENGTH) {
    showLastNameErrorMessage("Maksymalna liczba znaków to 100");
  }

  if (!checkIsOnlyLetters(lastNameValue)) {
    showLastNameErrorMessage("Użyłeś niedozwolonych znaków w nazwisku");
  }
}

const usernameInput = document.querySelector("#validationCustomUsername");
usernameInput.addEventListener("change", usernameValidation);

const MIN_USERNAME_LENGTH = 10;
const MAX_USERNAME_LENGTH = 30;

function showUsernameErrorMessage(errorMessage) {
  const validationDiv = document.querySelector("#usernameValidationMessage");
  const errorMessageP = document.createElement("p");
  validationDiv.innerHTML = "";
  errorMessageP.style.color = "red";
  errorMessageP.innerText = errorMessage;
  validationDiv.appendChild(errorMessageP);
}

function checkIsOnlyLetters(text) {
  const regEx = new RegExp(/^[a-zA-Z0-9]+$/);
  return text.match(regEx);
}

function usernameValidation() {
  const usernameValue = usernameInput.value;
  const usernameLength = usernameValue.length;

  const validationDiv = document.querySelector("#usernameValidationMessage");
  validationDiv.innerHTML = "";

  if (usernameLength < MIN_USERNAME_LENGTH) {
    showUsernameErrorMessage("Minimalna liczba znaków to 10");
  }

  if (usernameLength > MAX_USERNAME_LENGTH) {
    showUsernameErrorMessage("Maksymalna liczba znaków to 30");
  }

  if (!checkIsOnlyLetters(usernameValue)) {
    showUsernameErrorMessage(
      "Użyłeś niedozwolonych znaków w nazwie użytkownika"
    );
  }
}
