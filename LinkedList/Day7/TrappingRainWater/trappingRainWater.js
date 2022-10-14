/**
 * https://leetcode.com/problems/trapping-rain-water/
 * @param {number[]} height
 * @return {number}
 * Time - 3*O(n)
 * Space - 2*O(n)
 */
var trap = function (height) {
  //Step1 - Calculate the leftmax and rightmax for each pillar
  const n = height.length;
  const leftMax = new Array(n).fill(0);
  const rightMax = new Array(n).fill(0);

  let maxHeight = -Infinity;
  for (let i = 0; i < n; i++) {
    if (i != 0) {
      leftMax[i] = maxHeight;
    }
    maxHeight = Math.max(height[i], maxHeight);
  }

  maxHeight = -Infinity;
  for (let i = n - 1; i >= 0; i--) {
    if (i != n - 1) {
      rightMax[i] = maxHeight;
    }
    maxHeight = Math.max(height[i], maxHeight);
  }

  let trappedWater = 0;

  for (let i = 0; i < n; i++) {
    const minPillar = Math.min(leftMax[i], rightMax[i]);
    if (minPillar == 0) continue;

    if (minPillar - height[i] > 0) {
      trappedWater += minPillar - height[i];
    }
  }

  return trappedWater;
};
