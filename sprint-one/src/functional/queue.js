var Queue = function(max = 10) {
  var someInstance = {};

  someInstance.queue = {};
  someInstance.currentQuantity = 0;
  someInstance.front = 0;
  someInstance.back = 0;
  someInstance.max = max;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.isEmpty = function() {
    return someInstance.currentQuantity === 0;
  };

  someInstance.enqueue = function(value) {

    if (someInstance.max > someInstance.currentQuantity) {

      if (someInstance.front === 0 && someInstance.back === 0) {
        someInstance.front++;
      }
      someInstance.back++;
      someInstance.queue[someInstance.back] = value;
      someInstance.currentQuantity++;
      console.log(someInstance.queue);
    }
    console.log('hey');
    return 'queue is full';
  };

  someInstance.dequeue = function() {

    if (!someInstance.isEmpty()) {
      var removedElement = someInstance.queue[someInstance.front];
      delete someInstance.queue[someInstance.front];
      someInstance.front++;
      someInstance.currentQuantity--;
      return removedElement;
    }
    return 'queue is empty';
  };

  someInstance.size = function() {
    return someInstance.currentQuantity;
  };

  someInstance.getFront = function() {

    if (!someInstance.isEmpty()) {
      return someInstance.queue[someInstance.front];
    }

    return 'queue is empty';
  };

  return someInstance;
};
