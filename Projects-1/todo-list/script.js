let add = () => {
    let task = document.querySelector('.form-control').value;
    tBody.insertAdjacentHTML('beforeend', `<tr>${task}</tr>`);
}
let tBody = document.querySelector('#todos');
document.querySelector('.btn').addEventListener('click', add);