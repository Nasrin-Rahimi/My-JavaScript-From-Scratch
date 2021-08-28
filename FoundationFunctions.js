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



