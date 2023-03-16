let lightButton = document.querySelector(".btnLight");
let darkButton = document.querySelector(".btnDark");


lightButton.addEventListener("click", changeToLightMode);
darkButton.addEventListener("click", changeToDarkMode);


function changeToDarkMode() {
    document.body.style.background = "black";
    let button = document.querySelectorAll(".btn");
    button.forEach(button => button.style.borderColor = "white");
    button.forEach(button => button.style.color = "white");
}

function changeToLightMode() {
    document.body.style.background = "white";
    let button = document.querySelectorAll(".btn");
    button.forEach(button => button.style.borderColor = "black");
    button.forEach(button => button.style.color = "black");
}
