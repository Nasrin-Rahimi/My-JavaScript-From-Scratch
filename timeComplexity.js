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

//if the letter doesn't exist in sentence, it takes n + 3 times for searching 
//letter in sentence
//n is sentence.length. we call time copmlexity of stringIncludes function is n + 3

function binarySearch(string, letter) {
    let startPoint = 0;
    let endPoint = string.length - 1;
    let guessPosition = parseInt((endPoint - startPoint)/2);
    console.log(`In ${string} startPoint is ${startPoint} endPoint is ${endPoint} and geussPosition is ${guessPosition}`)

    while(startPoint != endPoint) {
        if(string[guessPosition] < letter){
            startPoint = guessPosition
            guessPosition = startPoint + Math.round((endPoint - startPoint)/2)
            console.log(`startPoint is ${startPoint} endPoint is ${endPoint} and geussPosition is ${guessPosition}`)
        } else if(string[guessPosition] > letter){
            endPoint = guessPosition
            guessPosition = startPoint + parseInt((endPoint - startPoint)/2)
            console.log(`startPoint is ${startPoint} endPoint is ${endPoint} and geussPosition is ${guessPosition}`)
        }
        else {
            console.log('just right')
            return true
        }
    }

    if(string === letter){
        return true
    }
    else {
        console.log('Sorry')
        return false
    }
    
}
