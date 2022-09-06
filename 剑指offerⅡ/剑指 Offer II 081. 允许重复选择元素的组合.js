// https://leetcode.cn/problems/Ygoe9J/
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let res = [],
    tmp = [], // 用于存放数据
    len = candidates.length;

  const dfs = (sum) => {
    // 结束条件
    if (sum > target) {
      return;
    }
    if (sum === target) {
      res.push([...tmp]);
    }
    //
    for (let i = 0; i < len; i++) {
      const number = candidates[i];
      // 去重 [ [ 2, 2, 3 ], [ 2, 3, 2 ], [ 3, 2, 2 ], [ 7 ] ]
      // 把 类似 232 322去掉
      if (tmp.length === 0 || number >= tmp[tmp.length - 1]) {
        tmp.push(number);
        dfs(sum + number);
        tmp.pop(number);
      }
    }
  };

  dfs(0);
  return res;
};
console.log(combinationSum([2, 3, 6, 7], 7));
