// https://leetcode.cn/problems/WGki4K/
/**
 * @param {number[]} nums
 * @return {number}
 */
// 看完光想着位运算了。都往了hashMap了

var singleNumber = function (nums) {
  const freq = new Map();
  for (const num of nums) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }
  let ans = 0;
  for (const [num, occ] of freq.entries()) {
    if (occ === 1) {
      ans = num;
      break;
    }
  }
  return ans;
};
// 其他的我不会。。。
