// https://leetcode-cn.com/problems/climbing-stairs/


/*
* 实际意义上就是个斐波那契额
* 走上3楼  只能走2楼  一楼走上去
*
* */

let climbStairs = function(n) {
  if (n <= 2)
    return n
  let one = 1
  let two = 2
  let tmp

  for (let i = 3; i <= n; i++) {
    tmp = one + two
    one = two
    two = tmp
  }
  return tmp
};

console.log(climbStairs(10))
