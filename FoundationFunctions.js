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

