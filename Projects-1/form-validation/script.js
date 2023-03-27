const MIN_FIRST_NAME_LENGTH = 3;
const MAX_FIRST_NAME_LENGTH = 100;
const MIN_LAST_NAME_LENGTH = 10;
const MAX_LAST_NAME_LENGTH = 100;
const MIN_USERNAME_LENGTH = 10;
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

function enableButtonIfAllFieldsFilled() {
  if (corrrectInputs.every((b) => b === true)) submitBtn.disabled = false;
  else submitBtn.disabled = true;
  console.log(corrrectInputs);
}
function showFirstNameErrorMessage(errorMessage){
  const validationDiv = document.querySelector("#firstNameValidationMessage")
  validationDiv.innerHTML = ''
  const errorMessageP
}
firstName.addEventListener("change", function () {
  let inputText = firstName.value;
  let inputLength = inputText.length;
  let validationDiv = document.querySelector(
    "#validationCustom01 + .valid-feedback"
  );
  validationDiv.style.display = "block";
  corrrectInputs[0] = false;
  if (
    inputLength < MIN_FIRST_NAME_LENGTH ||
    inputLength > MAX_FIRST_NAME_LENGTH
  ) {
    validationDiv.style.color = "red";
    validationDiv.textContent = "Wrong input size";
  } else if (!inputText.match("^[a-zA-Z]+$")) {
    validationDiv.style.color = "red";
    validationDiv.textContent = "Wrong input characters";
  } else {
    validationDiv.style.color = "#28a745";
    validationDiv.textContent = "Looks good!";
    corrrectInputs[0] = true;
  }
  enableButtonIfAllFieldsFilled();
});
lastName.addEventListener("change", function () {
  let inputText = lastName.value;
  let inputLength = inputText.length;
  let validationDiv = document.querySelector(
    "#validationCustom02 + .valid-feedback"
  );
  validationDiv.style.display = "block";
  corrrectInputs[1] = false;
  if (
    inputLength < MIN_LAST_NAME_LENGTH ||
    inputLength > MAX_LAST_NAME_LENGTH
  ) {
    validationDiv.style.color = "red";
    validationDiv.textContent = "Wrong input size";
  } else if (!inputText.match("^[a-zA-Z]+-?([a-zA-z]+)?$")) {
    validationDiv.style.color = "red";
    validationDiv.textContent = "Wrong input characters";
  } else {
    validationDiv.style.color = "#28a745";
    validationDiv.textContent = "Looks good!";
    corrrectInputs[1] = true;
  }
  enableButtonIfAllFieldsFilled();
});
username.addEventListener("change", function () {
  let inputText = username.value;
  let inputLength = username.value.length;
  let validationDiv = document.querySelector(
    "#validationCustomUsername + .invalid-feedback"
  );
  validationDiv.style.display = "block";
  corrrectInputs[2] = false;
  if (inputLength < MIN_USERNAME_LENGTH || inputLength > MAX_USERNAME_LENGTH) {
    validationDiv.style.color = "red";
    validationDiv.textContent = "Wrong input size";
  } else if (!inputText.match("^[a-zA-Z0-9]+$")) {
    validationDiv.style.color = "red";
    validationDiv.textContent = "Wrong input characters";
  } else {
    validationDiv.style.color = "#28a745";
    validationDiv.textContent = "Looks good!";
    corrrectInputs[2] = true;
  }
  enableButtonIfAllFieldsFilled();
});
city.addEventListener("change", function () {
  let inputText = city.value;
  console.log(inputText);
  let validationDiv = document.querySelector(
    "#validationCustom03 + .invalid-feedback"
  );
  validationDiv.style.display = "block";
  corrrectInputs[3] = false;
  if (inputText !== "Bydgoszcz") {
    validationDiv.style.color = "red";
    validationDiv.textContent = "Please provide a valid city.";
  } else {
    validationDiv.style.color = "#28a745";
    validationDiv.textContent = "Looks good!";
    corrrectInputs[3] = true;
  }
  enableButtonIfAllFieldsFilled();
});
state.addEventListener("change", function () {
  let inputText = state.value;
  console.log(inputText);
  let validationDiv = document.querySelector(
    "#validationCustom04 + .invalid-feedback"
  );
  validationDiv.style.display = "block";
  corrrectInputs[4] = false;
  if (
    inputText !== "Kujawsko-pomorskie" &&
    inputText !== "kuj-pom" &&
    inputText !== "kuj-pomorskie"
  ) {
    validationDiv.style.color = "red";
    validationDiv.textContent = "Please provide a valid state.";
  } else {
    validationDiv.style.color = "#28a745";
    validationDiv.textContent = "Looks good!";
    corrrectInputs[4] = true;
  }
  enableButtonIfAllFieldsFilled();
});
zip.addEventListener("change", function () {
  let inputText = zip.value;
  let validationDiv = document.querySelector(
    "#validationCustom05 + .invalid-feedback"
  );
  validationDiv.style.display = "block";
  const values = inputText.split("-");

  values[1] = Number(values[1]);
  corrrectInputs[5] = false;
  if (!inputText.match("^[0-9]{2}-[0-9]{3}$")) {
    validationDiv.style.color = "red";
    validationDiv.textContent = "Invalid input, expected format 00-000.";
  } else if (values[0] == 85 && values[1] > 0 && values[1] < 980) {
    validationDiv.style.color = "green";
    validationDiv.textContent = "Looks good.";
    corrrectInputs[5] = true;
  } else {
    validationDiv.style.color = "red";
    validationDiv.textContent = "Please provide a valid zip.";
  }
  enableButtonIfAllFieldsFilled();
});

terms.addEventListener("change", function () {
  let checkbox = document.querySelector(".form-check-input");
  if (checkbox.checked) corrrectInputs[6] = true;
  else corrrectInputs[6] = false;

  enableButtonIfAllFieldsFilled();
});
