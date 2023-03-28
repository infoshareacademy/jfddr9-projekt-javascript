const submit = document.querySelector('.btn')
const firstNameInput = document.querySelector('#validationCustom01')
const lastNameInput = document.querySelector('#validationCustom02')
const userNameInput = document.querySelector('#validationCustomUsername')
const cityInput = document.querySelector('#validationCustom03')
const stateInput = document.querySelector('#validationCustom04')
const zipInput = document.querySelector('#validationCustom05')
const invalidCheckInput = document.querySelector('#invalidCheck')

//MAGIC NUMBERS!

const MIN_FIRST_NAME_LENGTH = 3
const MAX_FIRST_NAME_LENGTH = 25
const MIN_LAST_NAME_LENGTH = 3
const MAX_LAST_NAME_LENGTH = 50
const MIN_USER_NAME_LENGTH = 10
const MAX_USER_NAME_LENGTH = 30

//
// REG-EX//
const regExLetters = new RegExp(/^[a-zA-Z]+$/)

// FUNCTIONS //

function showErrorMessage(querySelectorName, errorText) {
	const validationDiv = document.querySelector(querySelectorName)
	const errorMessage = document.createElement('p')
	validationDiv.innerHTML = ''
	errorMessage.style.color = 'red'
	errorMessage.innerText = errorText
	validationDiv.appendChild(errorMessage)
}

function checkIsOnlyLetters(text) {
	return text.match(regExLetters)
}
function checkIsOnlyNumbers(text) {
	return text.match(regExLetters)
}
//

//FIRST NAME VALID//

const firstNameValidation = () => {
	const firstNameValue = firstNameInput.value
	const firstNameLength = firstNameValue.length
	const validationDiv = document.querySelector('#firstNameValidationMessage')
	validationDiv.innerHTML = ''

	if (firstNameLength < MIN_FIRST_NAME_LENGTH) {
		showErrorMessage('#firstNameValidationMessage', `Imię musi być dłuższe niż 3 znaków`)
	} else if (firstNameLength > MAX_FIRST_NAME_LENGTH) {
		showErrorMessage('#firstNameValidationMessage', `Imię musi być krótsze niż 25 znaków`)
	}
	if (!checkIsOnlyLetters(firstNameValue) && firstNameLength >= MIN_FIRST_NAME_LENGTH) {
		showErrorMessage('#firstNameValidationMessage', `Imię zawiera cyfry`)
	}
}

firstNameInput.addEventListener('change', firstNameValidation)

//

//LAST NAME VALID//

const lastNameValidation = () => {
	const lastNameValue = lastNameInput.value
	const lastNameLength = lastNameValue.length
	const validationDiv = document.querySelector('#lastNameValidationMessage')
	validationDiv.innerHTML = ''

	if (lastNameLength < MIN_LAST_NAME_LENGTH) {
		showErrorMessage('#lastNameValidationMessage', `Nazwisko musi być dłuższe niż 3 znaków`)
	} else if (lastNameLength > MAX_LAST_NAME_LENGTH) {
		showErrorMessage('#lastNameValidationMessage', `Nazwisko musi być krótsze niż 50 znaków`)
	}
	if (!checkIsOnlyLetters(lastNameValue) && lastNameLength >= MIN_LAST_NAME_LENGTH) {
		showErrorMessage('#lastNameValidationMessage', `Nazwisko zawiera cyfry`)
	}
}
lastNameInput.addEventListener('change', lastNameValidation)

//

//USERNAME VALID//

const userNameValidation = () => {
	const userNameValue = userNameInput.value
	const userNameLength = userNameValue.length
	const validationDiv = document.querySelector('#userNameValidationMessage')
	validationDiv.innerHTML = ''

	if (userNameLength < MIN_USER_NAME_LENGTH) {
		showErrorMessage('#userNameValidationMessage', `Nazwa użytkownika musi być dłuższa niż 10 znaków`)
	} else if (userNameLength > MAX_USER_NAME_LENGTH) {
		showErrorMessage('#userNameValidationMessage', `Nazwa użytkownika musi być krótsza niż 30 znaków`)
	}
}
userNameInput.addEventListener('change', userNameValidation)

//

//CITY VALIDATION//

const cityValidation = () => {
	const cityNameValue = cityInput.value
	const validationDiv = document.querySelector('#cityValidationMessage')
	validationDiv.innerHTML = ''

	if (cityNameValue !== 'bydgoszcz' && cityNameValue !== 'Bydgoszcz') {
		showErrorMessage('#cityValidationMessage', `Przecież wiemy, że jesteś z b[rz]ydgoszczy!`)
	}
}
cityInput.addEventListener('change', cityValidation)

//

//STATE VALIDATION//

const stateValidation = () => {
	const stateNameValue = stateInput.value
	const validationDiv = document.querySelector('#stateValidationMessage')
	validationDiv.innerHTML = ''
	let stateNames = ['kujawsko-pomorskie', 'kuj-pom', 'kuj-pomorskie']

	if (!stateNames.includes(stateNameValue)) {
		showErrorMessage('#stateValidationMessage', `Bydgoszcz leży w kujawsko pomorskim`)
	}
}
stateInput.addEventListener('change', stateValidation) || 'kuj-pom'
