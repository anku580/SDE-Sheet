/**
 * @param {number[]} nums
 * @return {number}
 * Time - O(n)
 * Space - O(n)
 */
var longestConsecutive = function (nums) {
  if (nums.length == 0) return 0;
  const hmap = {};
  let maxi = 0;

  for (let n of nums) {
    hmap[n] = false;
  }

  for (let n of nums) {
    if (hmap[n] == false) {
      hmap[n] = true;
      let increment = n + 1;

      while (hmap[increment] == false) {
        hmap[increment] = true;
        increment += 1;
      }

      let decrement = n - 1;

      while (hmap[decrement] == false) {
        hmap[decrement] = true;
        decrement -= 1;
      }

      maxi = Math.max(maxi, increment - decrement - 1);
    }
  }

  return maxi;
};
