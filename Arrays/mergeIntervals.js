/**
 * @param {number[][]} intervals
 * @return {number[][]}
 * Time - O(n*log(n)) + O(n)
 * Space - O(n)
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const ans = [intervals[0]];
  let itr = 0;

  for (let i = 1; i < intervals.length; i++) {
    const [pStart, pEnd] = ans[itr];
    const [cStart, cEnd] = intervals[i];

    if (pEnd >= cStart) {
      ans[itr] = [Math.min(pStart, cStart), Math.max(pEnd, cEnd)];
    } else {
      ans.push(intervals[i]);
      itr++;
    }
  }

  return ans;
};
