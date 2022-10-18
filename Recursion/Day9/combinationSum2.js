/**
 * https://leetcode.com/problems/combination-sum-ii/
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * Time - O(2^t*k) k - max combination len
 * Space - O(x*k)
 */
var combinationSum2 = function (candidates, target) {
  const ans = [];
  candidates.sort((a, b) => a - b);

  solve(0, candidates.length, candidates, target, [], ans);

  return ans;
};

const solve = (index, n, candidates, target, combi, ans) => {
  if (target == 0) {
    ans.push(combi);
    return;
  }
  if (index == n) return;

  if (target < 0) return;

  solve(
    index + 1,
    n,
    candidates,
    target - candidates[index],
    [...combi, candidates[index]],
    ans
  );

  while (index + 1 < n && candidates[index] == candidates[index + 1])
    index += 1;
  solve(index + 1, n, candidates, target, combi, ans);
};
