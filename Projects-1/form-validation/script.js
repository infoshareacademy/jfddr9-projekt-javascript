const errDisplay = (valIndex, errWhat, errMessage) => {
    validation[valIndex] = false;
    checkInputs();
    errWhat.innerHTML = errMessage;
}

const checkThisInput = (event) => {
  
    switch(event.srcElement.id)
    {
        case 'validationCustom01':
            let firstName = document.querySelector('#validationCustom01').value;
            if (!(firstName.length >= MIN_NAME_LENGTH))
            {
                errDisplay(0, errFirstName, 'Name cannot have less than 10 characters');
            }
            else if (!(firstName.length <= MAX_NAME_LENGTH))
            {
                errDisplay(0, errFirstName, 'Name cannot have more than 100 characters');
            }
            else if (!(firstName.match(regExpOnlyLetters)))
            {
                errDisplay(0, errFirstName, 'Name must only contain letters');
            }
            else {
                validation[0] = true;
                checkInputs();
            }
            break;
        case 'validationCustom02':
            let lastName = document.querySelector('#validationCustom02').value;
            if(!(lastName.length >= MIN_NAME_LENGTH))
            {
                errDisplay(1, errLastName, 'Last name cannot have less than 10 characters');
            }
            else if(!(lastName.length <= MAX_NAME_LENGTH))
            {
                errDisplay(1, errLastName, 'Last name cannot have more than 100 characters');
            }
            else if(!((lastName.match(regExpLastName)) && (lastName.match(regExpOnlyOneHyphen) || lastName.match(regExpOnlyLetters))))
            {
                errDisplay(1, errLastName, 'Last name must only contein letters. (May contain one hyphen)');
            }
            else {
                validation[1] = true;
                checkInputs();
            }
            break;
        case 'validationCustomUsername':
            let userName = document.querySelector('#validationCustomUsername').value;
            if(!(userName.length >= MIN_USERNAME_LENGTH))
            {
                errDisplay(2, errUserName, 'Username cannot have less than 10 characters');
            }
            else if(!(userName.length <= MAX_USERNAME_LENGTH))
            {
                errDisplay(2, errUserName, 'Username cannot have more than 30 characters');
            }
            else if(!(userName.match(regExpUsername)))
            {
                errDisplay(2, errUserName, 'Username must contain only letters and numbers');
            }
            else {
                validation[2] = true;
                checkInputs();
            }
            
            break;
        case 'validationCustom03':
            let city = document.querySelector('#validationCustom03').value;
            if(city==='Bydgoszcz')
            {
                validation[3] = true;
                checkInputs();
            }
            else {
                validation[3] = false;
                checkInputs();
            }

            break;
        case 'validationCustom04':
            let state = document.querySelector('#validationCustom04').value;
            if(state==='kuj-pomorskie' || state==='Kujawsko-pomorskie' || state==='kuj-pom')
            {
                validation[4] = true;
                checkInputs();
            }
            else {
                validation[4] = false;
                checkInputs();
            }
            break;
        case 'validationCustom05':
            let zip = document.querySelector('#validationCustom05').value;
            if(zip.match(regExpZip) && zip.slice(3) <= MAX_ZIP_NUMBER)
            {
                validation[5] = true;
                checkInputs();
            }
            else {
                validation[5] = false;
                checkInputs();
            }
            break;
    }
}


const checkInputs = () => {


    if(validation.every( valid => valid) && tos.checked)
    {
        submitBtn.disabled = false;
    }
    else {
        submitBtn.disabled = true;
    }

}

const showError = (event) => {

    switch(event.srcElement.id)
    {
        case 'validationCustom01':

            if(validation[0])
            {
                errFirstName.style.display = 'none';
            }
            else {
                checkThisInput(event);
                errFirstName.style.display = 'block';
            }
            break;
        case 'validationCustom02':

            if(validation[1])
            {
                errLastName.style.display = 'none';
            }
            else {
                checkThisInput(event);
                errLastName.style.display = 'block';
            }
            break;
        case 'validationCustomUsername':

            if(validation[2])
            {
                errUserName.style.display = 'none';
            }
            else {
                checkThisInput(event);
                errUserName.style.display = 'block';
            }

            break;
        case 'validationCustom03':

            if(validation[3])
            {
                document.querySelector('.city').style.display = 'none';
            }
            else {
                document.querySelector('.city').style.display = 'block';
            }
            
            break;
        case 'validationCustom04':

            if(validation[4])
            {
                document.querySelector('.state').style.display = 'none';
            }
            else {
                document.querySelector('.state').style.display = 'block';
            }
            
            break;
        case 'validationCustom05':

            if(validation[5])
            {
                document.querySelector('.zip').style.display = 'none';
            }
            else {
                document.querySelector('.zip').style.display = 'block';
            }
            
            break;
    }
}

let tos = document.querySelector('.form-check-input');
tos.addEventListener('click', checkInputs);

let errFirstName = document.querySelector('.first-name');
let errLastName = document.querySelector('.last-name');
let errUserName = document.querySelector('.username');


let validation = [false, false, false, false, false, false];

const MIN_NAME_LENGTH = 10;
const MAX_NAME_LENGTH = 100;
const MIN_USERNAME_LENGTH = 10;
const MAX_USERNAME_LENGTH = 30;
const MAX_ZIP_NUMBER = 980;

const regExpOnlyLetters = /^[a-zA-Z]+$/;
const regExpLastName = /^[A-Za-z-]+$/;
const regExpOnlyOneHyphen = /^[^-]+-[^-]+$/; //nie da się przypadkiem jakoś połączyć tego regExpa z regExpLastName?
const regExpUsername = /^[A-Za-z0-9]+$/;
const regExpZip = /^85-(\d{3})+$/;

let submitBtn = document.querySelector('.btn-primary');

submitBtn.disabled = true;

let inputs = document.querySelectorAll('.form-control');

for (let input of inputs)
{
    input.addEventListener('focusout', showError);
    input.addEventListener('input', checkThisInput);
}