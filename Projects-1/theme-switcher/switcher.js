let darkButton = document.querySelector(".btnDark")
let lightButton = document.querySelector(".btnLight")

function darkOff() {
  document.body.classList.add("darkmode")
}
function darkOn() {
  document.body.classList.remove("darkmode")
}

darkButton.addEventListener("click", darkOff);
lightButton.addEventListener("click", darkOn);
