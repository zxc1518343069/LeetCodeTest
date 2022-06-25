// https://leetcode-cn.com/problems/da-yin-cong-1dao-zui-da-de-nwei-shu-lcof/
/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function(n) {
// todo 感觉有问题，不能这么简单吧
  let res = []

  for (let i = 1; i < 10 ** n; i++) {
    res.push(i)
  }
  return res
};
// 考虑大数的条件下 做法
var printNumbers2 = function(n) {
  let res = []

  const dfs = (s, sLen) => {
    if (s.length === sLen) return res.push(s * 1)

    for (let i = 0; i <= 9; i++) {
      s += i
      dfs(s, sLen)
      s = s.substring(0, s.length - 1)
    }
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= 9; j++) {
      dfs(j.toString(), i)
    }
  }
  return res
};


console.log(printNumbers2(2))
