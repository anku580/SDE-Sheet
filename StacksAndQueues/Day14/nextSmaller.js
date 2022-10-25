//https://www.interviewbit.com/problems/nearest-smaller-element/
// Time - O(N)
// Space - O(N)

module.exports = {
  //param A : array of integers
  //return a array of integers
  prevSmaller: function (A) {
    const n = A.length;
    const ans = new Array(n).fill(-1);
    const stack = [A[0]];

    for (let i = 1; i < n; i++) {
      while (stack.length && stack[stack.length - 1] >= A[i]) {
        stack.pop();
      }

      if (stack.length) {
        ans[i] = stack[stack.length - 1];
      }

      stack.push(A[i]);
    }

    return ans;
  },
};
