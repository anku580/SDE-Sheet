/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * @param {number[]} prices
 * @return {number}
 * Time - O(n)
 * Space - O(1)
 */
var maxProfit = function (prices) {
  let runningMax = 0,
    maxSum = -Infinity;

  for (let i = 1; i < prices.length; i++) {
    const profit = prices[i] - prices[i - 1];
    runningMax += profit;
    maxSum = Math.max(maxSum, runningMax);
    if (runningMax < 0) runningMax = 0;
  }

  return maxSum <= 0 ? 0 : maxSum;
};
