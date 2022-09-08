//https://leetcode.cn/problems/IDBivT/
/**
 * @param {number} n
 * @return {string[]}
 */
// 生产数据长度是 n 的 2倍
var generateParenthesis = function (n) {
  let res = [];
  const dfs = (cur, left, right) => {
    // 结束条件
    if (cur.length === 2 * n) {
      return res.push(cur);
    }

    if (left < n) {
      dfs(cur + "(", left + 1, right);
    }
    if (right < left) {
      dfs(cur + ")", left, right + 1);
    }
  };
  dfs("", 0, 0);
  return res;
};
console.log(generateParenthesis(3));
