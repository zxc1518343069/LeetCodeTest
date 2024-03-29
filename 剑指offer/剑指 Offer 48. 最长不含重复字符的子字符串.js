// https://leetcode-cn.com/problems/zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let res = 0,
    left = 0,
    map = new Map();
  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    // 在不写这个步骤下 abc这种无重复的是可以的，接下来就是 去重
    if (map.has(c) && map.get(c) >= left) {
      left = map.get(c) + 1; // 为什么+1   从下一位开始
    }
    map.set(c, i);
    res = Math.max(res, i - left + 1);
  }
  return res;
};

// 2022-7-8  典型滑动窗口
lengthOfLongestSubstring = function (s) {
  let res = 0,
    left = 0,
    map = new Map(),
    len = s.length;

  for (let i = 0; i < len; i++) {
    const element = s[i];
    // 得到的位置要在 大于指针的位置
    if (map.has(element) && map.get(element) >= left) {
      left = map.get(element) + 1;
    }
    map.set(element, i);
    res = Math.max(res, i - left + 1);
  }
  return res;
};
console.log(lengthOfLongestSubstring("abc"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("abba"));
