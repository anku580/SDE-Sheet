/**
 * https://leetcode.com/problems/majority-element/
 * @param {number[]} nums
 * @return {number}
 * Time - O(n)
 * Space - O(1)
 */
var majorityElement = function (nums) {
  let count = 0;
  let ele;

  for (let num of nums) {
    if (count == 0) {
      ele = num;
    }
    if (ele == num) count += 1;
    else count -= 1;
  }

  return ele;
};
