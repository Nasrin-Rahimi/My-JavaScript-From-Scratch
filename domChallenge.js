let counter = document.getElementById('counter')
const pause = document.getElementById('pause')
const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
let intervalVar;

document.addEventListener('DOMContentLoaded', startCounter)
pause.addEventListener('click', pauseCounter)
minus.addEventListener('click', decreaseCounter)

function startCounter(){
    let i = parseInt(counter.innerHTML, 10)
    intervalVar = setInterval(() => {
        i++;
        counter.innerHTML = i.toString();
    }, 1000);
}

function pauseCounter(){
    clearInterval(intervalVar)
}

function decreaseCounter() {
    counter.innerHTML = (parseInt(counter.innerHTML, 10) - 1).toString();
}


