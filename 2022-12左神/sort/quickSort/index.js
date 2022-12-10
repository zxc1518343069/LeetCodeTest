/**
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const quickSort = (nums) => {
  if (!nums || !nums.length) {
    return [];
  }
  if (nums.length < 2) {
    return nums;
  }
  /**
   *
   * @param {number} left  处理数组的左边界
   * @param {number} right 处理数组的右边界
   */
  const process = (left, right) => {
    if (left >= right) return;

    // 在 left - right 区间随机取一个值。交换到 区间 尾部
    const random = Math.floor(Math.random() * (right - left + 1));
    const targetIndex = left + random;
    [nums[targetIndex], nums[right]] = [nums[right], nums[targetIndex]];
    // 开始获取 下一次递归区间
    const [l, r] = partition(left, right);

    process(left, l - 1);
    process(r + 1, right);
  };
  /**
   * 用来获取 左右边界数组内下一次处理边界
   * @param {number} left  处理数组的左边界
   * @param {number} right 处理数组的右边界
   * @return {number[]} 左右边界下标，左右边界下标之间值相等
   */
  const partition = (left, right) => {
    // 定义 左边界下标和 index
    let lessIndex = left,
      moreIndex = right,
      current = left;

    while (current < moreIndex) {
      // 当 下标走到 边界时。代表 在 left - right 数组中。 已经排序完成
      if (nums[current] < nums[right]) {
        [nums[lessIndex], nums[current]] = [nums[current], nums[lessIndex]];
        lessIndex++;
        current++;
      } else if (nums[current] > nums[right]) {
        moreIndex--;
        [nums[current], nums[moreIndex]] = [nums[moreIndex], nums[current]];
      } else {
        current++;
      }
    }
    // 把 target 值换到左边界的左边。
    [nums[moreIndex], nums[right]] = [nums[right], nums[moreIndex]];

    return [lessIndex, moreIndex];
  };

  process(0, nums.length - 1);
  return nums;
};
console.log(quickSort([3, 5, 4, 2, 1, 7, 8, 6, 3]));
// console.log(quickSort([1, 3, 5, 4, 3]));
