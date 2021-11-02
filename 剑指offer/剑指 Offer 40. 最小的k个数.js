// https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */

// 直接排序
const getLeastNumbers = function(arr, k) {
  return arr.sort((a, b) => a - b).slice(0, k);
};

// 堆
const getLeastNumbers2 = function(arr, k) {
  return arr.sort((a, b) => a - b).slice(0, k);
};


console.log(getLeastNumbers(arr = [3, 2, 1], k = 2))
