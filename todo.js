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
    let deleteBtn = document.createElement('bottun')
    deleteBtn.textContent = "   X"
    deleteBtn.style.color = "red"
    task.appendChild(deleteBtn)
    tasks.appendChild(task)
    deleteTask(deleteBtn, task)
   
}

function deleteTask(deleteBtn, task) {
    deleteBtn.addEventListener('click', function(e){
        tasks.removeChild(task)
    })
}
