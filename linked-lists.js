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

  findIndex(value) {
    let current = this.head;
    let index = 0;
    while (current !== null) {
      if (current.data === value) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }

  toString() {
    let current = this.head;
    let result = "";
    while (current !== null) {
      result += `(${current.value}) ->`;
      current = current.next;
    }
    result += "null";
    return result;
  }

  removeAt(index) {
    if (index < 0 || index >= this.size()) {
      throw new RangeError("Index out of bounds");
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let previous = this.head;
    let count = 0;
    while (count < index - 1) {
      previous = previous.next;
      count++;
    }
    previous.next = previous.next.next;
  }
}
