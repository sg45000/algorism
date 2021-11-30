class Stack {
    values = [];
    head = 0;
    max = 10;
    isFull() {
        return this.head === this.max
    }

    isEmpty() {
        return this.head === 0;
    }

    push(v) {
        if(this.isFull()) {
            throw new Error("over!")
        }
        this.values[this.head] = v;
        this.head += 1
    }

    pop() {
        if(this.isEmpty()) {
            throw new Error("empty!")
        }
        this.head -= 1;
        return this.values[this.head];
    }

}

const stack = new Stack()

stack.push(1);
console.log(stack.pop())
stack.push(2);

// console.log(stack.pop())
stack.push(3);

stack.push(4);
stack.push(5);
stack.push(6);
stack.push(7);
stack.push(8);
stack.push(9);
stack.push(10);
stack.push(11);
stack.push(12);
console.log(stack.pop())

console.log(stack.pop())
console.log(stack.pop())
