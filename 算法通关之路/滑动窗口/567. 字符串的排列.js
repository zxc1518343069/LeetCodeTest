// https://leetcode-cn.com/problems/permutation-in-string/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

// s1 s2     s2 是否包含s1 的排列
// 问题在于 在s2中找到一个等于 s1 字符串长度 且 出现字符次数相同。 则必定含有

var checkInclusion = function(s1, s2) {
  const n = s1.length, m = s2.length;
  if (n > m) {
    return false; // 特殊判断 如果s1长度大于 s2 则s2 不会包含 s1 的排列
  }

  // 记录 s1 s2 字符出现数
  const cnt1 = new Array(26).fill(0);
  const cnt2 = new Array(26).fill(0);
  for (let i = 0; i < n; ++i) {
    cnt1[s1[i].charCodeAt() - 'a'.charCodeAt()]++
    cnt2[s2[i].charCodeAt() - 'a'.charCodeAt()]++
  }

  // 判断 相同 就证明含有
  if (cnt1.toString() === cnt2.toString()) {
    return true;
  }

  // 从 字符开始查找。
  for (let i = n; i < m; ++i) {
    cnt2[s2[i].charCodeAt() - 'a'.charCodeAt()]++  // 更新字符串
    cnt2[s2[i - n].charCodeAt() - 'a'.charCodeAt()]-- // 更新
    if (cnt1.toString() === cnt2.toString()) {
      return true;
    }
  }

  return false;
};

console.log(checkInclusion(s1 = 'ab', s2 = 'eidbaooo')) // true
