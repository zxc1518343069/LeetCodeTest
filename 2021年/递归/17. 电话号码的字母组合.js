// https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
let letterCombinations = function(digits) {
  if (!digits)
    return []
  let map = new Map()
  let res = []
  map.set('2', 'abc')
  map.set('3', 'def')
  map.set('4', 'ghi')
  map.set('5', 'jkl')
  map.set('6', 'mno')
  map.set('7', 'pqrs')
  map.set('8', 'tuv')
  map.set('9', 'wxyz')

  let dfs = (num, s) => {
    if (num === digits.length)
      return res.push(s)
    let letter = map.get(digits[num])
    for (let i = 0; i < letter.length; i++) {
      dfs(num + 1, s + letter[i])
    }
  }
  dfs(0, '')
  return res
};

letterCombinations = (digits) => {
  if (!digits)
    return []
  let map = new Map()
  let res = []
  map.set('2', 'abc')
  map.set('3', 'def')
  map.set('4', 'ghi')
  map.set('5', 'jkl')
  map.set('6', 'mno')
  map.set('7', 'pqrs')
  map.set('8', 'tuv')
  map.set('9', 'wxyz')


  let dfs = (deep, s) => {
    // 结束条件
    if (deep === digits.length) return res.push(s)
    // 递归循环条件
    const str = map.get(digits[deep])
    for (let i = 0; i < str.length; i++) {
      dfs(deep + 1, s + str[i])
    }
  }
  dfs(0, '')
  return res
}
console.log(letterCombinations('23'))
