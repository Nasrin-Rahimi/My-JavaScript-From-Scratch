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

