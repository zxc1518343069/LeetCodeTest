// https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array-ii/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(numbers) {
  let low = 0;
  let high = numbers.length - 1;
  while (low < high) {
    const middle = low + Math.floor((high - low) >> 1)
    if (numbers[middle] < numbers[high]) {
      high = middle
    } else if (numbers[middle] > numbers[high]) {
      low = middle + 1
    } else {
      high--
    }
  }
  return numbers[low]
};
