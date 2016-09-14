function LinkedList() {
  this.head = null;

  values = Array.prototype.slice.call(arguments);
  if (!values) {
    return;
  }
  var node;
  values.forEach(function(value) {
    if (!node) {
      node = new Node(value);
      this.head = node;
    }
    else {
      node.next = new Node(value);
      node = node.next;
    }
  }.bind(this));
}

LinkedList.prototype.preprend = function(value) {
  var node = new Node(value, this.head);
  this.head = node;
};

LinkedList.prototype.print = function() {
  if (this.head) this.head.print();
};

LinkedList.prototype.toArray = function() {
  return this.head ? this.head.toArray() : [];
};

LinkedList.prototype.reverse = function() {
  if (this.head) this.reverseHelper(this.head);
  return this;
};

LinkedList.prototype.reverseHelper = function(node) {
  if (node.next) {
    nextNode = this.reverseHelper(node.next);
    nextNode.next = node;
    node.next = null;
  }
  else {
    this.head = node;
  }
  return node;
};

LinkedList.prototype.iterativeReverse = function() {
  var node = this.head;
  var prior = null;
  var next;
  while(node) {
    next = node.next;
    node.next = prior;
    prior = node;
    node = next;
  }
  this.head = prior;
};


Node = function Node(value, next) {
  this.value = value;
  this.next = next;
};

Node.prototype.print = function() {
  console.log(this.value);
  if (this.next) {
    this.next.print();
  }
};

Node.prototype.toArray = function (){
  var arr = [];
  var node = this;
  while(node) {
    arr.push(node.value);
    node = node.next;
  }
  return arr;
};

module.exports = LinkedList;

