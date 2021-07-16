const submitBtn = document.getElementById('submit')
const input = document.getElementById('input')
const message = document.getElementById('message')

submitBtn.addEventListener('click', checkInput)

function checkInput() {
    if(input.value < 5) {
        message.innerText = "Input is too small!"
    }
}