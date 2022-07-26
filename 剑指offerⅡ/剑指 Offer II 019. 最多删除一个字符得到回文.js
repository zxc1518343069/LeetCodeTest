// https://leetcode.cn/problems/RQku0D/solution/jian-zhi-offer-zhuan-xiang-tu-po-ban-shu-w14g/
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let low = 0,
    high = s.length - 1;
  const valid = (low, high) => {
    for (let i = low, j = high; i < j; i++, j--) {
      if (s[i] != s[j]) return false;
    }
    return true;
  };
  // 这个相对简单了 就是 如果不相等  一个+1 一个-1 都试一遍
  while (low < high) {
    if (s[low] == s[high]) {
      low++;
      high--;
    } else {
      return valid(low + 1, high) || valid(low, high - 1);
    }
  }
  return true;
};
