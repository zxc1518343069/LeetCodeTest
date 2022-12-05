/**
 *
 * @param {number[]} nums
 */
// 选择排序
function selectSort(nums) {
  if (!nums || !nums.length) {
    return [];
  }
  if (nums.length < 2) {
    return nums;
  }
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    let minIndex = i;
    // 找到最小的数字下标
    for (let j = i + 1; j < len; j++) {
      if (nums[minIndex] > nums[j]) {
        minIndex = j;
      }
    }
    // 交换位置
    [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
  }
  return nums;
}

console.log(selectSort([1, 7, 3, 0, 6, 4, 7, 1, 8, 2]));
