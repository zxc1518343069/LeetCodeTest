// https://leetcode-cn.com/problems/count-and-say/

/**
 * @param {number} n
 * @return {string}
 */
// 理解题意  1 = 1   2 = 一（1）个1 = 11  3 = 两（2）个一 = 21    4 = 一（1）个二（2）一（1）个一（1） = 1211
// 由此可见 输入的值都是依赖上一个数字  所以我们如果想知道 n  必须知道n-1
var countAndSay = function(n) {
  let res = '1'
  for (let i = 1; i < n; i++) {
    // 获得n-1
    let tmp = ''
    let N_1 = res[0], count = 0 // 用来 记录 出现次数
    const len = res.length
    for (let j = 0; j < len; j++) {
      if (res[j] !== N_1) { // 重点关注
        tmp += count + N_1 // 记录之前结果
        N_1 = res[j] // 改变记录的值
        count = 1 // 出现次数
      } else {
        count++
      }
    }
    res = tmp + count + N_1
  }
  return res
};

// console.log(countAndSay(1))
// console.log(countAndSay(2))
// console.log(countAndSay(3))
console.log(countAndSay(4))
console.log(countAndSay(5))
