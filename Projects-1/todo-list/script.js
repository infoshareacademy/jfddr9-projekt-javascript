let button = document.querySelector("button.btn");

button.addEventListener("click", addToList);

const todos = []; //ten todos to nazwa tablicy
function addToList() {
  let input = document.getElementById("task");
  let task = input.value;
  todos.push(task);

  let table = document.querySelector("#todos"); //ten todos to odwołanie do elementu z HTML
  let newTaskElement = document.createElement("tr");
  newTaskElement.innerText = task;
  table.appendChild(newTaskElement);
  input.value = "";

  console.log(todos);
}
