// https://leetcode.cn/problems/UhWRSj/
/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
// 思路 去重+ 排序 保证最前面的一定是 最短的
var replaceWords = function (dictionary, sentence) {
  const words = sentence.split(" ");
  const wordsLen = words.length;
  // 过滤+ 按字符串长度排序
  const dicSet = Array.from(new Set(dictionary)).sort();
  const dicLen = dicSet.length;

  for (let i = 0; i < wordsLen; i++) {
    const word = words[i];
    // 判断
    for (let j = 0; j < dicLen; j++) {
      if (word.startsWith(dicSet[j])) {
        words[i] = dicSet[j];
        break;
      }
    }
  }

  return words.join(" ");
};
// "the cat was rat by the bat"
console.log(
  replaceWords(
    (dictionary = ["cat", "bat", "rat", "cat"]),
    (sentence = "the cattle was rattled by the battery")
  )
);
console.log(
  replaceWords(
    (dictionary = ["catt", "cat", "bat", "rat"]),
    (sentence = "the cattle was rattled by the battery")
  )
);
// todo 方法二：字典树
