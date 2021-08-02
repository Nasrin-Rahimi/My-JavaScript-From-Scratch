function sayDownFrom(n) {
    console.log(n);

    if (n > 1) {
        sayDownFrom(n - 1)
    } else {
        return true
    }
}

sayDownFrom(5)