// https://leetcode-cn.com/problems/valid-palindrome-ii/
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  const len = s.length
  let left = 0, right = len - 1
  const isPalindrome = (l) => {

    let left = 0, right = len - 1
    while (left < right) {
      if (left === l) {
        left++
      } else if (right === l) {
        right--
      }

      if (s[left] !== s[right]) {
        return false
      }
      left++
      right--
    }
    return true
  }

  while (left < right) {


    if (s[left] !== s[right]) {
      return isPalindrome(left) || isPalindrome(right)
    }
    left++
    right--
  }

  return true
};

console.log(validPalindrome('aba'))
console.log(validPalindrome('abca'))
