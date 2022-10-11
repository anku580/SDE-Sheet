/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 * Time - O(N*3)
 * Space - O(N*2)
 */
var fourSum = function (nums, target) {
  const ans = [];
  nums.sort((a, b) => a - b);
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    let a = nums[i];

    for (let j = i + 1; j < n; j++) {
      let b = nums[j];

      let left = j + 1,
        right = n - 1;

      while (left < right) {
        const sum = a + b + nums[left] + nums[right];
        if (sum == target) {
          ans.push([a, b, nums[left], nums[right]]);
          left += 1;
          // ignoring duplicate values
          while (left < right && nums[left] == nums[left - 1]) {
            left += 1;
          }
          right -= 1;
          // ignoring duplicate values
          while (left < right && nums[right] == nums[right + 1]) {
            right -= 1;
          }
        } else if (sum > target) {
          right -= 1;
        } else left += 1;
      }
      // ignoring duplicate values
      while (nums[j] == nums[j + 1] && j + 1 < n) {
        j++;
      }
    }
    // ignoring duplicate values
    while (nums[i] == nums[i + 1] && i + 1 < n) {
      i++;
    }
  }

  return ans;
};
