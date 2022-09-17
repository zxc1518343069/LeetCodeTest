// https://leetcode.cn/problems/omKAoA/
/**
 * @param {string} s
 * @return {number}
 */
var minCut = function (s) {
  const n = s.length;
  // 初始化 假设 所有 所以 i - j 位置上都会回文字符串
  const g = new Array(n).fill(0).map(() => new Array(n).fill(true));

  // 为什么不能这么写，可以 但是需要在内部false 改变判断方式
  // 原因 g[i + 1][j - 1] 判断需要依赖以 i 大 j小的值
  //   for (let i = 0; i < n; i++) {
  //     // for (let j = i + 1; j < n; j++) {
  //     //   // 判断 本次字符是否相等 且 上次子串 也为 回文
  //     //   g[i][j] = s[i] === s[j] && g[i + 1][j - 1];
  //     // }
  //     }

  for (let i = n - 1; i >= 0; --i) {
    for (let j = i + 1; j < n; j++) {
      g[i][j] = s[i] === s[j] && g[i + 1][j - 1];
    }
  }

  // 代表 0 - i 下最小切割数量
  let res = new Array(n).fill(Infinity);
  for (let i = 0; i < n; i++) {
    if (g[0][i]) {
      res[i] = 0;
    } else {
      for (let j = 0; j < i; j++) {
        // 代表一定时回文
        if (g[j + 1][i]) {
          res[i] = Math.min(res[i], res[j] + 1);
        }
      }
    }
  }
  console.log(res);
  console.log(g[9]);
  return res[n - 1];
};
// console.log(minCut("aab")); // 1
// console.log(minCut("cdd")); // 1
// console.log(minCut("caba")); // 1
// c ababa b cbc
console.log(minCut("cabababcbc")); // 3
