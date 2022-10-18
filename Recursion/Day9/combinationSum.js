/**
 * https://leetcode.com/problems/combination-sum/
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * Time - O(2^t * k)
 * space - O(k*x) k is the average length and x is the no. of combinations
 */
var combinationSum = function (candidates, target) {
  const ans = [];

  solve(0, candidates.length, candidates, target, [], ans);

  return ans;
};

const solve = (index, n, candidates, target, combi, ans) => {
  if (target == 0) {
    ans.push(combi);
    return;
  }

  if (target < 0) return;

  for (let i = index; i < n; i++) {
    solve(
      i,
      n,
      candidates,
      target - candidates[i],
      [...combi, candidates[i]],
      ans
    );
  }
};
