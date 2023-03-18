
     


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
                validation[0] = true;
                checkInputs();
            }
            else {
                console.log('nie git');
                validation[0] = false;
                checkInputs();
            }
            break;
        case 'validationCustom02':
            if(lastName.length>=10 && lastName.length<=100 && lastName.match(regExpLastName))
            {
                if(lastName.match(regExpOnlyOneHyphen) || lastName.match(regExpOnlyLetters))    //być może da radę zrobić to lepiej za pomocą jednego regExpa
                {
                    console.log('git');
                    validation[1] = true;
                    checkInputs();
                }
                else {
                    console.log('nie git');
                    validation[1] = false;
                    checkInputs();
                }
            }
            else {
                console.log('nie git');
                validation[1] = false;
                checkInputs();
            }
            //check last
            break;
        case 'validationCustomUsername':
            if(userName.length>=10 && userName.length<=30 && userName.match(regExpUsername))
            {
                console.log('git');
                validation[2] = true;
                checkInputs();
            }
            else {
                console.log('nie git');
                validation[2] = false;
                checkInputs();
            }
            //check name
            break;
        case 'validationCustom03':
            if(city==='Bydgoszcz')
            {
                console.log('git');
                validation[3] = true;
                checkInputs();
            }
            else {
                console.log('nie git');
                validation[3] = false;
                checkInputs();
            }
            //check last
            break;
        case 'validationCustom04':
            if(state==='kuj-pomorskie' || state==='Kujawsko-pomorskie' || state==='kuj-pom')
            {
                console.log('git');
                validation[4] = true;
                checkInputs();
            }
            else {
                console.log('nie git');
                validation[4] = false;
                checkInputs();
            }
            //check name
            break;
        case 'validationCustom05':
            if(zip.match(regExpZip) && zip.slice(3)<=980)
            {
                console.log('git');
                validation[5] = true;
                checkInputs();
            }
            else {
                console.log('nie git');
                validation[5] = false;
                checkInputs();
            }
            break;    
    }
}


const checkInputs = () => {

    if(validation.every( valid => valid===true))
    {
        console.log('denied');
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
                document.querySelector('.first-name').style.display = 'none';
                console.log('no error');
            }
            else {
                document.querySelector('.first-name').style.display = 'block';
                console.log('error');
            }
            break;
        case 'validationCustom02':

            if(validation[1])
            {
                document.querySelector('.last-name').style.display = 'none';
                console.log('no error');
            }
            else {
                document.querySelector('.last-name').style.display = 'block';
            }
            
            break;
        case 'validationCustomUsername':

            if(validation[2])
            {
                document.querySelector('.username').style.display = 'none';
                console.log('no error');
            }
            else {
                document.querySelector('.username').style.display = 'block';
            }
            
            break;
        case 'validationCustom03':

            if(validation[3])
            {
                document.querySelector('.city').style.display = 'none';
                console.log('no error');
            }
            else {
                document.querySelector('.city').style.display = 'block';
            }
            
            break;
        case 'validationCustom04':

            if(validation[4])
            {
                document.querySelector('.state').style.display = 'none';
                console.log('no error');
            }
            else {
                document.querySelector('.state').style.display = 'block';
            }
            
            break;
        case 'validationCustom05':

            if(validation[5])
            {
                document.querySelector('.zip').style.display = 'none';
                console.log('no error');
            }
            else {
                document.querySelector('.zip').style.display = 'block';
            }
            
            break;    
    }
}

    let firstName; 
    let lastName; 
    let userName; 
    let city; 
    let state; 
    let zip;
    
    let validation = [false, false, false, false, false, false];

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




