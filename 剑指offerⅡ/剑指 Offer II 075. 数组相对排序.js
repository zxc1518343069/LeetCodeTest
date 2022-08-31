// https://leetcode.cn/problems/0H97ZC/
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
// arr2 元素不相同
// arr2 均在 arr1 中
// 思路很简单 收集  排序
var relativeSortArray = function (arr1, arr2) {
  const ArrMap = new Map();
  const res = [],
    arr1Len = arr1.length,
    arr2Len = arr2.length;

  for (let i = 0; i < arr1Len; i++) {
    const count = ArrMap.get(arr1[i]);
    ArrMap.set(arr1[i], count ? count + 1 : 1);
  }

  for (let i = 0; i < arr2Len; i++) {
    const num = arr2[i];
    let count = ArrMap.get(num);
    while (count) {
      res.push(num);
      count--;
    }
    ArrMap.delete(num);
  }
  const SurplusKey = Array.from(ArrMap.keys()).sort((a, b) => a - b);
  const SurplusKeyLen = SurplusKey.length;
  for (let i = 0; i < SurplusKeyLen; i++) {
    const key = SurplusKey[i];
    let count = ArrMap.get(key);
    while (count) {
      res.push(key);
      count--;
    }
  }
  return res;
};

console.log(
  relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])
); // [2,2,2,1,4,3,3,9,6,7,19]

console.log(
  relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])
); //  [2,2,2,1,4,3,3,9,6,7,19]
