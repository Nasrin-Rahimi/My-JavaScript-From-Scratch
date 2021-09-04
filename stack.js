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