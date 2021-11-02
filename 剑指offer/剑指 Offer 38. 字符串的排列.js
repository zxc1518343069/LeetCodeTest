// https://leetcode-cn.com/problems/zi-fu-chuan-de-pai-lie-lcof/


/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function(s) {
  if (s.length === 1) return [...s]
  const res = new Set() // 为什么要set 防止重复
  const used = {}
  let dfs = (path) => {
    if (path.length === s.length) {
      return res.add(path.join(''))
    }
    for (let i = 0; i < s.length; i++) {
      if (used[i]) continue // 为什么拿下表   因为拿字母的话会导致 a a 这种没办法排序
      used[i] = true
      path.push(s[i])
      dfs(path)
      path.pop()
      used[i] = false
    }
  }
  dfs([])
  return Array.from(res)
};

console.log(permutation('aab'))
console.log(permutation('abc'))
