const btnDark = document.querySelector('.btnDark')
const btnLight = document.querySelector('.btnLight')

function darkon () {
    document.body.classList.add("dark-mode")
}
function darkoff() {
    document.body.classList.remove("dark-mode")
}

btnDark.addEventListener('click', darkon);
btnLight.addEventListener('click', darkoff)