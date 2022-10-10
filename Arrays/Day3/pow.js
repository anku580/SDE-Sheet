/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 * Time - O(log(n))
 * Space - O(1)
 */
var myPow = function (x, n) {
  let newN = n < 0 ? n * -1 : n;
  let total = 1;

  while (newN > 0) {
    if (newN % 2 == 0) {
      newN = newN / 2;
      x = x * x;
    } else {
      total = total * x;
      newN = newN - 1;
    }
  }

  if (n < 0) return 1 / total;
  return total;
};
