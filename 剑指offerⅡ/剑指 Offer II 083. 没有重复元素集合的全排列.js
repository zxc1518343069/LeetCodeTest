// https://leetcode.cn/problems/VvJkup/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 老题目了 把去重做好就行
var permute = function (nums) {
  let res = [];
  let used = {};

  let dfs = (path) => {
    if (path.length === nums.length) {
      return res.push([...path]);
    }
    for (const num of nums) {
      if (used[num]) continue; // 用于去重
      used[num] = true;
      path.push(num);
      dfs(path);
      path.pop();
      used[num] = false;
    }
  };
  dfs([]);
  return res;
};
console.log(permute([1, 2, 3]));
