// https://leetcode.cn/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-lcof/

// 虽然看到了就知道异或操作 但是还是具体不知道怎么写
// 相关题目参考 https://leetcode.cn/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-lcof/solution/zhi-chu-xian-yi-ci-de-shu-xi-lie-wei-yun-suan-by-a/
// 位运算操作参考 https://www.runoob.com/jsref/jsref-operators.html
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function (nums) {
  // & 两个位都为1时，结果才为1
  // | 两个位都为0时，结果才为0
  // ^ 相同为0 不同为1
  // // 2、结合律 (a^b)^c == a^(b^c)
  // 3、对于任何数x，都有 x^x=0，x^0=x
  // 4、自反性: a^b^b=a^0=a;
  let eor = 0,
    eor2 = 0;

  nums.forEach((item) => (eor = item ^ eor));
  // 此时 eor 的结果一定是两个 不相同值 的 异或结果
  // 因为两个值一定不相同  所以异或结果一定有一位是1
  let rightOne = eor & -eor; // 公式 记住即可 保留最后一个1，并且将其他位变为0
  // 这时 rightOne =  xxxxx1x   所求两个数为 xxx0xxx  xxx1xxx
  for (let num of nums) {
    // & 两个位都为1时，结果才为1   ^ 相同为0 不同为1
    // 根据rightOne进行分组。 至于为什么 = 0
    // 异或满足交换律，第一步异或，相同的数其实都抵消了，剩下两个不同的数。
    // 这两个数异或结果肯定有某一位为1，不然都是0的话就是相同数。
    // 找到这个位，不同的两个数一个在此位为0，另一个为1。
    // 按此位将所有数分成两组，分开后各自异或，相同的两个数异或肯定为0（而且分开的时候，两个数必为一组）。
    // 剩下的每组里就是我门要找的数
    if ((num & rightOne) === 0) {
      eor2 ^= num;
    }
  }
  // 得到之后 在此^ 就为所得值
  return [eor2 ^ eor, eor2];
};
console.log(singleNumbers([1, 1, 2, 3, 2, 5]));
