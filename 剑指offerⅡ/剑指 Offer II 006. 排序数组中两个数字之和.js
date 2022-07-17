//https://leetcode.cn/problems/kLl5u1/
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// 因为 已按照 升序排列
// 所以直接双指针解决就可以
var twoSum = function (numbers, target) {
  let left = 0,
    right = numbers.length - 1;
  while (left < right) {
    if (numbers[right] + numbers[left] === target) {
      return [left, right];
    } else if (numbers[right] + numbers[left] > target) {
      right--;
    } else {
      left++;
    }
  }
  return [];
};

// 1,3
console.log(twoSum((numbers = [1, 2, 4, 6, 10]), (target = 8)));
