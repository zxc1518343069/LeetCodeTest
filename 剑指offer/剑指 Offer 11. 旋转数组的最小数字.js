// https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/
/**
 * @param {number[]} numbers
 * @return {number}
 */
// [3,4,5,1,2]  1
//输入：[2,2,2,0,1]   输出：0
var minArray = function(numbers) {
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
