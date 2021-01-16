var Stack = function(maximumSize) {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.stack = {};
  this.currentQuantity = 0;
  this.maximumSize = maximumSize;

};

Stack.prototype.isEmpty = function() {
  return this.currentQuantity === 0;
};

Stack.prototype.peek = function() {

  if (this.isEmpty()) {
    return 'stack is empty';
  }

  return this.stack[this.currentQuantity];
};

Stack.prototype.size = function() {
  return this.currentQuantity;
};

Stack.prototype.push = function(value) {

  if (this.currentQuantity === this.maximumSize) {
    return 'stack is full';
  }

  this.currentQuantity++;
  this.stack[this.currentQuantity] = value;

};

Stack.prototype.pop = function() {

  if (this.isEmpty()) {
    return 'stack is empty';
  }

  var removedEl = this.stack[this.currentQuantity];
  delete this.stack[this.currentQuantity];
  this.currentQuantity--;
  return removedEl;

};