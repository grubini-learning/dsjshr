class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor(max) {

    this.queue = {};
    this.max = max;
    this.currentQuantity = 0;
    this.front = 0;
    this.back = 0;
  }

  size() {
    return this.currentQuantity;
  }

  isEmpty() {
    return this.currentQuantity === 0;
  }
  getFront() {
    if (this.isEmpty()) {
      return 'queue is empty';
    }
    return this.queue[this.front];
  }
  enqueue(element) {
    if (this.back === this.max) {
      return 'queue is full';
    }
    if (this.front === 0 && this.back === 0) {
      this.front++;
    }
    this.back++;
    this.queue[this.back] = element;
    this.currentQuantity++;

  }

  dequeue() {
    if (this.isEmpty()) {
      return 'queue is empty';
    }
    const removedElement = this.queue[this.front];
    delete this.queue[this.front];
    this.front++;
    this.currentQuantity--;
    return removedElement;
  }
}
