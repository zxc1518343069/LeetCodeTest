// https://leetcode.cn/problems/XagZNi/
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
// 思路 用碰撞条件作为参考
// 1. 首先想到栈  正数都存到在里面
// 2. 然后 遇到负数 就判断 栈内元素绝对值 是否大于负数  若大于 则 不用继续(变量控制)。
// 若小于则继续 直到栈内没有数据
var asteroidCollision = function (asteroids) {
  const stack = [];
  for (const aster of asteroids) {
    let alive = true;
    while (
      alive &&
      aster < 0 &&
      stack.length > 0 &&
      stack[stack.length - 1] > 0
    ) {
      alive = stack[stack.length - 1] < -aster; // aster 是否存在
      if (stack[stack.length - 1] <= -aster) {
        // 栈顶小行星爆炸
        stack.pop();
      }
    }
    if (alive) {
      stack.push(aster);
    }
  }

  return stack;
};
console.log(asteroidCollision([5, 10, -5]));
console.log(asteroidCollision([8, -8]));
console.log(asteroidCollision([10, 2, -5]));
console.log(asteroidCollision([-2, -1, 1, 2]));
