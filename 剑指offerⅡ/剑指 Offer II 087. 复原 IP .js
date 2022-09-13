// https://leetcode.cn/problems/0on3uN/
/**
 * @param {string} s
 * @return {string[]}
 */
// ip 每段最长只有四位 每个整数位于 0 到 255 之间组成，且不能含有前导 0
var restoreIpAddresses = function (s) {
  const res = [],
    sLen = s.length,
    tmp = [];

  const dfs = (step) => {
    if (tmp.length > 4) {
      // 解决超长 s
      return;
    }
    if (step === sLen && tmp.length === 4) {
      return res.push([...tmp]);
    }

    let cur = "";
    for (let i = step; i < Math.min(step + 3, sLen); i++) {
      cur += s[i];
      const number = +cur;
      if (number <= 255) {
        tmp.push(number);
        dfs(i + 1);
        tmp.pop();
        // 处理0 关键在这点 首位是0可以，但不能是01这类
        // 也会处理掉 首位是 0 后面五位满足要求的结果
        if (!number) {
          return;
        }
      }
    }
  };

  dfs(0);
  return res.map((item) => item.join("."));
};
// ["255.255.11.135","255.255.111.35"]
console.log(restoreIpAddresses("25525511135"));
// ["0.0.0.0"];
console.log(restoreIpAddresses("0000"));
// ["0.10.0.10","0.100.1.0"]
console.log(restoreIpAddresses("010010"));
console.log(
  restoreIpAddresses(
    "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
  )
);
