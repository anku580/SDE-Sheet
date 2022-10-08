//https://leetcode.com/problems/pascals-triangle/

/**
 * @param {number} numRows
 * @return {number[][]}
 * Space - O(n^2)
 * Time - O(n^2)
 */
var generate = function (numRows) {
  let output = [[1]];

  for (let i = 1; i < numRows; i++) {
    let newComb = [1];
    for (let j = 1; j < output[i - 1].length; j++) {
      newComb.push(output[i - 1][j - 1] + output[i - 1][j]);
    }
    newComb.push(1);
    output.push(newComb);
  }

  return output;
};
