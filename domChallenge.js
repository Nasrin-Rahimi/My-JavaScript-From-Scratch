let counter = document.getElementById('counter')
const pause = document.getElementById('pause')
const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
let intervalVar;

document.addEventListener('DOMContentLoaded', startCounter)
pause.addEventListener('click', pauseCounter)

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


