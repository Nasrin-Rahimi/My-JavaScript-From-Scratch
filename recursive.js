function sayDownFrom(n) {
    console.log(n);

    if (n > 1) {
        sayDownFrom(n - 1)
    } else {
        return true
    }
}

function sumOfTo(n) {
    if (n > 1){
        return sumOfTo(n - 1) + n
    } else {
        return 1
    }
}

sayDownFrom(5)

let sum = sumOfTo(5)
console.log(`Sum of 1 to 5 is: ${sum}`)