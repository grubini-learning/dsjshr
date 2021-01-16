var Stack = function(maximumSize) {
  var instance = {};

  instance.currentQuantity = 0;
  instance.maximumSize = maximumSize;
  instance.stack = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  instance.peek = function() {

    if (instance.isEmpty()) {
      return 'stack is empty';
    }
    return instance.stack[instance.currentQuantity];
  };

  instance.isEmpty = function() {
    return instance.currentQuantity === 0;
  };

  instance.push = function(value) {

    if (instance.currentQuantity === instance.maximumSize) {
      return 'stack is full';
    }

    instance.currentQuantity++;
    instance.stack[instance.currentQuantity] = value;
  };

  instance.pop = function() {

    if (instance.isEmpty()) {
      return 'stack is empty';
    }

    var removedEl = instance.stack[instance.currentQuantity];
    delete instance.stack[instance.currentQuantity];
    instance.currentQuantity--;
    return removedEl;

  };

  instance.size = function() {
    return instance.currentQuantity;
  };

  return instance;
};
