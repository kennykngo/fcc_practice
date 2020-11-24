// creates a stack
var Stack = function () {
  this.count = 0;
  this.storage = {};

  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };

  this.pop = function () {
    if (this.count === 0) {
      // if returned from the function, rest of code won't run from this function
      return undefined;
    }

    this.count--;
    // aux variable to hold value as 'delete' keyword removes item from object
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  this.size = function () {
    return this.count;
  };

  // return the value at the end of the stack
  this.peek = function () {
    // after pushing this.count = 1, so in order to check for zeroeth item, this.count - 1
    return this.storage[this.count - 1];
  };

  console.log(this);
};

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.peek());
