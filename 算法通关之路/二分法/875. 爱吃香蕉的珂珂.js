/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */

// 由题目可知 每小时最多吃 一堆香蕉  所以 K max =  Max(piles)
var minEatingSpeed = function(piles, h) {
  let l = 1, right = Math.max(...piles)


  const canEat = (mid) => {
    let count = 0 // 记录吃的次数

    for (const pile of piles) {
      if (pile <= mid) {
        count++
      } else {
        count += Math.ceil(pile / mid) // 记录吃几次能吃完
      }
    }
    return count <= h
  }

  while (l < right) {
    const mid = Math.floor(l + (right - l) / 2)
    if (canEat(mid)) {
      right = mid
    } else {
      l = mid + 1
    }
  }

  return l
};

console.log(minEatingSpeed(piles = [3, 6, 7, 11], h = 8))
console.log(minEatingSpeed(piles =  [30,11,23,4,20],  5))
console.log(minEatingSpeed(piles =  [30,11,23,4,20],  6))
