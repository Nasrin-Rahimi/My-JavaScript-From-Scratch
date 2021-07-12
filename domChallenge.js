let counter = document.getElementById('counter')
const pause = document.getElementById('pause')
const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const heart = document.getElementById('heart')
let timer;
const likes = document.getElementById('likes')

document.addEventListener('DOMContentLoaded', startCounter)
pause.addEventListener('click', pauseCounter)
minus.addEventListener('click', decreaseCounter)
plus.addEventListener('click', increaseCounter)
heart.addEventListener('click', addLike)

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

function addLike() {
    if(!checkLike()){
        const li = document.createElement('li')
        li.innerText = counter.innerText +  ' has been liked ' + ' 1' + ' times'
        likes.appendChild(li)
        console.log(li.id)
    }
    
}

function checkLike() {
    let likeExist = false
    let lis = document.getElementsByTagName('li')
    if(lis) {
        for(let i = 0; i < lis.length; i++) {
            const liText = lis[i].innerText.split(' ')
            if (liText[0] == counter.innerText) {
                lis[i].innerText = liText[0] + ' has been liked ' + (parseInt(liText[4]) + 1) .toString() + ' times'
                likeExist = true
            }
        }
    }
    return likeExist;
}
