const firstNameInput = document.querySelector("#validationCustom01");
firstNameInput.addEventListener("change", firstNameValidation);
const MIN_FIRST_NAME_LENGTH = 3;
const MAX_FIRST_NAME_LENGTH = 100;
function showFirstNameErrorMessage(errorMessage, querySelector) {
  const validationDiv = document.querySelector(querySelector);
  const errorMessageP = document.createElement("p");
  validationDiv.innerHTML = "";
  errorMessageP.style.color = "red";
  errorMessageP.innerText = errorMessage;
  validationDiv.appendChild(errorMessageP);
}
function firstNameValidation() {
  const firstNameValue = firstNameInput.value;
  const firstNameLength = firstNameValue.length;
  const validationDiv = document.querySelector("#firstNameValidationMessage");
  validationDiv.innerHTML = "";
  if (firstNameLength < MIN_FIRST_NAME_LENGTH) {
    showFirstNameErrorMessage(
      "Minimalna liczba znaków to 3",
      "#firstNameValidationMessage"
    );
  }
  if (firstNameLength > MAX_FIRST_NAME_LENGTH) {
    showFirstNameErrorMessage(
      "Maksymalna liczba znaków to 25",
      "#firstNameValidationMessage"
    )
    if (/\d/.test(firstNameValue)) {
        showFirstNameErrorMessage("Pole nie powinno zawierać cyfr.");
      }
  }
}
const lastNameInput = document.querySelector("#validationCustom02");
lastNameInput.addEventListener("change", lastNameValidation);
const MIN_LAST_NAME_LENGTH = 3;
const MAX_LAST_NAME_LENGTH = 25;
function lastNameValidation() {
  const lastNameValue = lastNameInput.value;
  const lastNameLength = lastNameValue.length;
  const validationDiv = document.querySelector("#lastNameValidationMessage");
  validationDiv.innerHTML = "";
  if (lastNameLength < MIN_LAST_NAME_LENGTH) {
    showLastNameErrorMessage(
      "Minimalna liczba znaków to 3",
      "#lastNameValidationMessage"
    );
  }
  if (lastNameLength > MAX_LAST_NAME_LENGTH) {
    showLastNameErrorMessage(
      "Maksymalna liczba znaków to 25",
      "#lastNameValidationMessage"
    )
    if (/\d/.test(firstNameValue)) {
        showFirstNameErrorMessage("Pole nie powinno zawierać cyfr.");
      }
  }
  function showLastNameErrorMessage(errorMessage, querySelector) {
    const validationDiv = document.querySelector(querySelector);
    const errorMessageP = document.createElement("p");
    validationDiv.innerHTML = "";
    errorMessageP.style.color = "red";
    errorMessageP.innerText = errorMessage;
    validationDiv.appendChild(errorMessageP);
  }
}