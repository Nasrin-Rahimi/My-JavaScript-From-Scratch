const createTaskForm = document.getElementById('create-task-form');
const newTaskDescription = document.getElementById('new-task-description');
let message = document.getElementById('message');
const tasks = document.getElementById('tasks')

createTaskForm.addEventListener('submit', function(e){
    e.preventDefault()
    clearMessage()
   
    if (newTaskDescription.value) {
        if(!checkDuplication()){
            addNewTask()
        } else {
            message.textContent = "Task is exist!"
        }
    }
    else {
        message.textContent = "Please enter your task description!"
    }
})

function checkDuplication(){
    const existingTasks = document.getElementsByTagName('li')
    for(let i = 0; i < existingTasks.length; i++){
        if(existingTasks[i].textContent.split(' ')[0] == newTaskDescription.value) {
            return true
        }
    }
    return false
}

function addNewTask() {
    let task = document.createElement('li')
    task.textContent = newTaskDescription.value
    let deleteBtn = document.createElement('bottun')
    deleteBtn.textContent = " X"
    deleteBtn.style.color = "red"
    task.appendChild(deleteBtn)
    tasks.appendChild(task)
    deleteTask(deleteBtn, task)
   
}

function deleteTask(deleteBtn, task) {
    deleteBtn.addEventListener('click', function(e){
        clearMessage()
        tasks.removeChild(task)
    })
}

function clearMessage(){
    message.textContent = ""
}
