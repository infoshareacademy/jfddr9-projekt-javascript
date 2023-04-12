//SPOSÓB 1
// let darkButton = document.querySelector(".btnDark")
// darkButton.addEventListener ("click", () => changeToMode("white","black"))

// let lightButton = document.querySelector(".btnLight")
// lightButton.addEventListener ("click", () => changeToMode("black","white"))

// function changeToMode(color, backgroundColor) {
//     document.body.style.background = backgroundColor;
//     document.querySelector(".btnDark").style.borderColor = color;
//     document.querySelector(".btnLight").style.borderColor = color;
//     document.querySelector(".btnDark").style.color = color;
//     document.querySelector(".btnLight").style.color = color;
// }

// SPOSÓB 2
let lightButton = document.querySelector(".btnLight");
let darkButton = document.querySelector(".btnDark");

lightButton.addEventListener("click", () => changeMode("black", "white"));
darkButton.addEventListener("click", () => changeMode("white", "black"));

function changeMode(color, backgroundColor) {
  document.body.style.backgroundColor = backgroundColor;
  let buttons = document.querySelectorAll(".btn");
  buttons.forEach((buttons) => (buttons.style.borderColor = color));
  buttons.forEach((buttons) => (buttons.style.color = color));
}
