// https://leetcode-cn.com/problems/largest-number/
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  nums.sort((a, b) => { // 自定义排序规则   '9' > '30'
    if ('' + a + b > '' + b + a) {
      return -1
    } else if ('' + a + b < '' + b + a) {
      return 1
    } else {
      return 0
    }
  })

  return BigInt(nums.join('')).toString() // 处理0的问题 bigInt 防止数据过大
};

console.log(largestNumber([10, 2]))
console.log(largestNumber([3, 30, 34, 5, 9]))
