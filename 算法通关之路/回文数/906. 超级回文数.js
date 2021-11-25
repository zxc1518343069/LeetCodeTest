// https://leetcode-cn.com/problems/super-palindromes/
/**
 * @param {string} left
 * @param {string} right
 * @return {number}
 */

// 暴力  问题的核心 在于 构造一个回文数
var superpalindromesInRange = function(left, right) {
  let res = 0
  const Palindrome = (s) => {
    let left = 0, right = s.length - 1
    while (left < right) {
      if (s[left] !== s[right]) {
        return false
      }
      left++
      right--
    }
    return true
  }
  for (let i = Math.floor(parseInt(left) ** 0.5); i < Math.ceil(parseInt(right) ** 0.5); i++) {
    if (Palindrome(BigInt(i).toString()) && Palindrome((BigInt(i) ** BigInt(2)).toString())) {
      res++
    }
  }
  return res
};

// console.log(superpalindromesInRange('4', '1000'))
// console.log(superpalindromesInRange('1', '2'))
console.log(superpalindromesInRange('40000000000000000', '50000000000000000'))
