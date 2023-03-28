let btnDark = document.querySelector('.btnDark')
let btnLight = document.querySelector('.btnLight')
let body = document.querySelector('body')

btnDark.addEventListener('click', nox)
btnLight.addEventListener('click', lumos)

function nox() {
	body.classList.add('invert')
}
function lumos() {
	body.classList.remove('invert')
}
