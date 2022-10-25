//https://leetcode.com/problems/min-stack
// Time - O(1)
// Space - O(N)

let stack, minStack;
var MinStack = function () {
  stack = [];
  minStack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  stack.push(val);
  let currentMin = minStack.length ? minStack[minStack.length - 1] : val;
  if (currentMin > val) {
    currentMin = val;
  }
  minStack.push(currentMin);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (stack.length) {
    minStack.pop();
    stack.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  if (stack.length) {
    return stack[stack.length - 1];
  }

  return -1;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  if (minStack.length) {
    return minStack[minStack.length - 1];
  }

  return -1;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
