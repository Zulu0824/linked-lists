class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  size() {
    let count = 0;
    let current = this.head;
    while (current != null) {
      count++;
      current = current.next;
    }
    return count;
  }

  getHead() {
    if (!this.head) {
      return;
    } else {
      return this.head.value;
    }
  }

  getTail() {
    if (!this.head) {
      return;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      return current.value;
    }
  }

  at(index) {
    let count = 0;
    let current = this.head;
    while (index !== count) {
      current = current.next;
      count++;
    }
    return current.value;
  }

  pop() {
    let current = this.head;
    if (!this.head) {
      return;
    }
    const value = this.head.value;
    this.head = this.head.next;
    return value;
  }

  contains(value) {
    let current = this.head;
    while (current !== null) {
      if (current.data === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
}
