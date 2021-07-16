const submitBtn = document.getElementById('submit')
const input = document.getElementById('input')
const message = document.getElementById('message')

submitBtn.addEventListener('click', checkInput)

function checkInput() {
    message.innerText = ""
    // try { if(input.value < 5) {
    //     //We can throw strings, numbers, booleans or objects. 
    //     // If no error is thrown the catch statement is skipped.
    //     throw 'Input is too small!'
    // }
    // } catch(error) {
    //     message.innerText = error
    // }
    try { if(input.value < 5) {
        //Throwing a new Error requires a single argument of a message. 
        throw new Error('Input is too small')
        }   
    } catch(error) {
        message.innerText = error.message
    }
}