const btnDark = document.querySelector(".btnDark");
const btnLight = document.querySelector(".btnLight");
const body = document.body;
btnDark.addEventListener("click", () => {
  body.style.backgroundColor = "black";
  btnDark.style.backgroundColor = "transparent";
  btnDark.style.color = "white";
  btnDark.style.borderColor = "white";
  btnLight.style.backgroundColor = "transparent";
  btnLight.style.color = "white";
  btnLight.style.borderColor = "white";
});
btnLight.addEventListener("click", () => {
  body.style.backgroundColor = "white";
  btnDark.style.backgroundColor = "transparent";
  btnDark.style.color = "black";
  btnDark.style.borderColor = "black";
  btnLight.style.backgroundColor = "transparent";
  btnLight.style.color = "black";
  btnLight.style.borderColor = "black";
});
