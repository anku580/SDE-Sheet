/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const newK = nums.length - k;

  const swap = (a, b) => {
    const temp = nums[a];
    nums[a] = nums[b];
    nums[b] = temp;
  };

  const solve = (l, r) => {
    let [pivot, p] = [nums[r], l];

    for (let i = l; i < r; i++) {
      if (nums[i] <= pivot) {
        swap(i, p);
        p += 1;
      }
    }

    swap(p, r);

    if (p == newK) return nums[newK];
    else if (p > newK) return solve(l, p - 1);
    else return solve(p + 1, r);
  };

  return solve(0, nums.length - 1);
};
