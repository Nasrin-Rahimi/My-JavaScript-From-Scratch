const submitBtn = document.getElementById('submit')
const input = document.getElementById('input')
const message = document.getElementById('message')

submitBtn.addEventListener('click', checkInput)

function checkInput() {
    message.innerText = ""
    try { if(input.value < 5) {
        throw 'Input is too small!'
    }
    } catch(error) {
        message.innerText = error
    }
}