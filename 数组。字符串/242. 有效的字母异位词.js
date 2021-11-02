// https://leetcode-cn.com/problems/valid-anagram/

// 第一种
/* 排序后对比 */
// let isAnagram = function(s, t) {
//   if (s.length!==t.length)
//     return false
//   if (s===t)
//     return true
//   s = [...s]
//   t = [...t]
//   return s.sort().toString() === t.sort().toString()
// };
// console.log(isAnagram(s = "anagram", t = "nagaram"))
// console.log(isAnagram(s = "rat", t = "car"))

let isAnagram2 = function(s, t) {
  if (s.length!==t.length)
    return false
  if (s===t)
    return true
  let hash = Array(26).fill(0)
  let codeA = "a".charCodeAt(0)
  let length = s.length
  for(let i = 0; i < length; i++) {
    hash[s.charCodeAt(i) - codeA]++
    hash[t.charCodeAt(i) - codeA]--
  }
  for(let value of hash) {
    if(value !== 0) {
      return false
    }
  }
  return true
};
console.log(isAnagram2(s = "anagram", t = "nagaram"))
// console.log(isAnagram2(s = "rat", t = "car"))
