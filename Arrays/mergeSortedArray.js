/**
 * https://leetcode.com/problems/merge-sorted-array/
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * Time - O(m*n)
 * Space - O(1)
 */
var merge = function (nums1, m, nums2, n) {
  if (n == 0) return nums1;

  for (let i = 0; i < m; i++) {
    if (nums1[i] <= nums2[0]) continue;

    swap(i, 0, nums1, nums2);

    // insertion sort
    const firstElem = nums2[0];
    let j;
    for (j = 1; j < n && nums2[j] < firstElem; j++) {
      nums2[j - 1] = nums2[j];
    }
    nums2[j - 1] = firstElem;
  }

  let itr = 0;
  for (let i = m; i < m + n; i++) {
    nums1[i] = nums2[itr++];
  }

  return nums1;
};

// const swap = (i, j, nums1, nums2) => {
//   const temp = nums1[i];
//   nums1[i] = nums2[j];
//   nums2[j] = temp;
// };

/**
 * GAP METHOD - O(n+m) time
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  if (n == 0) return nums1;

  let gap = Math.ceil(m + n / 2);
  let itr = 0;
  for (let i = m; i < m + n; i++) {
    nums1[i] = nums2[itr++];
  }

  while (gap > 0) {
    let i = 0,
      j = gap;
    while (j < m + n) {
      if (nums1[i] > nums1[j]) {
        swap(i, j, nums1);
      }
      i++;
      j++;
    }
    if (gap == 1) gap = 0;
    else gap = Math.ceil(gap / 2);
  }

  return nums1;
};

const swap = (i, j, nums1) => {
  const temp = nums1[i];
  nums1[i] = nums1[j];
  nums1[j] = temp;
};
