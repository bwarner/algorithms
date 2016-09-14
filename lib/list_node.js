
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

Node.reverse = function() {
  if (node.next) {
    nextNode = reverse(list.next);
    nextNode.next = list;
  }
  return list;
};

module.exports = Node;

