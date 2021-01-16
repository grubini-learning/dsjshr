var Queue = function(max = 10) {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};

  instance.queue = {};
  instance.currentQuantity = 0;
  instance.front = 0;
  instance.back = 0;
  instance.max = max;

  _.extend(instance, queueMethods);

  return instance;
};

var queueMethods = {
  isEmpty: function() {
    return this.currentQuantity === 0;
  },

  size: function() {
    return this.currentQuantity;
  },

  enqueue: function(value) {

    if (this.max > this.currentQuantity) {

      if (this.front === 0 && this.back === 0) {
        this.front++;
      }

      this.back++;
      this.queue[this.back] = value;
      this.currentQuantity++;
    }

    return 'queue is full';
  },

  dequeue: function() {

    if (!this.isEmpty()) {
      var removedEl = this.queue[this.front];
      delete this.queue[this.front];
      this.front++;
      this.currentQuantity--;
      return removedEl;
    }

    return 'queue is empty';
  },

  getFront: function() {

    return !this.isEmpty() ? this.queue[this.front] : 'queue is empty';
  }
};


