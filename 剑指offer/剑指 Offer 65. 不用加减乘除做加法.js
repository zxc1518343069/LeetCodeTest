// https://leetcode.cn/problems/bu-yong-jia-jian-cheng-chu-zuo-jia-fa-lcof/
// todo:  我一定好好学位运算
// 参考 https://leetcode.cn/problems/bu-yong-jia-jian-cheng-chu-zuo-jia-fa-lcof/solution/mian-shi-ti-65-bu-yong-jia-jian-cheng-chu-zuo-ji-7/

// 进位运算 x = (a&b)<<1
// 非进位  n = a^b
// S（a+b） = x + n
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var add = function (a, b) {
  while (b !== 0) {
    let x = (a & b) << 1;
    a = a ^ b;
    b = x; //进位
  }
  return a;
};
console.log(add(1, 2));
