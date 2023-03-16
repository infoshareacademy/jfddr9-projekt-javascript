
     


const getValues = () => {
    firstName = document.querySelector('#validationCustom01').value;
    lastName = document.querySelector('#validationCustom02').value;
    userName = document.querySelector('#validationCustomUsername').value;
    city = document.querySelector('#validationCustom03').value;
    state = document.querySelector('#validationCustom04').value;
    zip = document.querySelector('#validationCustom05').value;
}

const checkThisInput = (event) => {

    getValues();

    switch(event.srcElement.id)
    {
        case 'validationCustom01':
            if(firstName.length>=10 && firstName.length<=100 && firstName.match(regExpOnlyLetters))
            {
                console.log('git');
            }
            else {
                console.log('nie git');
            }
            break;
        case 'validationCustom02':
            if(lastName.length>=10 && lastName.length<=100 && lastName.match(regExpLastName))
            {
                if(lastName.match(regExpOnlyOneHyphen) || lastName.match(regExpOnlyLetters))    //być może da radę zrobić to lepiej za pomocą jednego regExpa
                {
                    console.log('git');
                }
                else {
                    console.log('nie git');
                }
            }
            else {
                console.log('nie git');
            }
            //check last
            break;
        case 'validationCustomUsername':
            if(userName.length>=10 && userName.length<=30 && userName.match(regExpUsername))
            {
                console.log('git');
            }
            else {
                console.log('nie git');
            }
            //check name
            break;
        case 'validationCustom03':
            if(city==='Bydgoszcz')
            {
                console.log('git');
            }
            else {
                console.log('nie git');
            }
            //check last
            break;
        case 'validationCustom04':
            if(state==='kuj-pomorskie' || state==='Kujawsko-pomorskie' || state==='kuj-pom')
            {
                console.log('git');
            }
            else {
                console.log('nie git');
            }
            //check name
            break;
        case 'validationCustom05':
            // if(zip.match(regExpZip))
            // {
            //     console.log('git');
            // }
            // else {
            //     console.log('nie git');
            // }
            //check last
            break;    
    }
}


const checkInputs = () => {

    getValues();

    if(firstName.length===0 || lastName.length===0 || userName.length===0 || city.length===0 || state.length===0 || zip.length===0)
    {
        console.log('denied');
    }
    else {
        submitBtn.disabled = false;
    }

}

    let firstName; 
    let lastName; 
    let userName; 
    let city; 
    let state; 
    let zip; 

const regExpOnlyLetters = /^[a-zA-Z]+$/;
const regExpLastName = /^[A-Za-z-]+$/;
const regExpOnlyOneHyphen = /^[^-]+-[^-]+$/; //nie da się przypadkiem jakoś połączyć tego regExpa z regExpLastName?
const regExpUsername = /^[A-Za-z0-9]+$/;

let submitBtn = document.querySelector('.btn-primary');

submitBtn.disabled = true;


let inputs = document.querySelectorAll('.form-control');

for (let input of inputs)
{
    input.addEventListener('input', checkInputs);
    input.addEventListener('focusout', checkThisInput);
}




