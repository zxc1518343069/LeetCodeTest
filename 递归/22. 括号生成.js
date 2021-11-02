// https://leetcode-cn.com/problems/generate-parentheses/

/**
 * @param {number} n
 * @return {string[]}
 */

/* 递归  dfs */
let generateParenthesis = function(n) {
  let res = [];
  const help = (cur, left, right) => {
    if (cur.length === 2 * n) {
      res.push(cur);
      return;
    }
    if (left < n) {
      help(cur + '(', left + 1, right)
    }
    if (right < left) {
      help(cur + ')', left, right + 1);
    }
  };
  help('', 0, 0);
  return res;
};


generateParenthesis = (n) => {

  const res = []

  const help = (s, left, right) => {
    // 结束条件
    if (s.length === n * 2) return res.push(s)

    if (left < n) {
      help(s + '(', left + 1, right)
    }
    if (right < left) {
      help(s + ')', left, right + 1)
    }
  }

  help('', 0, 0)
  return res
}
console.log(generateParenthesis(3))
