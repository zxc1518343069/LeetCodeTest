// https://leetcode-cn.com/problems/shu-ju-liu-zhong-de-zhong-wei-shu-lcof/

/*
第一种 直接排序
 */
var MedianFinder = function() {
  this.data = []
};
/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
  this.data.push(num)
};
/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
  const len = this.data.length
  if (!len) return null
  this.data.sort((a, b) => a - b)
  const middle = (len - 1) >> 1
  if (len % 2)
    return this.data[middle]
  return (this.data[middle] + this.data[middle + 1]) / 2
};


/*
第二种   二分查找
 */
/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum2 = function(num) {
  const len = this.data.length
  if (!len) return this.data.push(num)
  let left = 0,
      right = len - 1
  while (left <= right) {
    // 为什么 left = right时候 还需要在执行一次
    // left = right 的时候  如果 rignt = len 而不是 -1 的话。
    // 二分查找  找到对应的位置放下就行
    const middle = left + ((right - left) >> 1)
    if (this.data[middle] === num) {
      return this.data.splice(middle, 0, num)
    } else if (this.data[middle] < num) {
      left = middle + 1
    } else {
      right = middle - 1
    }
  }
  this.data.splice(right + 1, 0, num);
};
/**
 * @return {number}
 */
MedianFinder.prototype.findMedian2 = function() {
  const len = this.data.length
  if (!len) return null
  const middle = (len - 1) >> 1
  if (len % 2)
    return this.data[middle]
  return (this.data[middle] + this.data[middle + 1]) / 2
};


/*
      堆排序
 */
