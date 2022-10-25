/**
 * https://leetcode.com/problems/largest-rectangle-in-histogram/
 * @param {number[]} heights
 * @return {number}
 * Time - O(n)
 * Space - O(n)
 */
var largestRectangleArea = function (heights) {
  const n = heights.length;
  const left = new Array(n).fill(-1);
  const right = new Array(n).fill(n);

  const rightSmaller = () => {
    let stack = [[heights[n - 1], n - 1]];
    for (let i = n - 2; i >= 0; i--) {
      while (stack.length && stack[stack.length - 1][0] >= heights[i]) {
        stack.pop();
      }

      if (stack.length) {
        right[i] = stack[stack.length - 1][1];
      }
      stack.push([heights[i], i]);
    }
  };

  const leftSmaller = () => {
    let stack = [[heights[0], 0]];
    for (let i = 1; i < n; i++) {
      while (stack.length && stack[stack.length - 1][0] >= heights[i]) {
        stack.pop();
      }

      if (stack.length) {
        left[i] = stack[stack.length - 1][1];
      }
      stack.push([heights[i], i]);
    }
  };

  rightSmaller();
  leftSmaller();
  let maxArea = -Infinity;

  for (let i = 0; i < n; i++) {
    const ans = (right[i] - left[i] - 1) * heights[i];
    maxArea = Math.max(maxArea, ans);
  }

  return maxArea;
};
