// https://leetcode-cn.com/problems/powx-n/

/* 暴力 */
//
// let myPow = function(x, n) {
//   if( n === 0){
//     return 1;
//   }
//   x = parseFloat(x);
//   if(n < 0){
//     x = parseFloat(1/x);
//     n = -n;
//   }
//   let tmp = x;
//   while(n > 1){
//     x *= tmp;
//     n--;
//   }
//   return x;
// };

// console.log(myPow(2.000,10))


/* 分治 + 位运算*/
/* 思路   2^10 = 2^5 * 2^5 = 2^2*2^2*2  * 2^2*2^2*2  */

let myPow = function(x, n) {
  x = parseFloat(x);
  if(n < 0){
    x = parseFloat(1/x);
    n = -n;
  }
  let divide = (n)=>{
    if (n===0)
      return 1
    if (n===1)
      return x
    let tmp = divide(n/2)
    if (n & 1 === 1)
      return tmp * tmp * x
    else
      return tmp * tmp
  }
  return divide(n).toFixed(5);
};
console.log(myPow(2.10, 3))
console.log(myPow(2.00, -2))

