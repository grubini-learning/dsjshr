class AVLTree {
  constructor(root) {
    this.root = new BinaryNode(root);
    this.quantity = 1;
  }

  insert(value) {
    const node = new BinaryNode(value);
    if (this._isEmpty()) {
      this.root = node;
    }
    let current = this.root;

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

    this.quantity++;
  }

  // balanceTree(node) {
  //   if (this.quantity > 2) {
  //     const stack = [this.root];
  //     let current = stack.pop();
  //     let balanceFactor;

  //     while (current) {
  //       stack.push(current);
  //     }
  //   }
  // }

  determineBalanceFactor(node) {
    const leftSide = (node.hasLeft()) ? this.calculateNodeHeight(node.left) + 1 : 0;
    const rightSide = (node.hasRight()) ? this.calculateNodeHeight(node.right) + 1 : 0;
    return leftSide - rightSide;
  }
  calculateNodeHeight(node) {
    const queue = [];
    const wildCard = new BinaryNode(-1);
    let height = 0;
    let current;

    queue.push(node);
    queue.push(wildCard);
    while (queue.length > 0) {
      current = queue.shift();
      if (current.value === wildCard.value) {
        if (queue.length === 0) {
          break;
        }
        height++;
        queue.push(wildCard);
      }
      if (current.hasLeft()) {
        queue.push(current.left);
      }
      if (current.hasRight()) {
        queue.push(current.right);
      }
    }
    return height;
  }

  search(target) {
    if (this._isEmpty()) {
      return 'tree is empty';
    }
    let current = this.root;
    while (current !== null && current.value !== target) {
      if (target > current.value) {
        current = current.right;
      } else {
        current = current.left;
      }
    }
    return current;
  }

  _isEmpty() { return this.quantity === 0; }
  breadthFirstLog() {
    let current;
    const result = [];
    const queue = [];
    queue.push(this.root);

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
  }
}