/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 * Time - O((N + 1)*(M)) - N - number of dots, M - max length of version within two dots
 * Space - O(1)
 */

const trimZero = (s) => {
  let num = "";
  let flag = true;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == 0 && flag) continue;
    flag = false;
    num += s[i];
  }

  if (flag == true) return "0";

  return num;
};

var compareVersion = function (v1, v2) {
  v1 = v1.split(".");
  v2 = v2.split(".");

  const m = v1.length,
    n = v2.length;

  for (let i = 0; i < Math.max(v1.length, v2.length); i++) {
    let a = i < m ? v1[i] : 0,
      b = i < n ? v2[i] : 0;
    //starts with 0
    if (i < m && v1[i][0] == "0") {
      a = trimZero(v1[i]);
    }

    if (i < n && v2[i][0] == "0") {
      b = trimZero(v2[i]);
    }

    if (parseInt(a) > parseInt(b)) return 1;
    if (parseInt(b) > parseInt(a)) return -1;
  }

  return 0;
};
