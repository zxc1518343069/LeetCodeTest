// https://leetcode-cn.com/problems/integer-replacement/
/**
 * @param {number} n
 * @return {number}
 */

/*
 最小次数
 5 101  变成 变成 1 需要  5-6-3-2-1  4次
 5                      5-4-2-1  3次
 所以  以 01 结尾的需要  -1
 3特例 -1
 */


var integerReplacement = function(n) {
  let count = 0
  while (n !== 1) {
    if ((n & 1) === 0) { // 是偶数
      n = (n >>> 1) // 无符号左移
    } else {
      if (n === 3 || ((n & 2) === 0)) {
        n+=-1
      } else {
        n += 1
      }
    }

    count++
  }

  return count
};
console.log(integerReplacement(2))
console.log(integerReplacement(8))
console.log(integerReplacement(7))
console.log(integerReplacement(2147483647))
