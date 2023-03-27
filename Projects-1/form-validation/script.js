const MIN_FIRST_NAME_LENGTH = 3;
const MAX_FIRST_NAME_LENGTH = 100;
const MIN_LAST_NAME_LENGTH = 5;
const MAX_LAST_NAME_LENGTH = 100;
const MIN_USERNAME_LENGTH = 7;
const MAX_USERNAME_LENGTH = 100;

let form = document.querySelector(".needs-validation");
let submitBtn = document.querySelector(".btn-primary");

let firstName = document.querySelector("#validationCustom01");
let lastName = document.querySelector("#validationCustom02");
let username = document.querySelector("#validationCustomUsername");
let city = document.querySelector("#validationCustom03");
let state = document.querySelector("#validationCustom04");
let zip = document.querySelector("#validationCustom05");
let terms = document.querySelector(".form-check-input");

let corrrectInputs = [false, false, false, false, false, false, false];
submitBtn.disabled = true;

function enableButtonIfAllFieldsCorrect() {
  if (corrrectInputs.every((b) => b === true)) submitBtn.disabled = false;
  else submitBtn.disabled = true;
  console.log(corrrectInputs);
}

function showErrorMessage(errorMessage, validationDiv) {
  validationDiv.innerHTML = "";
  const errorMessageP = document.createElement("p");
  errorMessageP.style.color = "red";
  errorMessageP.innerText = errorMessage;
  validationDiv.appendChild(errorMessageP);
}

function showCorrectMessage(validationDiv) {
  validationDiv.innerHTML = "";
  const errorMessageP = document.createElement("p");
  errorMessageP.style.color = "#28a745";
  errorMessageP.innerText = "Looks good!";
  validationDiv.appendChild(errorMessageP);
}

function lettersOnly(text) {
  return text.match("^[a-zA-Z]+$");
}

function lettersOnlyPossibleHyphen(text) {
  return text.match("^[a-zA-Z]+-?([a-zA-z]+)?$");
}

function lettersAndNumbersOnly(text) {
  return text.match("^[a-zA-Z0-9]+$");
}

function correctZip(text) {
  const values = text.split("-");
  values[1] = Number(values[1]);
  return (
    text.match("^[0-9]{2}-[0-9]{3}$") &&
    values[0] == 85 &&
    values[1] >= 0 &&
    values[1] <= 980
  );
}

firstName.addEventListener("change", function () {
  let inputText = firstName.value;
  let inputLength = inputText.length;
  const validationDiv = document.querySelector("#firstNameValidationMessage");
  validationDiv.innerHTML = "";
  corrrectInputs[0] = false;
  if (
    inputLength < MIN_FIRST_NAME_LENGTH ||
    inputLength > MAX_FIRST_NAME_LENGTH
  ) {
    showErrorMessage("Wrong input size", validationDiv);
  } else if (!lettersOnly(inputText)) {
    showErrorMessage("Wrong input characters", validationDiv);
  } else {
    showCorrectMessage(validationDiv);
    corrrectInputs[0] = true;
  }
  enableButtonIfAllFieldsCorrect();
});

lastName.addEventListener("change", function () {
  let inputText = lastName.value;
  let inputLength = inputText.length;
  const validationDiv = document.querySelector("#lastNameValidationMessage");
  validationDiv.innerHTML = "";
  corrrectInputs[1] = false;
  if (
    inputLength < MIN_LAST_NAME_LENGTH ||
    inputLength > MAX_LAST_NAME_LENGTH
  ) {
    showErrorMessage("Wrong input size", validationDiv);
  } else if (!lettersOnlyPossibleHyphen(inputText)) {
    showErrorMessage("Wrong input characters", validationDiv);
  } else {
    showCorrectMessage(validationDiv);
    corrrectInputs[1] = true;
  }
  enableButtonIfAllFieldsCorrect();
});

username.addEventListener("change", function () {
  let inputText = username.value;
  let inputLength = username.value.length;
  const validationDiv = document.querySelector("#usernameValidationMessage");
  validationDiv.innerHTML = "";
  corrrectInputs[2] = false;
  if (inputLength < MIN_USERNAME_LENGTH || inputLength > MAX_USERNAME_LENGTH) {
    showErrorMessage("Wrong input size", validationDiv);
  } else if (!lettersAndNumbersOnly(inputText)) {
    showErrorMessage("Wrong input characters", validationDiv);
  } else {
    showCorrectMessage(validationDiv);
    corrrectInputs[2] = true;
  }
  enableButtonIfAllFieldsCorrect();
});

city.addEventListener("change", function () {
  let inputText = city.value;
  const validationDiv = document.querySelector("#cityValidationMessage");
  validationDiv.innerHTML = "";
  corrrectInputs[3] = false;
  if (inputText !== "Bydgoszcz") {
    showErrorMessage("Please provide a valid city.", validationDiv);
  } else {
    showCorrectMessage(validationDiv);
    corrrectInputs[3] = true;
  }
  enableButtonIfAllFieldsCorrect();
});

state.addEventListener("change", function () {
  let inputText = state.value;
  const validationDiv = document.querySelector("#stateValidationMessage");
  validationDiv.innerHTML = "";
  corrrectInputs[4] = false;
  if (
    inputText !== "Kujawsko-pomorskie" &&
    inputText !== "kuj-pom" &&
    inputText !== "kuj-pomorskie"
  ) {
    showErrorMessage("Please provide a valid state.", validationDiv);
  } else {
    showCorrectMessage(validationDiv);
    corrrectInputs[4] = true;
  }
  enableButtonIfAllFieldsCorrect();
});

zip.addEventListener("change", function () {
  let inputText = zip.value;
  const validationDiv = document.querySelector("#zipValidationMessage");
  validationDiv.innerHTML = "";

  corrrectInputs[5] = false;
  if (!correctZip(inputText)) {
    showErrorMessage("Please provide a valid zip.", validationDiv);
  } else {
    showCorrectMessage(validationDiv);
    corrrectInputs[5] = true;
  }
  enableButtonIfAllFieldsCorrect();
});

terms.addEventListener("change", function () {
  let checkbox = document.querySelector(".form-check-input");
  const validationDiv = document.querySelector("#checkboxValidationMessage");
  if (checkbox.checked) {
    showCorrectMessage(validationDiv);
    corrrectInputs[6] = true;
  } else {
    showErrorMessage("You must agree to terms.", validationDiv);
    corrrectInputs[6] = false;
  }
  enableButtonIfAllFieldsCorrect();
});
