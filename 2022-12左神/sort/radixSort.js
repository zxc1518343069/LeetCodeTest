/**
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const radixSort = (nums) => {
  if (!nums || !nums.length) {
    return [];
  }
  if (nums.length < 2) {
    return nums;
  }

  const res = [];
  const max = Math.max(...nums);
  // 保证返回的都是一个全新的数组 而不是同一个地址的数组
  const buckets = Array.from({ length: 10 }, () => []);

  let digit = 1; // 位数
  while (digit < max) {
    nums.forEach((num) => {
      const digitNumber = Math.floor((num % (digit * 10)) / digit);
      buckets[digitNumber].push(num);
    });

    let tmp = 0;
    buckets.forEach((item) => {
      while (item.length) {
        res[tmp++] = item.shift();
      }
    });

    digit *= 10;
  }

  return res;
};
console.log(radixSort([1, 7, 3, 0, 6, 4, 7, 1, 8, 2]));
