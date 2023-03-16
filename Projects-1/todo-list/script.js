let button = document.querySelector("button");

button.addEventListener("click", addToList);

const todos = [];

function addToList() {
  let input = document.querySelector("#task");
  let task = input.value;
  todos.push(task);

  let table = document.querySelector("#todos");
  let newTaskElement = document.createElement("tr");
  newTaskElement.innerText = task;
  table.appendChild(newTaskElement);
  input.value = "";

  console.log(todos);
}
