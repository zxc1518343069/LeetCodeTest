// https://leetcode.cn/problems/M1oyTv/
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  // 思路 1。先找到包含T 中所有字符的字符串。
  // 2. 找到之后 做指针开始缩小字符串长度 但必须满足 1 不满足 继续往后寻找
  // 参考图示 https://leetcode.cn/problems/M1oyTv/solution/han-you-suo-you-zi-fu-de-zui-duan-zi-fu-a8q50/
  const sLen = s.length,
    tLen = t.length;
  if (sLen < tLen) return ""; // 特判
  let left = 0,
    right = 0,
    min = Infinity,
    res = "";
  // 统计t字符串数量
  const tWordMap = new Map();
  let tStrLen = tLen;
  for (let i = 0; i < tLen; i++) {
    tWordMap.set(t[i], tWordMap.get(t[i]) ? tWordMap.get(t[i]) + 1 : 1);
  }

  // 遍历s 如果找到包含所有t字符的字符串。
    // 找到之后让做指针开始缩小范围。如果出现了t中的字符串就让right 继续寻找
  for (; right < sLen; right++) {
    const word = s[right];
    if (tWordMap.has(word)) {
      const count = tWordMap.get(word);
      if (count > 0) {
        tStrLen--;
      }
      // 因为s所出字符串不少t中所出现字符  所以我们不需要关注字符数多少
      tWordMap.set(word, count - 1);
    }
    while (tStrLen === 0) {
      // 当字符串小于最小值
      if (right - left + 1 < min) {
        min = right - left + 1;
        console.log(left, right);
        res = s.slice(left, right + 1);
      }
      if (tWordMap.has(s[left])) {
        tWordMap.set(s[left], tWordMap.get(s[left]) + 1);
        if (tWordMap.get(s[left]) > 0) {
          tStrLen++;
        }
      }

      left++; // 减小字符串距离
    }
  }

  return res;
};

console.log(minWindow("ADOBECODEBANC", "ABC"));
