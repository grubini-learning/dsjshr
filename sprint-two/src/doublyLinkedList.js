class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.quantity = 0;
  }

  get front() { return this.head; }
  get back() { return this.tail; }
  get qty() { return this.quantity; }

  set front(head) { this.head = head; }
  set back(tail) { this.tail = tail; }

  _init(value) {
    const node = new DoublyNode(value);
    this.head = node;
    this.tail = node;
  }
  _reset() {
    this.tail = null;
    this.head = null;
  }
  _isEmpty() { return this.quantity === 0; }

  addFromFront(value) {
    if (!this._isEmpty()) {
      const node = new DoublyNode(value);
      node.nxt = this.front;
      this.front.prev = node;
      this.front = node;
    } else {
      this._init(value);
    }
    this.quantity++;
  }
  addAfter(value, newValue) {
    const node = this.search(value);
    if (node) {
      if (this.quantity === 1 || this.back === node) {
        this.addFromBack(newValue);
      } else {
        const newNode = new DoublyNode(newValue);
        newNode.prev = node;
        newNode.nxt = node.nxt;
        node.nxt.prev = newNode;
        node.nxt = newNode;
      }
      this.quantity++;
    }
  }
  addFromBack(value) {
    if (!this._isEmpty()) {
      const node = new DoublyNode(value);
      node.prev = this.back;
      this.back.nxt = node;
      this.back = node;
    } else {
      this._init(value);
    }
    this.quantity++;
  }

  removeFront() {
    if (!this._isEmpty()) {
      const removedNode = this.front;
      if (this.quantity === 1) {
        this._reset();
      } else {
        this.front = this.front.nxt;
        this.front.prev = null;
      }
      this.quantity--;
      return removedNode;
    }
  }
  remove(value) {
    if (this.quantity <= 1) {
      return 'not enough items';
    }

    const node = this.search(value);
    if (node) {
      node.prev.nxt = node.nxt;
      node.nxt.prev = node.prev;
      node.prev = null;
      node.nxt = null;
      this.quantity--;
    }
    return node;
  }
  removeBack() {
    if (!this._isEmpty()) {
      const removedNode = this.back;
      if (this.quantity === 1) {
        this._reset();
      } else {
        this.back = this.back.prev;
        this.back.nxt = null;
      }
      this.quantity--;
      return removedNode;
    }
  }

  search(value) {
    let current = this.front;
    while (current && current.val !== value) {
      current = current.nxt;
    }

    return current;
  }

  printList() {
    if (this._isEmpty()) {
      return 'this is empty';
    }
    let str = '';
    let current = this.front;
    while (current) {
      str += `${current.val} <-- `;
      current = current.nxt;
    }
    return str;
  }
}