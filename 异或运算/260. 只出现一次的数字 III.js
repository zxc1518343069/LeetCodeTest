// https://leetcode-cn.com/problems/single-number-iii/

let singleNumber = function (nums) {
  let eor = 0,
    eor2 = 0;

  nums.forEach((item) => (eor = item ^ eor));
  // &两个位都为1时，结果才为1
  // | 两个位都为0时，结果才为0
  // ^ 相同为0 不同为1
  // eor = 3 ^ 5   1 ^ 2 ^ 1 ^ 3 ^ 2 ^ 5 = 0 ^ 3 ^ 5 = 3 ^ 5
  // 2、结合律 (a^b)^c == a^(b^c)
  // 3、对于任何数x，都有 x^x=0，x^0=x
  // 4、自反性: a^b^b=a^0=a;
  // 取右边的第一个1

  /*
   * 3           00000011
   * 5           00000101
   * eor         00000110
   * ~eor        11111001
   * ~eor+1      11111010
   * eor&~eor+1  00000010
   * */
  console.log(eor);
  let rightOne = eor & -eor;
  console.log(rightOne);
  for (let num of nums) {
    if ((num & rightOne) === 0) {
      console.log("num", num);
      eor2 ^= num;
    }
  }
  console.log(eor2);
  return [eor2 ^ eor, eor2];
};
console.log(singleNumber([2, 3, 2, 5]));
