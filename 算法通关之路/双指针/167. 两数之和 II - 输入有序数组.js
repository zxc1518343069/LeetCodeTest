// https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/


/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let left = 0, right = numbers.length - 1
  while (left < right) {
    if (numbers[right] + numbers[left] === target) {
      return [left + 1, right + 1]
    } else if (numbers[right] + numbers[left] > target) {
      right--
    } else {
      left++
    }
  }
  return []
};

console.log(twoSum(numbers = [2, 7, 11, 15], target = 9))
console.log(twoSum(numbers = [2, 3, 4], target = 6))
console.log(twoSum(numbers = [-1, 0], target = -1))

