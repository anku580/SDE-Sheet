/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.com/problems/longest-increasing-subsequence/description/
 * Time - O(n*log(n))
 * Space - O(n)
 */

const getLowerBound = (ans, num) => {
  let l = 0,
    r = ans.length - 1;

  while (l < r) {
    const mid = Math.floor((l + r) / 2);
    if (ans[mid] >= num) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }

  return r;
};

var lengthOfLIS = function (nums) {
  const ans = [];
  ans.push(nums[0]);

  for (let i = 1; i < nums.length; i++) {
    let lastIdx = ans.length - 1;
    if (ans[lastIdx] < nums[i]) {
      ans.push(nums[i]);
    } else {
      let lb = getLowerBound(ans, nums[i]);
      ans[lb] = nums[i];
    }
  }

  return ans.length;
};
