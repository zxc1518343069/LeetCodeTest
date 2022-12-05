/**
 *
 * @param {number[]} nums
 */
// 冒泡排序。。。 哎
function bubbleSort(nums) {
  if (!nums || !nums.length) {
    return [];
  }
  if (nums.length < 2) {
    return nums;
  }
  const len = nums.length;

  //  冒泡是通过依次遍历 依次交换位置 找到最大/最小的数放到 数组最后/最前
  // - 1 是因为 在第一次编译过程中。 最后一个数一定是最大的。所以没必要再遍历一次了
  for (let i = 0; i < len - 1; i++) {
    // - i  是因为 内层循环每遍历完成一次  倒数第 i 个值一定是第 i 大的 所以也不需要遍历了
    for (let j = 0; j < len - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
    console.log(i, nums);
  }
  return nums;
}
console.log(bubbleSort([1, 7, 3, 0, 6, 4, 7, 1, 8, 2]));
