// 数组中一种数出现1 次 其他数出现2次
// & 两个位都为1时，结果才为1
// | 两个位都为0时，结果才为0
// ^ 相同为0 不同为1
// // 2、结合律 (a^b)^c == a^(b^c)
// 3、对于任何数x，都有 x^x=0，x^0=x
// 4、自反性: a^b^b=a^0=a;

function printOddTimesNum1(nums) {
  let eor = 0;
  for (const num of nums) {
    eor ^= num;
  }
  return eor;
}
console.log(printOddTimesNum1([1, 1, 2, 3, 4, 4, 3]));
