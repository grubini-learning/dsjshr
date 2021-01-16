var Queue = function(max = 10) {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.queue = {};
  this.currentQuantity = 0;
  this.front = 0;
  this.back = 0;
  this.max = max;
};

Queue.prototype.isEmpty = function() {
  return this.currentQuantity === 0;
};

Queue.prototype.size = function() {
  return this.currentQuantity;
};

Queue.prototype.enqueue = function(value) {

  if (this.max > this.currentQuantity) {

    if (this.front === 0 && this.back === 0) {
      this.front++;
    }

    this.back++;
    this.queue[this.back] = value;
    this.currentQuantity++;
  }

  return 'queue is full';
};

Queue.prototype.dequeue = function() {

  if (!this.isEmpty()) {
    var removedEl = this.queue[this.front];
    delete this.queue[this.front];
    this.currentQuantity--;
    this.front++;
    return removedEl;
  }
  return 'queue is empty';
};

Queue.prototype.getFront = function() {
  return !this.isEmpty() ? this.queue[this.front] : 'queue is empty';
};
