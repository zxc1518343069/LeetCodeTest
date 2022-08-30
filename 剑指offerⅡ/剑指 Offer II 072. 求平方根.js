// https://leetcode.cn/problems/jJ0w9p/
/**
 * @param {number} x
 * @return {number}
 */

/* 库函数 */
let mySqrt = function (x) {
  return parseInt(Math.sqrt(x));
};
/* 二分 思路很简单 取1-x的值 平方判断*/
let mySqrt2 = function (x) {
  if (x === 0 || x === 1) return x;
  let left = 1;
  let right = x;
  while (left <= right) {
    let mid = left + ((right - left) >> 1);
    if (mid * mid === x) return mid;
    else if (mid * mid > x) right = mid - 1;
    else left = mid + 1;
  }
  return right;
};
/* todo：这个估计谁一时间也想不起来 牛顿迭代法  x= (x+tmp/x)/2  */
let mySqrt3 = function (x) {
  if (x === 0 || x === 1) {
    return x;
  }
  let tmp = x;

  function sqrt(x) {
    let sqrtx = (x + tmp / x) / 2;
    if (sqrtx === x) {
      return parseInt(x);
    } else {
      return sqrt(sqrtx);
    }
  }

  return sqrt(x);
};
