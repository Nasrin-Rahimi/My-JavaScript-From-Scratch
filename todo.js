const createTaskForm = document.getElementById('create-task-form');
const newTaskDescription = document.getElementById('new-task-description');
let message = document.getElementById('message');

createTaskForm.addEventListener('submit', function(e){
    e.preventDefault()
   
    if (newTaskDescription.textContent) {
        addNewTask()
    }
    else {
        message.textContent = "Please enter your task description!"
    }
})

function addNewTask() {
    
}







// let form = document.getElementById('create-task-form');
// form.addEventListener('submit', function (e) {
//   e.preventDefault();
//   let ul = document.getElementById('tasks');
//   let li = document.createElement('li');
//   let newTask = document.getElementById('new-task-description');
//   li.innerText = newTask.value;
//   ul.appendChild(li);
// })