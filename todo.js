const createTaskForm = document.getElementById('create-task-form');
const newTaskDescription = document.getElementById('new-task-description');
let message = document.getElementById('message');
const tasks = document.getElementById('tasks')

createTaskForm.addEventListener('submit', function(e){
    e.preventDefault()
    message.textContent = ""
   
    if (newTaskDescription.value) {
        addNewTask()
    }
    else {
        message.textContent = "Please enter your task description!"
    }
})

function addNewTask() {
    let task = document.createElement('li')
    task.textContent = newTaskDescription.value
    tasks.appendChild(task)
}
