const sentence = document.getElementById('sentence')
const letter = document.getElementById('letter')
const message = document.getElementById('message')

function checkInclusion() {
   sentence.value.includes(letter.value) ? message.innerHTML = 'true' : message.innerHTML = 'false'
}