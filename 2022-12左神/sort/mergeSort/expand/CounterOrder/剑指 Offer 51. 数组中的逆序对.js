// https://leetcode.cn/problems/shu-zu-zhong-de-ni-xu-dui-lcof/

/**
 * @param {number[]} nums
 * @return {number}
 */
// 暴力 超时
var reversePairs = function (nums) {
  let res = 0;
  const length = nums.length;
  for (let leftIndex = 0; leftIndex < length; ++leftIndex) {
    for (let rightIndex = leftIndex + 1; rightIndex < length; ++rightIndex) {
      nums[leftIndex] > nums[rightIndex] && ++res;
    }
  }

  return res;
};
// 正确解法  归并排序
// Todo: 以后我一定好好学10大排序
/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {
  // 归并排序
  let resNumber = 0;
  mergeSort(nums);
  return resNumber;

  function mergeSort(nums) {
    if (nums.length < 2) return nums;
    const mid = parseInt(nums.length / 2);
    let left = nums.slice(0, mid);
    let right = nums.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
  }

  function merge(leftList, rightList) {
    let res = [];
    let leftLen = leftList.length;
    let rightLen = rightList.length;
    let len = leftLen + rightLen;

    for (let index = 0, leftIndex = 0, rightIndex = 0; index < len; index++) {
      // 证明左侧数组走完了
      if (leftIndex >= leftLen) res[index] = rightList[rightIndex++];
      // 证明右侧数组走完了
      else if (rightIndex >= rightLen) res[index] = leftList[leftIndex++];
      // 两侧数组都没走完。 开始比较
      else if (leftList[leftIndex] <= rightList[rightIndex])
        res[index] = leftList[leftIndex++];
      else {
        res[index] = rightList[rightIndex++];
        resNumber += leftLen - leftIndex; //在归并排序中唯一加的一行代码
      }
    }
    return res;
  }
};
console.log(reversePairs([7, 5, 6, 4]));
