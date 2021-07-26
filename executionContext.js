function A(){
    console.log('Start function A')

    function B() {
        console.log('Function B defined in Function A!')
    }

    B()
}

A()
console.log('Global Context')