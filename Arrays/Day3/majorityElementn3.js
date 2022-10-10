/**
 * https://leetcode.com/problems/majority-element-ii/
 * @param {number[]} nums
 * @return {number[]}
 * Time - O(n)
 * Space - O(1)
 */
var majorityElement = function (nums) {
  let c1 = 0,
    c2 = 0;
  let ele1, ele2;
  let n = nums.length;

  for (let num of nums) {
    if (num == ele1) {
      c1 += 1;
    } else if (num == ele2) {
      c2 += 1;
    } else if (c1 == 0) {
      ele1 = num;
      c1 = 1;
    } else if (c2 == 0) {
      ele2 = num;
      c2 = 1;
    } else {
      c1 -= 1;
      c2 -= 1;
    }
  }

  (c1 = 0), (c2 = 0);
  for (let i = 0; i < n; i++) {
    if (nums[i] == ele1) {
      c1 += 1;
    } else if (nums[i] == ele2) {
      c2 += 1;
    }
  }
  const ans = [];
  const oneThird = Math.floor(n / 3);
  if (c1 > oneThird) {
    ans.push(ele1);
  }
  if (c2 > oneThird) {
    ans.push(ele2);
  }

  return ans;
};
