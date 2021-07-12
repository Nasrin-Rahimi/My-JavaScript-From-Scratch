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

//add :
// A priority value selected from a dropdown that is used to determine the color of the text in the list (e.g. red for high priority, yellow for medium, green for low)
// As a challenge, implement a sorting functionality that displays the tasks ascending or descending order based on priority
// An additional input field (e.g. user, duration, date due)
// Ability to edit tasks
