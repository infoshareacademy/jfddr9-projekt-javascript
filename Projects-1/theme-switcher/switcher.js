let lightButton = document.querySelector(".btnLight");
let darkButton = document.querySelector(".btnDark");


lightButton.addEventListener("click", () => changeMode("black", "white"));
darkButton.addEventListener("click", () => changeMode("white", "black"));


function changeMode(color, backgroundColor) {
    document.body.style.backgroundColor = backgroundColor;
    let buttons = document.querySelectorAll(".btn");
    buttons.forEach(buttons => buttons.style.borderColor = color);
    buttons.forEach(buttons => buttons.style.color = color);
}

// function changeToLightMode() {
//     document.body.style.backgroundColor = "white";
//     let button = document.querySelectorAll(".btn");
//     button.forEach(button => button.style.borderColor = "black");
//     button.forEach(button => button.style.color = "black");
// }
