// https://leetcode-cn.com/problems/jian-sheng-zi-ii-lcof/

/*
整体思路 和 13 一样 但是有一点，会超出范围。有两种方案  第一使用bigInt  第二还是上面的数学思想
 */
/**
 * @param {number} n
 * @return {number}
 */
/*
 整体思路就在于
 */
// todo   有一定的思路问题 相同的值取余相同的数 结果不同
var cuttingRope = function(n) {
  if (n === 0) return 0
  if (n === 1) return 1
  if (n === 2) return 1
  if (n === 3) return 2

  let res = 1
  while (n > 4) {
    res *= 3
    res = res % (1e9 + 7)
    n -= 3
  }
  return (res * n) % (1e9 + 7)
};

console.log(cuttingRope(10)) // 36
console.log(cuttingRope(120)) // 953271190
