var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {
  contains: function(item) {
    for (let current = 0; current < this._storage.length; current++) {
      const el = this._storage[current];
      if (JSON.stringify(el.data) === JSON.stringify(item)) {
        return true;
      }
    }
    return false;
  },
  remove: function(item) {
    let isFound = false;

    this._storage = this._storage.filter(element => {
      if (JSON.stringify(element.data) === JSON.stringify(item)) {
        isFound = true;
      } else {
        return element;
      }
    });

    return isFound;
  },
  add: function(item) {
    this._storage.push(SetNode(item, random()));
  }
};



var random = () => Math.floor(Math.random() * 1000000);
/*
 * Complexity: What is the time complexity of the above functions?
 */
