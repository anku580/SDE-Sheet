//https://www.interviewbit.com/problems/minimum-characters-required-to-make-a-string-palindromic/
// Using KMP
// Time - O(m+n)
// Space - O(m)

module.exports = {
  //param A : string
  //return an integer
  solve: function (A) {
    let string = "";

    for (let i = A.length - 1; i >= 0; i--) {
      string = string + A[i];
    }

    string = A + "$" + string;
    const LPS = new Array(string.length).fill(0);
    let prevLPS = 0;
    let i = 1;

    while (i < string.length) {
      if (string[i] == string[prevLPS]) {
        LPS[i] = prevLPS + 1;
        prevLPS += 1;
        i += 1;
      } else {
        if (prevLPS == 0) {
          LPS[i] = 0;
          i += 1;
        } else {
          prevLPS = LPS[prevLPS - 1];
        }
      }
    }
    console.log(LPS);

    return A.length - LPS[string.length - 1];
  },
};
