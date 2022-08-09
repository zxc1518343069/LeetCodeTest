// https://leetcode.cn/problems/sfvd7V/
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map();
  for (let a of strs) {
    // 将字符串辩成数组排序再转换成 字符串
    let arr = Array.from(a);
    arr.sort();
    let sortedStr = arr.join("");

    // 这样的话就可以判断是否存在了
    if (map.has(sortedStr)) {
      map.get(sortedStr).push(a);
    } else {
      map.set(sortedStr, [a]);
    }
  }
  let result = [];
  for (let a of map.values()) {
    result.push(a);
  }
  return result;
};
