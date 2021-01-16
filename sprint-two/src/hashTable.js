var HashTable = function() {
  this._limit = 8;
  this.MAX_THRESHHOLD = 0.75;
  this.MIN_THRESHHOLD = 0.25;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  debugger;
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (!this._storage[index]) {
    this._storage[index] = [{ [k]: v }];

    if (this.isDoubleSizeNeeded()) {
      this.resize(2);
    }

  } else {
    const collisionBrothers = this._storage[index];
    const obj = collisionBrothers.find((item => item[k] !== undefined));
    if (!obj) {
      this._storage[index].push({ [k]: v });
    } else {
      obj[k] = v;
    }
  }
};

HashTable.prototype.resize = function(factor) {
  // Change limit
  this._limit *= factor;
  // Copy storage
  const copy = new Array(this._limit);
  // Call limitedArray pass limit
  let current = 0;
  while (current < this._storage.length) {
    copy[current] = this._storage[current];
    current++;
  }
  this._storage = copy;
  // set storage to new storage array
  // Store copies into new storage
};
HashTable.prototype.isDoubleSizeNeeded = function() {
  return (this._storage.length / this._limit) > this.MAX_THRESHHOLD;
};
HashTable.prototype.isShrinkNeeded = function() {
  return (this._storage.length / this._limit) < this.MIN_THRESHHOLD;
};
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  debugger;
  if (this._storage[index]) {
    const collisionBrothers = this._storage[index];
    const obj = collisionBrothers.find((item => item[k] !== undefined));
    if (!obj) {
      return undefined;
    }
    return Object.values(obj)[0];
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[index]) {
    const collisionBrothers = this._storage[index];
    for (let current = 0; current < collisionBrothers.length; current++) {
      if (collisionBrothers[current][k] !== undefined) {
        collisionBrothers[current][k] = undefined;
        if (this.isShrinkNeeded()) {
          this.resize(0.5);
        }
        break;
      }
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


var hstable = new HashTable(5);
hstable.retrieve(5);