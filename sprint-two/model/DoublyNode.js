class DoublyNode {
  constructor(value) {
    this._value = value;
    this._next = null;
    this._previous = null;
  }

  get val() { return this._value; }
  get prev() { return this._previous; }
  get nxt() { return this._next; }

  set val(value) { this._value = value; }
  set prev(node) { this._previous = node; }
  set nxt(node) { this._next = node; }
}