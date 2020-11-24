// stack is FILO, queue is FIFO
function Queue() {
  collection = [];

  this.print = function () {
    console.log(collection);
  };

  this.enqueue = function (element) {
    collection.push(element);
  };
}
