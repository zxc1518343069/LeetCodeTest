// https://leetcode.cn/problems/4sjJUc/
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// 跟昨天差不多 一眼题目。加一个deep 即可
var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  let res = [],
    tmp = [], // 用于存放数据
    len = candidates.length;
  const dfs = (sum, deep) => {
    // 结束条件
    if (sum === target) return res.push([...tmp]);
    if (sum > target) return;

    for (let i = deep; i < len; i++) {
      if (candidates[i] > target) return;
      if (i > deep && candidates[i] === candidates[i - 1]) {
        // i >deep 保证能被添加一次
        // candidates[i] === candidates[i - 1] 去重作用
        continue;
      }
      tmp.push(candidates[i]);
      dfs(sum + candidates[i], i + 1);
      tmp.pop();
    }
  };
  dfs(0, 0);
  return res;
};
console.log(combinationSum2([2, 5, 2, 1, 2], 5)); //[ [ 1, 2, 2 ], [ 5 ] ]
