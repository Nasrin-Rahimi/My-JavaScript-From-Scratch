class MyCircularQueue {
     
    // Initialize Queue here. Set the size of the queue to be k. 
    constructor(k) {
        this.items = new Array(k);
        this.size = k;
        this.head = -1;
        this.tail = -1;
    }

    // Insert an element into the circular queue. Return true if the operation
    // is successful. 
    enQueue(element) {
        if (this.isFull()) {
            return false;
        }
        if(this.isEmpty()) {
            this.head = 0;
        }
        this.tail = (this.tail + 1) % this.size;
        this.items[this.tail] = element;
        return true;
    }

    //Delete an element from the circular queue. Return true 
    //if the operation is successful. 
    deQueue() {
        if(this.isEmpty()) {
            return false;
        }
        if(this.head == this.tail){
            this.head = -1;
            this.tail = -1;
            return true;
        }
        this.head = (this.head + 1) % this.size;
        return true;
    }

    //Get the front item from the queue.
    front() {
        if(this.isEmpty()) {
            return -1;
        }
        this.items[this.head];
    }

    //Get the last item from the queue. 
    rear() {
        if(this.isEmpty()) {
            return -1;
        }
        this.items[this.tail];
    }

    
}



// var MyCircularQueue = function(k) {
//     this.qSize = k;
//     this.front = 0;
//     this.rear = 0;
//     this.items = new Array(k);
// };

// /** 
//  * @param {number} value
//  * @return {boolean}
//  */
// MyCircularQueue.prototype.enQueue = function(value) {
//     if (this.isFull()){
//         return false;
//     }
//     this.items.push(value);
//     this.rear++;
//     return true;
// };

// /**
//  * @return {boolean}
//  */
// MyCircularQueue.prototype.deQueue = function() {
//     if(this.isEmpty()){
//         return false;
//     }
//     else{
//         this.items.shift();
//         this.front++;
//         return true;
//     }
// };

// /**
//  * @return {number}
//  */
// MyCircularQueue.prototype.Front = function() {
//     if (this.isEmpty()) {
//         return -1;
//     }
//     return this.items[this.front];
// };

// /**
//  * @return {number}
//  */
// MyCircularQueue.prototype.Rear = function() {
//     if(this.isEmpty()) {
//         return -1;
//     }
//     return this.items[this.rear];
// };

// /**
//  * @return {boolean}
//  */
// MyCircularQueue.prototype.isEmpty = function() {
//     return this.items.length == 0;
// };

// /**
//  * @return {boolean}
//  */
// MyCircularQueue.prototype.isFull = function() {
//     if(this.front == 0 && this.rear == this.items.length - 1) {
//         return true;
//     }
//     return false;
// };

// /** 
//  * Your MyCircularQueue object will be instantiated and called as such:
//  * var obj = new MyCircularQueue(k)
//  * var param_1 = obj.enQueue(value)
//  * var param_2 = obj.deQueue()
//  * var param_3 = obj.Front()
//  * var param_4 = obj.Rear()
//  * var param_5 = obj.isEmpty()
//  * var param_6 = obj.isFull()
//  */