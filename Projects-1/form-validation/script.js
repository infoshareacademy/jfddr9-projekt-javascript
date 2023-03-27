const firstNameInput = document.querySelector("#validationCustom01")
firstNameInput.addEventListener("change", firstNameValidation)

const MIN_FIRST_NAME_LENGTH = 3
const MAX_FIRST_NAME_LENGTH = 100

const abc = 'abcdefghijklmnoprestuwyz'

function showFirstNameErrorMessage(errorMessage) {
    const validationDiv = document.querySelector("#firstNameValidationMessage")
    const errorMessageP = document.createElement("p")
    errorMessageP.style.color = "red"
    errorMessageP.innerText = errorMessage
    validationDiv.appendChild(errorMessageP)
}

function checkIsOnlyLetters(text) {
    const regEx = new RegExp(/^[a-zA-Z]+$/)
    return text.match(regEx)
}

function firstNameValidation() {
    const firstNameValue = firstNameInput.value
    const firstNameLength = firstNameValue.length

    const validationDiv = document.querySelector("#firstNameValidationMessage")
    validationDiv.innerHTML = ''

    // bład, za mało znaków
    if (firstNameLength < MIN_FIRST_NAME_LENGTH) {
        showFirstNameErrorMessage( "Minimalna liczba znaków to 3")
    }

    // bład, za dużo znaków
    if (firstNameLength > MAX_FIRST_NAME_LENGTH) {
        showFirstNameErrorMessage("Maksymalna liczba znaków to 100")
    }

    // tylko literki

    if (!checkIsOnlyLetters(firstNameValue)){
        showFirstNameErrorMessage("Błędne znaki w imieniu")
    }
}

