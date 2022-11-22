// https://leetcode-cn.com/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof/
/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
// 1 2 3 4 5 6 7 8  len = 8
// 1 2 4 5 6 7 8  n = 7  pos = 3 index = 2  i = 0
// 1 2 4 5 6 8  n = 6  pos = 7   index =    i = 1
// 1 2 4 5 6 8  n = 5  pos = 2
var lastRemaining = function (n, m) {
  // todo 真没理解
  let pos = 0;
  for (let i = 2; i <= n; i++) {
    pos = (pos + m) % i;
  }
  return pos;
};
