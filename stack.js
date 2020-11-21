// creates a stack
var Stack = function () {
  this.count = 0;
  this.storage = {};

  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };

  console.log(this);
};

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
