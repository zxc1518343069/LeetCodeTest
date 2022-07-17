// https://leetcode.cn/problems/aseY1I/
/**
 * @param {string[]} words
 * @return {number}
 */
// 看解析没有写map 的 就自己做下。我知道为啥了 3层for 挂不得没人
// map写起来好麻烦。 换字符串把
// 原来是题目没读懂。吐了， map还是字符串慢啊
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

function setMap(str, map) {
  const strLen = str.length;
  for (let k = 0; k < strLen; k++) {
    const word = str[k];
    map.set(word, 1);
  }
  return true;
}

maxProduct = function (words) {
  let res = 0;
  const len = words.length,
    map = new Map();
  for (let i = 0; i < len; i++) {
    const str = words[i],
      strLen = str.length;
    for (let j = i + 1; j < len; j++) {
      const nextStr = words[j],
        nextStrLen = nextStr.length;
      let flag = false;

      if (!setMap(str, map)) {
        break;
      }

      for (let k = 0; k < nextStrLen; k++) {
        const element = nextStr[k];
        if (map.has(element)) {
          flag = true;
          break;
        }
      }
      if (!flag) {
        res = res > strLen * nextStrLen ? res : strLen * nextStrLen;
      }
      map.clear();
    }
  }
  return res;
};
console.log(maxProduct(["abcw", "baz", "foo", "bar", "fxyz", "abcdef"]));
console.log(maxProduct(["a", "ab", "abc", "d", "cd", "bcd", "abcd"]));
console.log(
  maxProduct([
    "eae",
    "ea",
    "aaf",
    "bda",
    "fcf",
    "dc",
    "ac",
    "ce",
    "cefde",
    "dabae",
  ])
);
