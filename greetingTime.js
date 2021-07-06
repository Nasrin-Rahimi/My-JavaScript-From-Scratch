function greetingMessage(time) {
    let greetingText;
    if(time){
        if (time > 0 && time < 12) {
            greetingText = "Good Morning!"
        } else if(time < 17) {
            greetingText = "Good Afternoon!"
        } else if(time <= 24){
            greetingText = "Good night!"
        } else {
            greetingText = "Please enter a valid time!"
        }
    }
    else {
        greetingText = "Please enter a time!"
    }

    document.getElementById('greeting').innerText = greetingText;
}

function greetingTime() {
    let time = document.getElementById('time').value;
    greetingMessage(time)
}