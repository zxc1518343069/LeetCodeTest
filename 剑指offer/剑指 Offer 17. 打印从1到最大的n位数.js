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

console.log(printNumbers(2))
