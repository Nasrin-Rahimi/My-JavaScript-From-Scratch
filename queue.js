//https://www.geeksforgeeks.org/implementation-queue-javascript/

class Queue {
    constructor() {
       this.items = [];
    }

    //Adds an element to the end of the queue
    enqueue(element) {
        this.items.push(element);
    }

    //removes an element from the front of a queue 
    dequeue(){
       if (this.isEmpty()) {
           return 'Underflow';
       }
       return this.items.shift();
    }

    //get element from the front of the queue.
    getElement() {
        if (this.isEmpty()) {
            return 'Queue is empty';
        }
        return this.items[0];
    }

    //Helper methods

    isEmpty() {
        //return true is the queue is empty
        return this.items.length == 0;
    }

    printQueue() {
       let output = "";

       for(let i = 0;i < this.items.length; i++) {
           output += this.items[i] + " ";
       }

       return output;
    }

}

//use the queue class 

// let queue = new Queue();

// console.log("Is queue empty?", queue.isEmpty());

// // Adding elements to the queue
// // queue contains [10, 20, 30, 40, 50]
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.enqueue(40);
// queue.enqueue(50);
// queue.enqueue(60);

// console.log("The first element is: ", queue.getElement());

// console.log(queue.printQueue());

// console.log("Remove from the front of the queue", queue.dequeue());

// console.log(queue.printQueue());

// queue.enqueue(70);

// console.log("queue after adding 70 to it is: ", queue.printQueue());

//Create stack with two queues

let q1 = new Queue();
let q2 = new Queue();

// let top;

function push(element){
    q1.enqueue(element);
    // top = element;  
}

function pop() {
    let output;
    while(q1.items.length > 1) {
        q2.enqueue(q1.dequeue());
    }
    output = q1.dequeue();
    q1.items = q2.items.slice();
   
    //console.log(q1);
    return output;
}

push(10);
push(20);
push(30);
console.log("The stack has: ", q1.printQueue());

pop();

console.log("The stack after removing the top element has: ", q1.printQueue());



