var LinkedList = function () {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function (value) {

    // 1. Create new node
    // 2. Point Current tail to new node
    // 3. Point tail to new node
    // if list is empty, point head and tail to new node

    var node = new Node(value);
    if (!list.head) {
      list.head = node;
      list.tail = node;
    } else {
      list.tail.next = node;
      list.tail = node;
    }

  };

  list.removeHead = function () {

    // if head is null, return message
    // Store the head
    // Set current heads next to null
    // Point head to next node
    // return the previous head

    if (!list.head) {
      return 'list is empty';
    }

    var removedNode = list.head;
    list.head = removedNode.next;
    removedNode.next = null;
    return removedNode.value;
  };

  list.contains = function (target) {
    let current = list.head;
    while (current) {
      if (current.value === target) {
        return true;
      }
      current = current.next;
    }
    return false;
  };

  return list;
};

