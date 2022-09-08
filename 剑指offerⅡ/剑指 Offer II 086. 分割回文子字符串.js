//https://leetcode.cn/problems/M99OJA/
/**
 * @param {string} s
 * @return {string[][]}
 */
// 记得传递 index 即可。注意 dfs 传递的i 不是index
var partition = function (s) {
  const sLen = s.length,
    res = [],
    charArr = [];

  const dfs = (index) => {
    //结束条件
    if (index === sLen) {
      return res.push([...charArr]);
    }
    let tmp = "";
    for (let i = index; i < sLen; i++) {
      tmp += s[i];
      //判断回文
      const isReturn = tmp.split("").reverse().join("") === tmp;
      if (!isReturn) {
        continue;
      }
      charArr.push(tmp);
      dfs(i + 1);
      charArr.pop();
    }
  };
  dfs(0);
  return res;
};
console.log(partition("google"));
