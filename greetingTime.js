function greetingMessage(time) {
    let greetingText;
    const hour = parseInt(time.split(':')[0]);
    if(hour){
        if (hour > 0 && hour < 12) {
            greetingText = "Good Morning!"
        } else if(hour < 17) {
            greetingText = "Good Afternoon!"
        } else if(hour <= 24){
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