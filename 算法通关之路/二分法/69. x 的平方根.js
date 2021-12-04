// https://leetcode-cn.com/problems/sqrtx/


/* 库函数 */
let mySqrt = function(x) {
  return parseInt(Math.sqrt(x));
};

/* 二分 */
let mySqrt2 = function(x) {

  if (x === 0 || x === 1) return x
  let left = 1
  let right = x
  while (left <= right) {
    let mid = left + ((right - left) >> 1)
    console.log(mid)
    if (mid * mid === x)
      return mid
    else if (mid * mid > x)
      right = mid - 1
    else
      left = mid + 1
  }
  return right
};


/* 牛顿迭代法  x= (x+tmp/x)/2  */
let mySqrt3 = function(x) {
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


// console.log(mySqrt2(4))
console.log(mySqrt2(8))
