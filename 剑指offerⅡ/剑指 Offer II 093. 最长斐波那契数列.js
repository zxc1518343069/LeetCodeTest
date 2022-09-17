//https://leetcode.cn/problems/Q91FMA/
/**
 * @param {number[]} arr
 * @return {number}
 */
// 子序列满足 X_i + X_{i+1} = X_{i+2}
// 即 X[i] = x[j] + x[k] i > j > k 最小长度为3
// todo 我是废物 不会写
var lenLongestFibSubseq = function (arr) {
  const arrMap = new Map();
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    arrMap.set(arr[i], i);
  }
  const dp = new Array(n).fill(0).map(() => new Array(n).fill(0));
  let res = 0;

  return res;
};
console.log(lenLongestFibSubseq([1, 2, 3, 4, 5, 6, 7, 8]));
