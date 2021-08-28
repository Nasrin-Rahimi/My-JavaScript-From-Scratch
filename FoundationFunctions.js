function sortThreeNumber(a, b, c){
    let array = []
    let tmp = Math.min(a, b)
    b = Math.max(a, b)
    a = tmp
    array.push(a)
    tmp = Math.min (b, c)
    c = Math.max(b, c)
    b = tmp
    array.push(b)
    tmp = Math.min(a, c)
    c = Math.max(a, c)
    a = tmp
    array.push(c)
    return array
}

//Given three ints, a b c, one of them is small, one is medium and one is large. 
//Return true if the three values are evenly spaced, so the difference between 
//small and medium is the same as the difference between medium and large.
function evenlySpaced(a, b, c){
    let array = []
    let tmp = Math.min(a, b)
    b = Math.max(a, b)
    a = tmp
    array.push(a)
    tmp = Math.min (b, c)
    c = Math.max(b, c)
    b = tmp
    array.push(b)
    tmp = Math.min(a, c)
    c = Math.max(a, c)
    a = tmp
    return (a - b) == (b - c)
}

//We want to make a row of bricks that is goal inches long. We have a number of 
//small bricks (1 inch each) and big bricks (5 inches each). Return True if it 
//is possible to make the goal by choosing from the given bricks. 

function makeBricks(small, big, goal){
    return ((goal % 5 <= small) && ((goal - (big * 5)) <= small))
}

function makeBricks2(s, b, g){
    if((g < 5) && (s >= g)){
        return true
    } else if((g == 5) && (b >= 1)){
        return true
    } else if((g > 5) && b*5 <= g && s == g - 5*g ){
        return true
    } else if(g > 5 && s >= g - 5*b){
    return true
    }
    else{
        return false

    }

}

//Given 2 int values greater than 0, return whichever value is nearest to 21 without
// going over. Return 0 if they both go over.

//blackjack(19, 21) → 21
//blackjack(21, 19) → 21
//blackjack(19, 22) → 19

function blackJack(a, b) {
    if (a > 21 && b > 21) {
        return 0
    } else if(a > 21){
        return b
    } else if (b > 21) {
        return a
    } else if ((21 - a) < (21 - b)) {
        return a
    } else {
        return b
    }
}

//Given an array of ints, return True if the sequence of numbers 1, 2, 3 appears 
//in the array somewhere.

//array123([1, 1, 2, 3, 1]) → True
//array123([1, 1, 2, 4, 1]) → False
//array123([1, 1, 2, 1, 2, 3]) → True

function array123(nums) {
    let result = false
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1 && nums[i+1] == 2 && nums[i+2] == 3){
            result = true
            break;
        }
    }

    return result;
}

//How to convert a number into array in JavaScript

var num = 25431

// Here we typecasting the num
// Splitting the num, so that
// we got an array of strings
// Then use map function to
// convert the array of strings
// into array of numbers
var myArr = String(num).split('').map((num) => {
    return Number(num)
})

//console.log(myArr)

var subtractProductAndSum = function(n) {
    
    const nArray = String(n).split('').map((n) => {
        return Number(n)
    })
    let product = 1;
    let sum = 0;
   
    for (let i = 0; i < nArray.length; i++) {
        product  *= nArray[i]
        sum += nArray[i]
    }
    console.log(product)
    console.log(sum)
    return product - sum
    
};

//Have the function firstReverse(str) take the str parameter being passed and return
// the string in reversed order. For example: if the input string is "Hello World 
//and Coders" then your program should return the string sredoC dna dlroW olleH.

function firstReverse(str) {
  let strReverseArr = []
  for (let i = str.length - 1; i >= 0; i--) {
    strReverseArr.push(str[i])
  }

  return strReverseArr.join(''); 
}





