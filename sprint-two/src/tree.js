var Tree = function (value) {
  var newTree = {};
  //ROOT
  newTree.value = value;

  // your code here
  newTree.children = [];// fix m
  newTree.parent = null;

  //_.extend(newTree, treeMethods);

  newTree.addChild = function (childData) {
    node = Tree(childData);
    node.parent = newTree;
    newTree.children.push(node);
  };

  newTree.contains = function (target) {

    if (target === this.value) {
      return true;
    } else if (this.notParent()) {
      return false;
    }
    let isFound = false;

    const found = function (node) {
      for (let current = 0; current < node.children.length; current++) {
        const child = node.children[current];
        if (child.value === target) {
          isFound = true;
          break;
        }
        found(child);
      }

      return isFound ? true : false;
    };

    return found(this);
  };

  newTree.notParent = function () {
    return this.children.length === 0;
  };



  newTree.removeFromParent = function(childNode) {
    const parent = childNode.parent;
    const removingPosition = parent.children.indexOf(childNode);
    if (childNode.children.length > 0) {
      childNode.children.forEach(child => {
        child.parent = parent;
        parent.children.push(child);
      });
    }
    parent.children.splice(removingPosition, 1);
  };

  newTree.traversal = function(cb) {

    let current = newTree.value;
    let queue = [];

    const traverse = (node) => {
      if (node === null) {
        return queue;
      }
      queue.push(cb(node.value));
      if (node.children.length > 0) {
        node.children.forEach(child => {
          traverse(child);
        });
      }
    };

    traverse(newTree);
    return queue;
  };

  return newTree;
};


/*
 * Complexity: What is the time complexity of the above functions?
  contains: O (n)
  addChild: O (1)
 */
