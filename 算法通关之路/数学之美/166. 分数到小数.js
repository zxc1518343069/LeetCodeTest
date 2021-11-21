/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
  if (!(numerator % denominator)) return `${ numerator / denominator }` // 特殊判断 整除直接返回

  // 是负数的话带上符号
  let res = ''
  if (numerator * denominator < 0) res += '-'
  // 处理正常部分
  numerator = Math.abs(numerator)
  denominator = Math.abs(denominator)
  res += `${ Math.floor(numerator / denominator) }.` // 只处理整数部分  注意这里带上了小数点

  // 处理小数部分
  const arr = [], map = new Map() // map 用来处理 循环小数部分
  let index = 0 // 处理小数用
  numerator %= denominator // 获取余数

  while (numerator && !map.has(numerator)) { // 判断余数存在且 不是循环的条件下
    map.set(numerator, index++)
    numerator *= 10
    arr.push(Math.floor(numerator / denominator))
    numerator %= denominator
  }

  if (numerator) {// 如果存在  及 是因为存在的相同的小数出来的
    const startIndex = map.get(numerator)
    arr.splice(startIndex, 0, '(')
    arr.push(')')
  }

  return res + arr.join('')
};

console.log(fractionToDecimal(2, 1))
console.log(fractionToDecimal(1, 2))
console.log(fractionToDecimal(2, 3))
console.log(fractionToDecimal(4, 333))
console.log(fractionToDecimal(1, 5))

