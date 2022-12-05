// https://leetcode-cn.com/problems/compare-version-numbers/

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  const s1 = version1.split('.')
  const s2 = version2.split('.')
  const len = Math.max(s1.length,s2.length)

  for (let i = 0; i < len; i++) {
    if (!s1[i] || !s2[i]) s1[i]?s2[i] ='0':s1[i] ='0'
    if (Number(s1[i]) !== Number(s2[i])) return Number(s1[i]) > Number(s2[i])?1:-1
  }

  return 0
};
// 0
console.log(compareVersion(version1 = "1.01", version2 = "1.001"))
// 0
console.log(compareVersion(version1 = "1.0", version2 = "1.0.0"))
// -1
console.log(compareVersion(version1 = "0.1", version2 = "1.1"))
//1
console.log(compareVersion(version1 = "1.0.1", version2 = "1"))
// -1
console.log(compareVersion(version1 = "7.5.2.4", version2 = "7.5.3"))
