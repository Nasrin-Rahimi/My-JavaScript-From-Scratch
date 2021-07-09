const dodger = document.getElementById('dodger')

function moveLeft() {
    let leftDodger = dodger.style.left.replace('px','')
    let left = parseInt(leftDodger, 10)
    if(left > 0) {
        dodger.style.left = `${left - 1}px`
    }
}

function moveRigth() {
    let leftDodger = dodger.style.left.replace('px','')
    let left = parseInt(leftDodger, 10)
    if(left < 360) {
        dodger.style.left = `${left + 1}px`
    }
}

document.addEventListener('keydown', function(e) {
    e.key === "ArrowLeft" ? moveLeft() : moveRigth()
})
