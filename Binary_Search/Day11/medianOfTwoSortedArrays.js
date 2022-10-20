/**
 * https://leetcode.com/problems/median-of-two-sorted-arrays/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * Time - O(log(min(m,n)))
 * Space - O(1)
 */
var findMedianSortedArrays = function (nums1, nums2) {
  if (nums2.length < nums1.length) return findMedianSortedArrays(nums2, nums1);

  let low = 0,
    high = nums1.length - 1;
  const n1 = nums1.length,
    n2 = nums2.length;
  let partition = Math.floor((n1 + n2) / 2);

  while (true) {
    const middle = Math.floor((low + high) / 2);
    const rem = partition - middle - 2;

    const l1 = middle < 0 ? -Infinity : nums1[middle];
    const l2 = rem < 0 ? -Infinity : nums2[rem];
    const r1 = middle + 1 == n1 ? Infinity : nums1[middle + 1];
    const r2 = rem + 1 == n2 ? Infinity : nums2[rem + 1];

    if (l1 <= r2 && l2 <= r1) {
      if ((n1 + n2) % 2 == 0) {
        return (Math.max(l1, l2) + Math.min(r1, r2)) / 2;
      } else return Math.min(r1, r2);
    } else if (l1 > r2) {
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }

  return 0;
};
