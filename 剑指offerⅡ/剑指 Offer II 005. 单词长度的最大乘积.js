// https://leetcode.cn/problems/aseY1I/
/**
 * @param {string[]} words
 * @return {number}
 */
// 看解析没有写map 的 就自己做下。我知道为啥了 3层for 挂不得没人
// map写起来好麻烦。 换字符串把
function isSame(str1, str2) {
  for (let i = 0; i < str1.length; i++) {
    if (str2.includes(str1[i])) return true;
  }
}

var maxProduct = function (words) {
  let res = 0;
  // 两层循环，两两比较
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      // 符合条件的话，就进行计算，然后和res比较大小
      if (isSame(words[i], words[j]) !== true) {
        const _res = words[i].length * words[j].length;
        if (_res > res) res = _res;
      }
    }
  }
  return res;
};

console.log(maxProduct(["abcw", "baz", "foo", "bar", "fxyz", "abcdef"]));
