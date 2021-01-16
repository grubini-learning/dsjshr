var Stack = function(maximumSize) {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.



  var instance = Object.create(stackMethods);

  instance.stack = {};
  instance.currentQuantitiy = 0;
  instance.maximumSize = maximumSize;

  return instance;
};

var stackMethods = {
  isEmpty: function() {
    return this.currentQuantitiy === 0;
  },
  peek: function() {

    if (this.isEmpty()) {
      return 'stack is empty';
    }

    return this.stack[this.currentQuantitiy];
  },
  size: function() {
    return this.currentQuantitiy;
  },
  push: function(value) {

    if (this.currentQuantitiy === this.maximumSize) {
      return 'stack is full';
    }

    this.currentQuantitiy++;
    this.stack[this.currentQuantitiy] = value;
  },
  pop: function() {

    if (this.isEmpty()) {
      return 'stack is empty';
    }

    var removedEl = this.stack[this.currentQuantitiy];
    delete this.stack[this.currentQuantitiy];
    this.currentQuantitiy--;
    return removedEl;
  }
};


