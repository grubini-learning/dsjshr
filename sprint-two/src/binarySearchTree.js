const BinarySearchTree = function(value) {

  const tree = {};
  tree.root = new BinaryNode(value);
  tree.quantity = 1;

  tree.insert = function(value) {
    const node = new BinaryNode(value);
    if (tree._isEmpty()) {
      tree.root = node;
    }
    let current = tree.root;

    while (current !== null) {
      if (node.value < current.value) {
        if (!current.hasLeft()) {
          current.leftChild = node;
          break;
        }
        current = current.left;
      } else {
        if (!current.hasRight()) {
          current.rightChild = node;
          break;
        }
        current = current.right;
      }
    }

    tree.quantity++;
  };
  tree.contains = function(value) {
    let current = tree.root;
    while (current !== null && value !== current.value) {
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return current !== null;
  };
  tree.depthFirstLog = function(func) {
    //nlr

    (function dfs(node, visitedNodes) {

      if (node !== null) {
        func(node.value);
      }

      if (visitedNodes >= tree.quantity) {
        return;
      }


      if (node.hasLeft()) {
        dfs(node.left, visitedNodes + 1);
      }
      if (node.hasRight()) {
        dfs(node.right, visitedNodes + 1);
      }
    })(tree.root, 0);

  };
  tree._isEmpty = function() { return tree.quantity === 0; };
  tree.breadthFirstLog = function() {
    // code here

    let current;
    const result = [];
    const queue = [];
    queue.push(tree.root);



    while (queue.length > 0) {
      current = queue.shift();
      if (current !== undefined) {
        result.push(current.value);
        if (current.hasLeft()) {
          queue.push(current.left);
        }
        if (current.hasRight()) {
          queue.push(current.right);
        }
      }
    }
    return result;
  };

  return tree;

};


/*
 * Complexity: What is the time complexity of the above functions?
 */