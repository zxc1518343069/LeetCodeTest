// https://leetcode-cn.com/problems/er-jin-zhi-zhong-1de-ge-shu-lcof/

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
/*
位运算
 & 都为1 则1  否则则0
 */
var hammingWeight = function(n) {
  let res = 0
  for (let i = 0; i < 32; i++) {
    if (n >> i & 1) {
      res++
    }
  }
  return res
};

/*
正则表达式
 */
var hammingWeight2 = function(n) {
  const str =  n.toString(2).match(/1/g)
  return str?str.length:0
};
console.log(hammingWeight2(00000000000000000000000000001011))
