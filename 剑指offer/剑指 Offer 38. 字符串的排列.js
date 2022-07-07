// https://leetcode-cn.com/problems/zi-fu-chuan-de-pai-lie-lcof/

/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {
  if (s.length === 1) return [...s];
  const res = new Set(); // 为什么要set 防止重复
  const used = {};
  let dfs = (path) => {
    if (path.length === s.length) {
      return res.add(path.join(""));
    }
    for (let i = 0; i < s.length; i++) {
      if (used[i]) continue; // 为什么拿下表   因为拿字母的话会导致 a a 这种没办法排序
      used[i] = true;
      path.push(s[i]);
      dfs(path);
      path.pop();
      used[i] = false;
    }
  };
  dfs([]);
  return Array.from(res);
};

permutation = function (s) {
  if (s.length === 1) return [...s];
  const res = new Set(); // 为什么要set 防止重复
  const used = {};
  const dfs = (arr) => {
    // 终止条件
    if (arr.length === s.length) {
      res.add(arr.join(""));
    }
    // 循环判断
    for (let i = 0; i < s.length; i++) {
      if (used[i]) {
        // 因为每次都是从0开始循环。所以要防止多次使用
        // 为什么不用 s[i] 因为 如果出现 aab 重复字母。将不会排序
        continue;
      }
      used[i] = true;
      arr.push(s[i]);
      dfs(arr);
      arr.pop();
      used[i] = false;
    }
  };
  dfs([]);
  return Array.from(res);
};

console.log(permutation("aab"));
console.log(permutation("abc"));
