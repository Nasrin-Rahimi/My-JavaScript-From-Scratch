class Stack{
    constructor() {
        this.items = [];
    }

    //adds an element at the top of the stack.
    push (element) {
        this.items.push(element);
    }

    pop () {
        if(this.isEmpty()) {
            return 'Underflow';
        }
        return this.items.pop();
    }

    // return the top most element from the stack
    getElement() {
        return this.items[this.items.length - 1];
    }

    //Helper Methods

    isEmpty() {
        return this.items.length == 0;
    }

    printStack() {
        let output = "";

        for(let i = 0; i < this.items.length; i++) {
            output += this.items[i] + " ";
        }

        return output;
    }
}

//use Stack
let stack = new Stack();

console.log("Is stack empty", stack.isEmpty()); 

// Adding element to the stack
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.printStack());

console.log("The top element is: ", stack.getElement());

stack.pop();

console.log("Stack after remove the last element is: ", stack.printStack());