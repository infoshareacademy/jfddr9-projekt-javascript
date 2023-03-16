
let darkButton = document.querySelector(".btnDark")
darkButton.addEventListener ("click", () => changeToMode("white","black"))

function changeToMode(color, backgroundColor) {
    document.body.style.background = backgroundColor;
    document.querySelector(".btnDark").style.borderColor = color;
    document.querySelector(".btnLight").style.borderColor = color;
    document.querySelector(".btnDark").style.color = color;
    document.querySelector(".btnLight").style.color = color;
}


let lightButton = document.querySelector(".btnLight")
lightButton.addEventListener ("click", () => changeToMode("black","white"))

// function changeToLightMode(color) {
//     document.body.style.background = "white";
//     document.querySelector(".btnDark").style.borderColor = "black";
//     document.querySelector(".btnLight").style.borderColor = "black";
//     document.querySelector(".btnDark").style.color = "black";
//     document.querySelector(".btnLight").style.color = "black"
// }




// let lightButton = document.querySelector(".btnLight");
// let darkButton = document.querySelector(".btnDark");

// lightButton.addEventListener("click", changeToLightMode);
// darkButton.addEventListener("click", changeToDarkMode);

// function changeToDarkMode() {
//     document.body.style.background = "black";
//     let button = document.querySelectorAll(".btn");
//     button.forEach(button => button.style.borderColor = "white");
//     button.forEach(button => button.style.color = "white");
// }
// function changeToLightMode() {
//     document.body.style.background = "white";
//     let button = document.querySelectorAll(".btn");
//     button.forEach(button => button.style.borderColor = "black");
//     button.forEach(button => button.style.color = "black");
// }



