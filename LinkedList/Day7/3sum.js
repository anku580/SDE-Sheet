/**
 * https://leetcode.com/problems/3sum/
 * @param {number[]} nums
 * @return {number[][]}
 * Time - O(n^2)
 * Space - O(1) ignoring the ans
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const ans = [];
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    const a = nums[i];
    let left = i + 1,
      right = n - 1;

    while (left < right) {
      const sum = nums[left] + nums[right];
      if (sum + a == 0) {
        ans.push([nums[left], nums[right], a]);

        left += 1;
        right -= 1;

        while (left < right && nums[left] == nums[left - 1]) {
          left += 1;
        }
        while (left < right && nums[right] == nums[right + 1]) {
          right -= 1;
        }
      } else if (sum + a > 0) {
        right -= 1;
      } else {
        left += 1;
      }
    }
    while (i + 1 < n && nums[i] == nums[i + 1]) {
      i++;
    }
  }

  return ans;
};
