/**
 * https://leetcode.com/problems/valid-parentheses/
 * @param {string} s
 * @return {boolean}
 * Time - O(N)
 * Space - O(N)
 */
var isValid = function (s) {
  const stack = [];

  for (let inp of s) {
    if (inp == "(" || inp == "[" || inp == "{") stack.push(inp);
    else {
      const top = stack.pop();
      if (inp == ")" && top != "(") return false;
      if (inp == "]" && top != "[") return false;
      if (inp == "}" && top != "{") return false;
    }
  }

  return !stack.length ? true : false;
};
