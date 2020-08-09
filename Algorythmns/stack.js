class Stack {
  constructor() {
    this.count = 0;
    this.storage = [];
  }

  push(item) {
    this.storage[this.count] = item;
    this.count++;
  }

  pop() {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  peek() {
    if (this.count === 0) {
      return "stack is empty";
    }
    return this.storage[this.count - 1];
  }

  size() {
    return this.count;
  }

  getBuffer() {
    return this.storage;
  }
}
