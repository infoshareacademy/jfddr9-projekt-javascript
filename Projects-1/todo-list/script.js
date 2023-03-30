<<<<<<< HEAD
let button = document.querySelector("button.btn")

button.addEventListener("click", addToList)

const todos = []

function addToList() {
    let input = document.querySelector("input.form-control")

    let task = input.value
    todos.push(task)

    let table = document.querySelector("#todos")
    let newTaskElement = document.createElement("tr")
    newTaskElement.innerText = task
    table.appendChild(newTaskElement)
    input.value = ""
    console.log(todos)
}



=======
let button = document.querySelector(".btn-primary");
>>>>>>> project-2/KatarzynaBrejna

button.addEventListener("click", addToList);

const todos = [];

function addToList() {
  let input = document.querySelector("input.form-control");
  let task = input.value;

  todos.push(task);

  let table = document.querySelector("#todos");
  let newTaskElement = document.createElement("tr");

  newTaskElement.innerText = task;
  table.appendChild(newTaskElement);
  input.value = "";

  console.log(todos);
}
