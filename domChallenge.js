let counter = document.getElementById('counter')
const pause = document.getElementById('pause')
const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const heart = document.getElementById('heart')
const message = document.getElementById('message')
let timer;

document.addEventListener('DOMContentLoaded', startCounter)
pause.addEventListener('click', pauseCounter)
minus.addEventListener('click', decreaseCounter)
plus.addEventListener('click', increaseCounter)

function startCounter(){
    timer = setInterval(() => {
        counter.innerHTML = parseInt(counter.innerHTML, 10) + 1;
    }, 1000);
}

function pauseCounter(){
    if(pause.innerText == "pause"){
        disableButtons(true)
        pause.innerText = "Resume"
        clearInterval(timer)
    } else {
        disableButtons(false)
        pause.innerText = "pause"
        startCounter()
    }
}

function disableButtons(disable) {
    minus.disabled = disable
    plus.disabled = disable
    heart.disabled = disable
}

function decreaseCounter() {
    counter.innerHTML = parseInt(counter.innerHTML, 10) - 1;
}

function increaseCounter() {
    counter.innerHTML = parseInt(counter.innerHTML, 10) + 1;
}
