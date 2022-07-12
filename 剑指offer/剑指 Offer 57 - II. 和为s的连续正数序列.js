// https://leetcode-cn.com/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof/

/**
 * @param {number} target
 * @return {number[][]}
 */
/*
Sn=n(a1+an)/2
2Sn = n (a1 + a1 + nd)
2Sn = 2a1N + n²d
 */
// 相当于维护了一个栈
var findContinuousSequence = function (target) {
  let max = (target >> 1) + 1,
    res = [],
    tmp = [],
    sum = 0;
  for (let i = 1; i <= max; i++) {
    sum += i;
    tmp.push(i);
    while (sum > target) sum -= tmp.shift();
    if (sum === target && tmp.length > 1) res.push([...tmp]);
  }
  return res;
};

console.log(findContinuousSequence(9));
