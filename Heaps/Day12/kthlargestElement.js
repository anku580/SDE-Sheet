/**
 * https://leetcode.com/problems/kth-largest-element-in-an-array/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * Time - O(log(n)) - average, O(n^2) - worst
 * Space - O(1)
 */
var findKthLargest = function (nums, k) {
  let newK = nums.length - k;

  const swap = (i, j) => {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  };

  const quickSelect = (left, right) => {
    let [pivot, p] = [nums[right], left];

    for (let i = left; i < right; i++) {
      if (nums[i] <= pivot) {
        swap(p, i);
        p += 1;
      }
    }
    swap(p, right);

    if (p == newK) return nums[p];
    else if (p > newK) return quickSelect(left, p - 1);
    else return quickSelect(p + 1, right);
  };

  return quickSelect(0, nums.length - 1);
};
