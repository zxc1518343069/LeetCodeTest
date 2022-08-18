// https://leetcode.cn/problems/jBjn9C/
/**
 * @param {number} k
 * @param {number[]} nums
 */
// 上来给我怼一个手写堆？ 题目翻译错了
// 返回倒数第K 个大小的
// 思路 肯定是排序 然后 因为不断里面add  保证内部有序 返回 num.length - k 即可
var KthLargest = function (k, nums) {
  this.nums = nums;
  this.k = k;
  this.nums.sort((a, b) => a - b);
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  this.nums.splice(this.findIndex(val), 0, val);
  return this.nums[this.nums.length - this.k];
};

KthLargest.prototype.findIndex = function (val) {
  let left = 0,
    right = this.nums.length - 1,
    index = n;

  while (left <= right) {
    let mid = ((right - left) >> 1) + left;
    if (val < this.nums[mid]) {
      index = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return index;
};
