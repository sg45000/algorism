class Queue {
    values = [];
    head = 0;
    tail = 0;
    max = 10;

    isFull() {
        return this.head === (this.tail+1) % this.max;
    }

    isEmpty() {
        return this.head === this.tail;
    }

    enqueue(v) {
        if(this.isFull()) {
            throw new Error('over!');
        }
        this.values[this.tail] = v;
        if(this.tail + 1 === this.max) {
            this.tail = 0;
        } else {
            this.tail += 1;
        }
    }

    dequeue() {
        if(this.isEmpty()) {
            throw new Error('empty!');
        }
        const v = this.values[this.head];
        if(this.head + 1 === this.max) {
            this.head = 0;
        } else {
            this.head += 1;
        }
        return v;
    }
}

const queue = new Queue();

queue.enqueue(1);
console.log(queue.dequeue());
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
console.log(queue.dequeue());

queue.enqueue(8);
queue.enqueue(9);
console.log(queue.dequeue());
console.log(queue.dequeue());

queue.enqueue(10);


console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
