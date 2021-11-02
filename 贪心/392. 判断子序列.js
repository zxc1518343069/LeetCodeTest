// https://leetcode-cn.com/problems/is-subsequence/
let isSubsequence = function(s, t) {
  if (s.length === 0) return true;
  let index = 0;
  let subIndex = 0;

  while (subIndex < t.length){
    if (s[index] === t[subIndex]){
      index++
      if (index > s.length -1 )
        return true
    }
    subIndex++
  }
  return false
};
console.log(isSubsequence("axc","ahbgdc"))
