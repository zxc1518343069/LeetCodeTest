// https://leetcode-cn.com/problems/group-anagrams/
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
let groupAnagrams = function(strs) {
  let obj = {}
  for (const str of strs) {
    let tmp = Array.from(str).sort().join('')
    obj[tmp]?obj[tmp].push(str):obj[tmp] = [str]
  }
  return Object.values(obj)
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))

//[
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
