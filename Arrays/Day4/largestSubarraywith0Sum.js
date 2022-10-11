/**
 * https://practice.geeksforgeeks.org/problems/largest-subarray-with-0-sum/1
 * @param {Number[]} arr
 * @param {Number} n
 * @returns {Number}
 * Time - O(n)
 * Space - O(n)
 */

class Solution {
  maxLen(arr, n) {
    //code here
    const hmap = {};
    let sum = 0;
    let maxLen = 0;

    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
      if (sum == 0) {
        maxLen = i + 1;
      }
      if (sum in hmap) {
        maxLen = Math.max(maxLen, i - hmap[sum]);
      } else {
        hmap[sum] = i;
      }
    }

    return maxLen;
  }
}
