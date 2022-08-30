// https://leetcode.cn/problems/nZZqjQ/
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  // 由题可知 最小食用为1 因为肯定要吃 最大食用速度 =  max(piles)  求最小速度
  // 重要条件 将吃掉这堆的所有香蕉，然后这一小时内不会再吃更多的香蕉
  let l = 1,
    r = Math.max(...piles);
  const len = piles.length;
  // 这里就变成了 我们在 1- r 之间找一个值一定能满足吃完香蕉

  const canEat = (eatSpeed) => {
    let count = 0;
    for (let i = 0; i < len; i++) {
      if (eatSpeed >= piles[i]) {
        count++;
      } else {
        count += Math.ceil(piles[i] / eatSpeed); // 记录吃几次能吃完
      }
    }
    return count <= h;
  };

  // > >= 的条件在于这个区间内是否存在 答案。是则小于 否则 >=
  while (l < r) {
    const mid = l + ((r - l) >> 1);
    if (canEat(mid)) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }
  return l;
};
// console.log(minEatingSpeed((piles = [3, 6, 7, 11]), (h = 8)));
console.log(minEatingSpeed((piles = [30, 11, 23, 4, 20]), 5));
// console.log(minEatingSpeed((piles = [30, 11, 23, 4, 20]), 6));
