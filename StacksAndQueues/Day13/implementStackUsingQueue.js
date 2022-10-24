//https://leetcode.com/problems/implement-stack-using-queues/
//Time - O(1)
//Space - O(n)

let queue;
var MyStack = function () {
  queue = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  let size = queue.length;
  queue.push(x);

  for (let i = 0; i < size; i++) {
    queue.push(queue.shift());
  }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  return queue.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  return queue[0];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return queue.length == 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
