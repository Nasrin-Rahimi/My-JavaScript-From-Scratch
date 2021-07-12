let counter = document.getElementById('counter')
const pause = document.getElementById('pause')
const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
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
    clearInterval(timer)
}

function decreaseCounter() {
    counter.innerHTML = parseInt(counter.innerHTML, 10) - 1;
}

function increaseCounter() {
    counter.innerHTML = parseInt(counter.innerHTML, 10) + 1;
}


