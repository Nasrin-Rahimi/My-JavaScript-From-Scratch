const sentence = document.getElementById('sentence')
const letter = document.getElementById('letter')
const message = document.getElementById('message')

function checkInclusion() {
//    sentence.value.includes(letter.value) ? message.innerHTML = 'true' : message.innerHTML = 'false'
    message.innerHTML = stringIncludes(sentence.value, letter.value)
}

function stringIncludes(sentence, letter){
    let matches; //1
    for (let i = 0; i < sentence.length; i++) { //2
        if(sentence[i] === letter) { // 3 (in the worth case sentence.length
            matches = true //4
        }
    }

    return !!matches //5
}

//if the letter doesn't exist in sentence, it takes n + 3 times for searching letter in sentence
//n is sentence.length. we call time copmlexity of stringIncludes function is n + 3