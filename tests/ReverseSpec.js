var LinkedList = require ("../lib/list_node");
var assert = require('chai').assert;

describe('Test Lists Operations', function() {
  describe("Recursively", function(){
    it('Can reverse a list recursively', function() {
      var list = new LinkedList(1, 2, 3, 4);
      var expected = list.toArray().reverse();
      var list = list.reverse();
      assert.deepEqual(expected, list.toArray());
    });

    it('Can an empty list ', function() {
      var list = new LinkedList();
      var values = list.reverse().toArray();
      assert.lengthOf(values, 0);
    });
  });

  describe("Iteratively", function(){
    it('Can reverse a list recursively', function() {
      var list = new LinkedList(1, 2, 3, 4);
      var expected = list.toArray().reverse();
      list.iterativeReverse();
      assert.deepEqual(expected, list.toArray());
    });

    it('Can an empty list ', function() {
      var list = new LinkedList();
      list.iterativeReverse(null);
      assert.lengthOf(list.toArray(), 0);
    });
  });

});
