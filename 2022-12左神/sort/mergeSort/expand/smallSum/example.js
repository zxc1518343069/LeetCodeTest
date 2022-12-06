// 例题
/**
 * 在一个数组中，每一个数左边比当前数小的数累加起来，叫做这个数组的小和。求一个数组的小和。
 * 例子：[1,3,4,2,5]
 * 1左边比1小的数，没有；
 * 3左边比3小的数，1；
 * 4左边比4小的数，1、3；
 * 2左边比2小的数，1；
 * 5左边比5小的数，1、3、4、2;
 * 所以小和为1+1+3+1+1+3+4+2=16
 */

/**
 *
 * @param {number[]} nums
 * @return {number}
 */
function smallSum(nums) {
  if (!nums || !nums.length) {
    return [];
  }
  if (nums.length < 2) {
    return 0;
  }

  /**
   *
   * @param {number} leftIndex
   * @param {number} rightIndex
   */
  function process(leftIndex, rightIndex) {
    if (leftIndex === rightIndex) {
      return 0;
    }
    const mid = leftIndex + ((rightIndex - leftIndex) >> 1);

    return (
      process(leftIndex, mid) +
      process(mid + 1, rightIndex) +
      merge(leftIndex, midIndex, rightIndex)
    );
  }
  /**
   * @param {number} leftIndex
   * @param {number} midIndex
   * @param {number} rightIndex
   */
  function merge(leftIndex, midIndex, rightIndex) {
    let res = 0,
      l = leftIndex,
      r = midIndex + 1;
    const help = [];

    while (l <= midIndex && r <= rightIndex) {
      res += nums[l] < nums[r] ? (rightIndex - r + 1) * nums[l] : 0;
      if (nums[l] <= nums[r]) {
        help.push(nums[l++]);
      } else {
        help.push(nums[r++]);
      }
    }
    while (l <= midIndex) {
      help.push(nums[l++]);
    }
    while (r <= rightIndex) {
      help.push(nums[r++]);
    }

    // 填充到原来的数组
    for (let i = 0; i < help.length; i++) {
      nums[leftIndex + i] = help[i];
    }

    return res;
  }

  return process(0, nums.length - 1);
}

console.log(smallSum([1, 3, 4, 2, 5]));
