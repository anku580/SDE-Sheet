/**
 * https://leetcode.com/problems/reverse-pairs/submissions/
 * @param {number[]} nums
 * @return {number}
 * Time - O(nlog(n)) + O(n) + O(n)
 * Space - O(n)
 */
var reversePairs = function (nums) {
  return mergeSort(0, nums.length - 1, nums, nums.length);
};

const mergeSort = (left, right, nums, n) => {
  let count = 0;
  if (left < right) {
    const mid = Math.floor((left + right) / 2);

    count += mergeSort(left, mid, nums, n);
    count += mergeSort(mid + 1, right, nums, n);

    count += merge(left, mid, right, nums, n);
  }

  return count;
};

const merge = (left, mid, right, nums, n) => {
  let count = 0;
  let i1 = left,
    j1 = mid + 1;

  while (i1 <= mid) {
    while (j1 <= right && nums[i1] > 2 * nums[j1]) {
      j1 += 1;
    }
    count += j1 - 1 - mid;
    i1 += 1;
  }

  let i = left,
    k = left,
    j = mid + 1;
  let temp = new Array(right - left + 1).fill(0);

  while (i <= mid && j <= right) {
    if (nums[i] <= nums[j]) {
      temp[k++] = nums[i++];
    } else {
      temp[k++] = nums[j++];
    }
  }

  while (i <= mid) {
    temp[k++] = nums[i++];
  }
  while (j <= right) {
    temp[k++] = nums[j++];
  }

  for (let l = left; l <= right; l++) {
    nums[l] = temp[l];
  }

  return count;
};
