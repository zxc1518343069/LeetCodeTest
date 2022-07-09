// https://leetcode-cn.com/problems/chou-shu-lcof/
/**
 * @param {number} n
 * @return {number}
 */
/*
只包含因子为 2 3 5 的数为丑数
1的下一个丑数 一定是    2    1 * 2  也就是 2 * [0]
2的下一个丑数  一定是   3    1 * 3  也就是 3 * [0]
3的下一个丑数  是      4    2  * 2 也就是 2 * [1]
4的下一个丑数  是      5    1  * 5 也就是 5 * [0]
5的下一个丑数  是      6    2  * 3 也就是 2 * [2]
6的下一个丑数  是      8    2  * 4 也就是 2 * [3]
 */
var nthUglyNumber = function (n) {
  const dp = [1];
  let one = 0,
    two = 0,
    three = 0;

  while (dp.length < n) {
    const cur = Math.min(2 * dp[one], 3 * dp[two], 5 * dp[three]);
    if (cur === 2 * dp[one]) one++;
    if (cur === 3 * dp[two]) two++;
    if (cur === 5 * dp[three]) three++;
    dp.push(cur);
  }
  return dp[dp.length - 1];
};

nthUglyNumber = function (n) {
  const dp = [1];
  let one = 0,
    two = 0,
    three = 0;
  // 丑数的质因子  只包含 2、3 和 5  质因子：指能整除给定正整数的质数
  // 所以  丑数一定是 质因子 的乘积

  while (dp.length < n) {
    // dp 代表所存的 丑数个数  有定义可知。丑数一定是质因子乘积
    // 即 丑数 == 某较小丑数 × 某因子
    // Xn+1 = 2 * Xa || 3* Xb || 5 * Xc
    // 所以只需要判断 质因子 乘积大小 即可获得 按顺序的丑数
    const cur = Math.min(2 * dp[one], 3 * dp[two], 5 * dp[three]);

    // 这一步 可以理解为 有几个 质因子。
    // 为什么分开 if  比如6  既可以是2 也可以是3
    // 若 if else 则 例如6 就回被 输入到 dp 两次
    if (cur === 2 * dp[one]) {
      one++;
    }
    if (cur === 3 * dp[two]) {
      two++;
    }
    if (cur === 5 * dp[three]) {
      three++;
    }
    // 将丑数 放入数组
    dp.push(cur);
  }

  console.log(dp, one, two, three);
  return dp[dp.length - 1];
};

console.log(nthUglyNumber(10));
