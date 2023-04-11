const firstNameInput = document.querySelector("#validationCustom01");
const lastNameInput = document.querySelector("#validationCustom02");
firstNameInput.addEventListener("change", firstNameValidation);
lastNameInput.addEventListener("change", lastNameValidation);

const MIN_FIRST_NAME_LENGTH = 3;
const MAX_FIRST_NAME_LENGTH = 25;

function showNameErrorMessage(errorMessage, id) {
  const validationDiv = document.querySelector(id);
  const errorMessageP = document.createElement("p");
  validationDiv.innerHTML = "";
  errorMessageP.style.color = "red";
  errorMessageP.innerText = errorMessage;
  validationDiv.appendChild(errorMessageP);
}

function checkIsOnlyLetters(text) {
  const regEx = new RegExp(/[a-zA-Z]+/);
  return text.match(regEx);
}

function firstNameValidation() {
  const firstNameValue = firstNameInput.value;
  const firstNameLength = firstNameValue.length;
  const validationDiv = document.querySelector("#firstNameValidationMessage");

  validationDiv.innerHTML = "";

  //błąd za mało znaków
  if (firstNameLength < MIN_FIRST_NAME_LENGTH) {
    showNameErrorMessage(
      "Minimalna liczba znakow to 3",
      "#firstNameValidationMessage"
    );
  }

  //błąd za dużo znaków
  if (firstNameLength > MAX_FIRST_NAME_LENGTH) {
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


function lastNameValidation() {
    const lastNameValue = lastNameInput.value;
    const lastNameLength = lastNameValue.length;
    const validationDiv = document.querySelector("#lastNameValidationMessage");
  
    validationDiv.innerHTML = "";
  
    //błąd za mało znaków
    if (lastNameLength < MIN_FIRST_NAME_LENGTH) {
      showNameErrorMessage(
        "Minimalna liczba znakow to 3",
        "#lastNameValidationMessage"
      );
    }
  
    //błąd za dużo znaków
    if (lastNameLength > MAX_FIRST_NAME_LENGTH) {
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
  
