// https://leetcode.cn/problems/JFETK5/
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
// 类似用c写大数相加
var addBinary = function (a, b) {
  let res = "";
  let i1 = a.length - 1;
  let i2 = b.length - 1;
  let carry = 0; // 进位
  while (i1 >= 0 || i2 >= 0) {
    const x = i1 >= 0 ? a[i1] - "0" : 0;
    const y = i2 >= 0 ? b[i2] - "0" : 0;

    const sum = x + y + carry;
    res += sum % 2;
    carry = Math.floor(sum / 2);

    i1--;
    i2--;
  }
  if (carry) res += carry;
  return res.split("").reverse().join("");
};

console.log(addBinary(a = "1010", b = "1011"));// 10101
