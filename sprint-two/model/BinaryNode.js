class BinaryNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  set data(value) { this.value = value; }
  set leftChild(node) { this.left = node; }
  set rightChild(node) { this.right = node; }

  get data() { return this.value; }

  hasBothChildren() { return this.left !== null && this.right !== null; }
  hasLeft() { return this.left !== null; }
  hasRight() { return this.right !== null; }
}