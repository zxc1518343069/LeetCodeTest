// https://leetcode.cn/problems/US1pGT/
/**
 * Initialize your data structure here.
 */
// 单词列表中的单词 互不相同
var MagicDictionary = function () {
  this.dict = [];
};

/**
 * @param {string[]} dictionary
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function (dictionary) {
  this.dict = dictionary;
};

/**
 * @param {string} searchWord
 * @return {boolean}
 */
MagicDictionary.prototype.search = function (searchWord) {
  const searchWordLen = searchWord.length;
  const dictLen = this.dict.length;
  for (let i = 0; i < dictLen; i++) {
    const word = this.dict[i];
    // 字符数不相同直接跳过
    if (searchWordLen !== word.length) continue;
    let diff = 0;
    for (let j = 0; j < searchWordLen; j++) {
      if (diff > 1) {
        break; // 开始进行下一轮对比
      }
      if (word[j] !== searchWord[j]) diff++;
    }

    if (diff === 1) {
      return true;
    }
  }

  return false;
};
