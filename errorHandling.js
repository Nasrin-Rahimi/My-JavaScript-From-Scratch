// const submitBtn = document.getElementById('submit')
// const input = document.getElementById('input')
// const message = document.getElementById('message')

// submitBtn.addEventListener('click', checkInput)

// function checkInput() {
//     message.innerText = ""
    // try { if(input.value < 5) {
    //     //We can throw strings, numbers, booleans or objects. 
    //     // If no error is thrown the catch statement is skipped.
    //     throw 'Input is too small!'
    // }
    // } catch(error) {
    //     message.innerText = error
    // }
    // try { if(input.value < 5) {
    //     //Throwing a new Error requires a single argument of a message. 
    //     throw new Error('Input is too small')
    //     }   
    // } catch(error) {
    //     message.innerText = error.message
    // }

    class ageError {
        constructor(age, message){
            this.age = age
            this.message = message
        }
    }

    const submitBtn = document.getElementById('submit')
    const input = document.getElementById('input')
    const message = document.getElementById('message')

    function checkAge(age) {
        if(isNaN(age)) {
            throw new ageError(age, 'is not a number!')
        } 
    }

    submitBtn.addEventListener('click', () => {
        message.innerText = ''
        
        try {
            checkAge(input.value)
        } catch(error) {
            console.log(error)
            message.innerText = `${error.age}  ${error.message}`
        }
    })




    // let age = document.getElementById('age').value
    // try {
    //     if(isNaN(age)) {
    //         throw 'Age must be a number!'
    //     }
    // } catch(error) {
    //     message.innerText = error
    // } 
