// https://leetcode-cn.com/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof/

/**
 * @param {string} s
 * @return {character}
 */
/*
拿 {} 就可  没必要map
 */
// 送分题 2022 - 7 - 9
var firstUniqChar = function (s) {
  if (!s.length) return " ";
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if (map.has(c)) {
      map.set(c, map.get(c) + 1);
      continue;
    }
    map.set(c, 1);
  }

  for (let key of map.keys()) {
    let count = map.get(key);
    if (count === 1) return key;
  }
  return " ";
};
