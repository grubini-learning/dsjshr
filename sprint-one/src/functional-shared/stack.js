var Stack = function(maximumSize) {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var instance = {};

  instance.stack = {};
  instance.currentQuantity = 0;
  instance.maximumSize = maximumSize;

  _.extend(instance, stackMethods);

  return instance;
};

var stackMethods = {
  isEmpty: function() {
    return this.currentQuantity === 0;
  },
  peek: function() {

    if (this.isEmpty()) {
      return 'stack is empty';
    }
    return this.stack[this.currentQuantity];
  },
  size: function() {
    return this.currentQuantity;
  },
  push: function(value) {

    if (this.currentQuantity === this.maximumSize) {
      return 'stack is full';
    }

    this.currentQuantity++;
    this.stack[this.currentQuantity] = value;
  },
  pop: function() {

    if (this.isEmpty()) {
      return 'stack is empty';
    }

    var removedEl = this.stack[this.currentQuantity];
    delete this.stack[this.currentQuantity];
    this.currentQuantity--;
    return removedEl;

  }
};


