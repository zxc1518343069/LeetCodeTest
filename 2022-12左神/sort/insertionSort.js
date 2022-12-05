/* 插入排序 */
// 图示参考 https://www.hello-algo.com/chapter_sorting/insertion_sort/#_2
function insertionSort(nums) {
  // 外循环：base = nums[1], nums[2], ..., nums[n-1]
  if (!nums || !nums.length) {
    return [];
  }
  if (nums.length < 2) {
    return nums;
  }
  const len = nums.length;
  for (let i = 1; i < len; i++) {
    let base = nums[i], // 基准数
      j = i - 1; // 起始判断数的下表

    // 内循环：将 base 插入到左边的正确位置
    while (j >= 0 && nums[j] > base) {
      nums[j + 1] = nums[j]; // 当前数比base大时,将 nums[j] 向右移动一位,这时候还没插入。只是确定坐标
      j--;
    }
    nums[j + 1] = base; // 2. 将 base 赋值到正确位置 开始插入
  }
  return nums;
}
