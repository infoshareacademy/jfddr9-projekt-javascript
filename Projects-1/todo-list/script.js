let button = document.querySelector(".btn");  // podpięcie .btn pod zmienna button

button.addEventListener("click", addToList);  // dodanie nasłuchiwania na akcje click => wykonanie funkcji

const todos = [];  // stworzenie pustej tablicy

function addToList() {
    let input = document.querySelector("input.form-control"); // podpięcie input.form-control pod zmienną input
    let task = input.value; // task - pobiera wartość z input
    todos.push(task); // pushuje do tablicy

    let table = document.querySelector("#todos");  // podpięcie elementu #todos pod zmienną table
    let newTaskElement = document.createElement("tr"); // tworzenie nowego elementu w HTML
    newTaskElement.innerText = task; 
    table.appendChild(newTaskElement);
    input.value = "";  // czyści tekst w inpucie i zostaje tylko placeholder 

    console.log(task);
}

