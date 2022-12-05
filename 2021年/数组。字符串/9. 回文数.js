/**
 * @param {number} x
 * @return {boolean}
 */
/*
api版本
 */
let isPalindrome = function(x) {
  return x.toString() == x.toString().split('').reverse().join('');
};

// 字符串版本
isPalindrome = function(x) {
  if (x < 0) return false
  const s = x.toString()
  const len = s.length
  for (let i = 0; i < len / 2; i++) {
    if (s[i] !== s[len - i - 1]) return false
  }
  return true
};

console.log(isPalindrome(123))

// 数字版本
isPalindrome = function(x) {
  if (x < 0) return false
  let reservesNumber = 0
  let num = x
  while (num !== 0) {
    reservesNumber = reservesNumber * 10 + num % 10
    num = parseInt((num / 10).toString())
  }
  return reservesNumber === x
};
console.log(isPalindrome(8))

