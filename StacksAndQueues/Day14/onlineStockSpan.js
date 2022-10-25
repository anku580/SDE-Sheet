//https://leetcode.com/problems/online-stock-span/
//Time - O(n)
//Space - O(n)

let stack;
var StockSpanner = function () {
  stack = [];
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  if (stack.length == 0) {
    stack.push([price, 1]);
    return 1;
  } else {
    let value = 1;
    while (stack.length && stack[stack.length - 1][0] <= price) {
      value += stack[stack.length - 1][1];
      stack.pop();
    }

    stack.push([price, value]);
    return value;
  }
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
