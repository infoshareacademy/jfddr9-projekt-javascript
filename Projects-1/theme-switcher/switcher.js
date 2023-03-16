let backgroundPage = document.querySelector("body");

let darkButton = document.querySelector(".btnDark");

darkButton.addEventListener("click", () => changeToMode("white", "black"));

function changeToMode(color, backgroundColor) {
  document.body.style.background = backgroundColor;
  document.querySelector(".btnDark").style.borderColor = color;
  document.querySelector(".btnLight").style.borderColor = color;
  document.querySelector(".btnDark").style.color = color;
  document.querySelector(".btnLight").style.color = color;
}

let lightButton = document.querySelector(".btnLight");

lightButton.addEventListener("click", () => changeToMode("black", "white"));
