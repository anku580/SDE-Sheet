/**
 * https://leetcode.com/problems/sliding-window-maximum/
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * Time - O(N)
 * Space - O(K)
 */
var maxSlidingWindow = function (nums, k) {
  let deque = [];
  const n = nums.length;
  let ans = [];

  for (let i = 0; i < n; i++) {
    //pop the index that are greater than window size i.e k from front
    if (deque.length && i - deque[0] >= k) {
      deque.shift();
    }

    //pop the indexes that are smaller in dequeue than the current element
    while (deque.length && nums[deque[deque.length - 1]] <= nums[i]) {
      deque.pop();
    }

    deque.push(i);

    if (i >= k - 1) {
      ans.push(nums[deque[0]]);
    }
  }

  return ans;
};
