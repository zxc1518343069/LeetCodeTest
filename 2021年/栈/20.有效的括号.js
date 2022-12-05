// https://leetcode-cn.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = function(s) {
  if (s.length % 2 === 1) return false
  let map = new Map()
  map.set('(', ')')
  map.set('[', ']')
  map.set('{', '}')
  let len = s.length
  let stack = []
  for (let i = 0; i < len; i++) {
    let c = s[i]
    if (map.has(c)) {
      stack.push(c)
    } else {
      let topValue = stack[stack.length - 1]
      if (map.get(topValue) === c) {
        stack.pop()
      } else {
        return false
      }
    }
  }
  return stack.length === 0
};

isValid = (s) => {
  if (s.length % 2 === 1) return false //奇数直接return
  const map = new Map()
  map.set('{', '}')
  map.set('[', ']')
  map.set('(', ')')
  const len = s.length
  const stack = [] // 只存储左括号
  for (let i = 0; i < len; i++) {
    if (map.has(s[i])) {
      stack.push(s[i]) // 放入 左括号
    } else { // 是右括号
      const top = stack[stack.length - 1]
      if (map.get(top) === s[i]) {// 判断是否匹配
        stack.pop()
      } else {
        return false
      }
    }
  }

  return stack.length === 0 // 有值则证明 不完全匹配

}
console.log(isValid('()[]{}'))
console.log(isValid('(]'))
