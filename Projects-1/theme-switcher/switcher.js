const changeThemeDark = () => {
    body.classList.add('body_dark');

    for (let btn of allBtn)
    {
        btn.classList.add('btn_dark');
    }
}

const changeThemeLight = () => {
    body.classList.remove('body_dark');

    for (let btn of allBtn)
    {
        btn.classList.remove('btn_dark');
    }

}
 
let allBtn = document.querySelectorAll('.btn');
let body = document.querySelector('body');

document.querySelector('.btnDark').addEventListener('click', changeThemeDark);
document.querySelector('.btnLight').addEventListener('click', changeThemeLight);