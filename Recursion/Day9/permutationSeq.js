/**
 * https://leetcode.com/problems/permutation-sequence
 * @param {number} n
 * @param {number} k
 * @return {string}
 * Time - O(n*n)
 * Space - O(n) - stack space
 */
var getPermutation = function (n, k) {
  let ans = "";
  let string = "";
  for (let i = 1; i <= n; i++) {
    string += i;
  }
  let fact = factorial(n - 1);
  return solve(n, k - 1, ans, string, fact);
};

const factorial = (n) => {
  let a = 1;
  while (n != 0) {
    a = a * n;
    n = n - 1;
  }

  return a;
};

const solve = (n, k, ans, s, fact) => {
  if (n == 0) return ans;

  let cell = k > 0 ? Math.floor(k / fact) : 0;
  let newK = k % fact;
  fact = Math.floor(fact / (s.length - 1));

  ans += s[cell];

  return solve(
    n - 1,
    newK,
    ans,
    s.substring(0, cell) + s.substring(cell + 1, s.length),
    fact
  );
};
