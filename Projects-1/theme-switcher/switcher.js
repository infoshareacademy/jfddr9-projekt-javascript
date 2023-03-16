let backgroundPage = document.querySelector("body");

let darkButton = document.querySelector(".btnDark");

darkButton.addEventListener("click", changeToDarkMode);

function changeToDarkMode(color) {
  document.body.style.background = "black";
  document.querySelector(".btnDark").style.borderColor = "white";
  document.querySelector(".btnLight").style.borderColor = "white";
  document.querySelector(".btnDark").style.color = "white";
  document.querySelector(".btnLight").style.color = "white";
}

let lightButton = document.querySelector(".btnLight");

lightButton.addEventListener("click", changeToLightMode);

function changeToLightMode(color) {
  document.body.style.background = "white";
  document.querySelector(".btnDark").style.borderColor = "black";
  document.querySelector(".btnLight").style.borderColor = "black";
  document.querySelector(".btnDark").style.color = "black";
  document.querySelector(".btnLight").style.color = "black";
}
