/**
 * https://leetcode.com/problems/find-the-duplicate-number/submissions/
 * @param {number[]} nums
 * @return {number}
 * Time - O(n)
 * Space - O(1)
 */
var findDuplicate = function (nums) {
  let tortoise = nums[0];
  let hare = nums[0];

  do {
    hare = nums[nums[hare]];
    tortoise = nums[tortoise];
  } while (tortoise != hare);

  hare = nums[0];

  while (tortoise != hare) {
    tortoise = nums[tortoise];
    hare = nums[hare];
  }

  return tortoise;
};
