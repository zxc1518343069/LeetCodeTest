/// https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/

/**
 * @param {string} s
 * @return {string}
 */
/* 正则表达式方法*/
const replaceSpace = function(s) {
  return s.replace(/ /g, '%20');
};

/* 遍历方法*/
const replaceSpace2 = function(s) {
  let res = ''
  for (const sElement of s) {
    if (sElement === ' ') {
      res += '%20'
      continue
    }
    res += sElement
  }
  return res
};

console.log(replaceSpace2('We are happy.'))
console.log(replaceSpace('We are happy.'))
