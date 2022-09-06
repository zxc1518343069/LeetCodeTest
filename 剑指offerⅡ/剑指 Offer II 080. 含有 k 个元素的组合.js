// https://leetcode.cn/problems/uUsW3B/
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
// dfs 回溯 好久没写了 感觉生疏了
var combine = function (n, k) {
  const res = [];
  const dfs = (arr, deep) => {
    // 结束条件
    if (arr.length === k) {
      return res.push([...arr]);
    }
    if (n <= deep) return;

    arr.push(deep + 1);
    dfs(arr, deep + 1);
    arr.pop();
    dfs(arr, deep + 1);
  };
  dfs([], 0);
  return res;
};
console.log(combine(4, 2));
