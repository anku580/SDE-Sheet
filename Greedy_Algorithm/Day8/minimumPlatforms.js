/**
 * https://practice.geeksforgeeks.org/problems/minimum-platforms-1587115620/1#
 * @param {number[]} arr
 * @param {number[]} dep
 * @param {number} n
 * @returns {number}
 * Time - O(2*(nlogn))
 * Space - O(1)
 */

class Solution {
  //Function to find the minimum number of platforms required at the
  //railway station such that no train waits.
  findPlatform(arr, dep, n) {
    //your code here
    arr.sort((a, b) => a - b);
    dep.sort((a, b) => a - b);

    let platformsOccupied = 0;
    let maxPlatforms = 0;
    let a1 = 0,
      d1 = 0;
    while (a1 < n || d1 < n) {
      if (arr[a1] <= dep[d1]) {
        platformsOccupied += 1;
        a1 += 1;
      } else {
        platformsOccupied -= 1;
        d1 += 1;
      }
      maxPlatforms = Math.max(maxPlatforms, platformsOccupied);
    }

    return maxPlatforms;
  }
}
