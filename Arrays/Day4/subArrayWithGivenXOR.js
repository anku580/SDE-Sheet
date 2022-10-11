module.exports = {
  //https://www.interviewbit.com/problems/subarray-with-given-xor/
  //param A : array of integers
  //param B : integer
  //return an integer
  // Time - O(N)
  // Space - O(N)
  solve: function (nums, target) {
    let map = new Map();
    let prefixXOR = 0;
    let subArrayCount = 0;

    for (let num of nums) {
      prefixXOR ^= num;

      if (prefixXOR == target) subArrayCount += 1;

      const y = prefixXOR ^ target;
      if (map.has(y)) {
        subArrayCount += map.get(y);
      }

      if (map.has(prefixXOR)) map.set(prefixXOR, map.get(prefixXOR) + 1);
      else map.set(prefixXOR, 1);
    }

    return subArrayCount;
  },
};
