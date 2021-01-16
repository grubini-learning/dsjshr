class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor(maximumSize) {

    this.stack = {};
    this.currentQuantity = 0;
    this.maximumSize = maximumSize;
  }

  isEmpty() {
    return this.currentQuantity === 0;
  }

  peek() {
    return this.stack[this.currentQuantity];
  }

  size() {
    return this.currentQuantity;
  }

  push(element) {
    if (this.currentQuantity === this.maximumSize) {
      return 'stack is full';
    }
    this.currentQuantity++;
    this.stack[this.currentQuantity] = element;
  }

  pop() {
    if (!this.isEmpty()) {
      const removedEl = this.stack[this.currentQuantity];
      delete this.stack[this.currentQuantity];
      this.currentQuantity--;
      return removedEl;
    }
    return 'stack is empty';
  }

}