let button = document.querySelector(".btn");

button.addEventListener("click", addToList);

const todos = [];

function addToList() {
    let input = document.getElementById("task");
    let task = input.value;
    todos.push(task)
    console.log(todos);
}

