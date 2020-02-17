class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(x) {
    this.items.push(x);
  }

  dequeue() {
    if(this.isEmpty()) {
      return "Empty";
    }
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length == 0;
  }
}

var queue = new Queue();

console.log('Is empty  ' + queue.isEmpty());

queue.enqueue(1);
console.log(queue);
queue.enqueue(2);
console.log(queue);
queue.enqueue(3);
console.log(queue);
queue.enqueue(4);
console.log(queue);

console.log('dequeue ' + queue.dequeue());
console.log(queue);
