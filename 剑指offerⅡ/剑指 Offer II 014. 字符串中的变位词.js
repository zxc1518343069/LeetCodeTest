// https://leetcode.cn/problems/MPnaiL/
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
// 我看到题目的想法竟然事 S1的全排列去 S2里面找。。。
var checkInclusion = function (s1, s2) {
  const s1Len = s1.length,
    s2Len = s2.length;
  // 特判  如果 s1长度大于s2 直接return
  // 原因 题目要求s1的排列之一是s2的 子串
  if (s1Len > s2Len) {
    return false;
  }
  const cnt1 = new Array(26).fill(0);
  const cnt2 = new Array(26).fill(0);
  for (let i = 0; i < s1Len; ++i) {
    // 统计s1 字符 和个数
    cnt1[s1[i].charCodeAt() - "a".charCodeAt()]++;
    cnt2[s2[i].charCodeAt() - "a".charCodeAt()]++;
  }
  // 如果s1  = s2的前 s1Len 位 代表他俩相同
  if (cnt1.toString() === cnt2.toString()) {
    return true;
  }
  // 滑动窗口大小相当于 s1Len
  // 每次右移 就多记录一次 进入字符。减少一次离开字符
  for (let i = s1Len; i < s2Len; i++) {
    const word = s2[i];
    cnt2[word.charCodeAt() - "a".charCodeAt()]++;
    cnt2[s2[i - s1Len].charCodeAt() - "a".charCodeAt()]--;
    if (cnt1.toString() === cnt2.toString()) {
      return true;
    }
  }
  return false;
};

console.log(checkInclusion("ab", "eidbaooo"));
console.log(checkInclusion("ab", "eidboaoo"));
// 这个例子说明了为什么 需要-- 而不是直接等于0  统计的是字符个数 不是字符
console.log(checkInclusion("adc", "dcda"));
