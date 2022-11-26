//https://leetcode.cn/problems/w3tCBm/
// 我叼又他妈二进制。
//https://www.cnblogs.com/zhangmingcheng/p/4369919.html 参考
//
/**
 * @param {number} n
 * @return {number[]}
 */
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const bits = new Array(n + 1).fill(0);
  for (let i = 0; i <= n; i++) {
    bits[i] = countOnes(i);
  }
  return bits;
};

// 函数返回形参x转化成二进制后包含1的数量
// 每执行一次x = x&(x-1)，会将x用二进制表示时最右边的一个1变为0，因为x-1将会将该位(x用二进制表示时最右边的一个1)变为0。
const countOnes = (x) => {
  let ones = 0;
  while (x > 0) {
    x &= x - 1;
    ones++;
  }
  return ones;
};
