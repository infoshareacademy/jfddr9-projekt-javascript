let button = document.querySelector('button.btn')
button.addEventListener('click', addToList)

const todos = []

function addToList() {
	let input = document.querySelector('input.form-control')
	let task = input.value
	input.value = ''
	todos.push(task)
	let table = document.querySelector('#todos')
	let newTaskElement = document.createElement('tr')
	newTaskElement.innerText = task
	table.appendChild(newTaskElement)
}

// let add = () => {
// 	let task = document.querySelector('.form-control')
// 	tBody.insertAdjacentHTML('beforeend', `<tr>${task.value}</tr>`)
// 	task.value = ""
// }
// let tBody = document.querySelector('#todos')
// document.querySelector('.btn').addEventListener('click', add)
