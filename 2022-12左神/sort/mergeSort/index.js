// 归并排序

/**
 *
 * @param {number[]} params
 */
function mergeSort(nums) {
  if (!nums || !nums.length) {
    return [];
  }
  if (nums.length < 2) {
    return nums;
  }
  /**
   * 整合数据，使数据有序
   * @param {number} leftIndex
   * @param {number} midIndex
   * @param {number} rightIndex
   */
  const merge = (leftIndex, midIndex, rightIndex) => {
    const res = [];
    let l = leftIndex,
      r = midIndex + 1;
    while (l <= midIndex && r <= rightIndex) {
      if (nums[l] <= nums[r]) {
        res.push(nums[l++]);
      } else {
        res.push(nums[r++]);
      }
    }
    while (l <= midIndex) {
      res.push(nums[l++]);
    }
    while (r <= rightIndex) {
      res.push(nums[r++]);
    }

    // 填充到原来的数组
    for (let i = 0; i < res.length; i++) {
      nums[leftIndex + i] = res[i];
    }

    return res;
  };

  /**
   * 数组分区
   * @param {number} leftIndex
   * @param {number} rightIndex
   */
  const process = (leftIndex, rightIndex) => {
    if (leftIndex === rightIndex) {
      return;
    }
    const mid = leftIndex + ((rightIndex - leftIndex) >> 1);

    process(leftIndex, mid);
    process(mid + 1, rightIndex);
    return merge(leftIndex, mid, rightIndex);
  };

  return process(0, nums.length - 1);
}

console.log(
  mergeSort([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48])
);

console.log(mergeSort([38, 27, 433, 9, 82, 10]));
