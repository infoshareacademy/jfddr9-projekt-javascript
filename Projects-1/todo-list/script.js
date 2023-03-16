let add = () => {
    let task = document.querySelector('.form-control');
    tBody.insertAdjacentHTML('beforeend', `<tr>${task.value}</tr>`);
    task.value = "";
}
let tBody = document.querySelector('#todos');
document.querySelector('.btn').addEventListener('click', add);