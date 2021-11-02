let swap = (arr, i, j) => {
  arr[i] = arr[i] ^ arr[j]
  arr[j] = arr[i] ^ arr[j]
  arr[i] = arr[i] ^ arr[j]
}
/*
* 时间复杂度   O(N^2)  额外空间复杂度  O(1)
* */
let insertSort = (nums) => {
  if (!nums || nums.length < 2)
    return nums
  let len = nums.length

  // 0-0 有序
  // 0-i  想有序
  for (let i = 1; i < len; i++) {
    for (let j = i - 1; j >= 0 && nums[j] > nums[j + 1]; j--) {
      [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
      // swap(nums,j,j+1)

    }
  }
  console.log(nums)
}

console.log(insertSort([3, 5, 4, 2, 1, 7, 8, 6, 3]))
