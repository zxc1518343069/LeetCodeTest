// https://leetcode.cn/problems/iSwD2y/
/**
 * @param {string[]} words
 * @return {number}
 */
// 这题目都看不懂
var minimumLengthEncoding = function (words) {
  // 前缀树
  const root = {},
    wordsLen = words.length;
  let res = 0;
  // 处理一下数组，根据字符串长度排序
  words.sort((a, b) => {
    return b.length - a.length;
  });
  for (let i = 0; i < wordsLen; i++) {
    const word = words[i];
    let cur = root,
      flag = false;
    // 倒序排  因为i 是字符串长度从大到小的顺序 更好的判断字串
    for (let j = word.length - 1; j >= 0; j--) {
      const ch = word[j];
      if (!cur[ch]) {
        cur[ch] = {};
        flag = true; // 标记改元素不属于其他元素的后缀(/前缀/子字符串)
      }
      cur = cur[ch]; //
    }

    if (flag) {
      res += word.length + 1;
    }
  }
  return res;
};

console.log(minimumLengthEncoding(["time", "me", "bell"]));
// console.log(minimumLengthEncoding(["t"]));
