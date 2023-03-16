let button = document.querySelector("button.btn");

button.addEventListener("click", submit);

let user = [];

function submit() {
  firstNameFunction();
  lastNameFunction();
  username();
  city();
  province();
}

function firstNameFunction() {
  let firstNameInput = document.querySelector("input#validationCustom01");
  let firstName = firstNameInput.value;
  let lengthFirstName = firstName.length;

  if (
    /^[a-zA-Z]+$/.test(firstName) &&
    lengthFirstName > 9 &&
    lengthFirstName < 101
  ) {
    console.log("first name true");
    user.push(firstName);
  } else {
    console.log("first name false");
  }

  //   let table = document.querySelector("#todos");
  //   let newTaskElement = document.createElement("tr");
  //   newTaskElement.innerText = task;
  //   table.appendChild(newTaskElement);
  //   input.value = "";
}

function lastNameFunction() {
  let lastNameInput = document.querySelector("input#validationCustom02");
  let lastName = lastNameInput.value;
  let lengthLastName = lastName.length;

  if (
    /^[a-zA-Z.-]+$/.test(lastName) &&
    lengthLastName > 9 &&
    lengthLastName < 101
  ) {
    console.log("last name true");
    user.push(lastName);
  } else {
    console.log("last name false");
  }

  //   let table = document.querySelector("#todos");
  //   let newTaskElement = document.createElement("tr");
  //   newTaskElement.innerText = task;
  //   table.appendChild(newTaskElement);
  //   input.value = "";
}

function username() {
  let usernameInput = document.querySelector("input#validationCustomUsername");
  let username = usernameInput.value;
  let lengthUsername = username.length;

  if (
    /^[a-zA-Z0-9]+$/.test(username) &&
    lengthUsername > 9 &&
    lengthUsername < 31
  ) {
    console.log("username true");
    user.push(username);
  } else {
    console.log("username false");
  }

  //   let table = document.querySelector("#todos");
  //   let newTaskElement = document.createElement("tr");
  //   newTaskElement.innerText = task;
  //   table.appendChild(newTaskElement);
  //   input.value = "";
}

function city() {
  let cityInput = document.querySelector("input#validationCustom03");
  let city = cityInput.value;

  if (city === "Bydgoszcz") {
    console.log("city true");
    user.push(city);
  } else {
    console.log("city false");
  }

  //   let table = document.querySelector("#todos");
  //   let newTaskElement = document.createElement("tr");
  //   newTaskElement.innerText = task;
  //   table.appendChild(newTaskElement);
  //   input.value = "";
}

function province() {
  let provinceInput = document.querySelector("input#validationCustom04");
  let province = provinceInput.value;

  if (
    province === "Kujawsko-pomorskie" ||
    province === "kuj-pom" ||
    province === "kuj-pomorskie"
  ) {
    console.log("province true");
    user.push(province);
  } else {
    console.log("province false");
  }

  //   let table = document.querySelector("#todos");
  //   let newTaskElement = document.createElement("tr");
  //   newTaskElement.innerText = task;
  //   table.appendChild(newTaskElement);
  //   input.value = "";
}

console.log(user);
