// https://leetcode-cn.com/problems/shu-zi-xu-lie-zhong-mou-yi-wei-de-shu-zi-lcof/
/**
 * @param {number} n
 * @return {number}
 */

/*
先找规律   10 之内直接返回
10 以上
10 - 99  的 数字个数为  10 * 9 * 2
100 - 999 的数字个数为  100 * 9 * 3
所以  let count = 1
数字个数等于    10 ** k * 9  * (K+1)

 */
var findNthDigit = function(n) {  // n =  11    0
  //      12    1
  //      13    1
  //      14    1
  //      15    2
  //      16    1

  if (n < 10) return n

  let count = 1, size = 9
  while (n >= size) {
    n -= size
    size = 9 * 10 ** count * (count + 1)
    count++
  }
  n-- //为什么要--  因为 需要  分 奇偶数 简化而来
  const str = 10 ** (count - 1) + parseInt(n / count) + ''  // 这里找到的是第几个数
  return str[n % count]
};
console.log(findNthDigit(1000))
