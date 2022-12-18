/**
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const bucketSort = (nums) => {
  if (!nums || !nums.length) {
    return [];
  }
  if (nums.length < 2) {
    return nums;
  }

  const res = [];
  const max = Math.max(...nums);

  const arr = new Array(max + 1).fill(0);

  for (const num of nums) {
    arr[num]++;
  }

  const arrlen = arr.length;
  for (let i = 0; i < arrlen; i++) {
    let num = arr[i];
    if (num) {
      while (num--) res.push(i);
    }
  }

  return res;
};
console.log(bucketSort([1, 7, 3, 0, 6, 4, 7, 1, 8, 2]));
