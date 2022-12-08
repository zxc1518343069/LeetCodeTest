/**
 * 给定一个数组arr, 和一个数num, 请把小于等于num的数放在数组的左边, 大于num的
数放在数组的右边。要求额外空间复杂度0(1),时间复杂度0()
 */
/**
 *
 * @param {number[]} nums
 * @param {number} target
 */
function sortByNum(nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    if (nums[left] <= target) {
      left++;
    } else {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      right--;
    }
  }

  return nums;
}
console.log(sortByNum([2, 0, 2, 1, 1, 0], 1));
console.log(sortByNum([1, 3, 4, 2, 5], 2));
