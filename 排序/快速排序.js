let swap = (arr, i, j) => {
  // if (i !== j) {
  //   arr[i] = arr[i] ^ arr[j]
  //   arr[j] = arr[i] ^ arr[j]
  //   arr[i] = arr[i] ^ arr[j]
  // }
  let tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp

}

let quickSort = (nums) => {

  let process = (left, right) => {
    if (left < right) {
      /*交换 比较值*/
      swap(nums, left + Math.floor(Math.random() * (right - left + 1)), right)
      let arr = partition(left, right)
      process(left, arr[0] - 1)
      process(arr[1] + 1, right)
    }
  }

  let partition = (left, right) => {
    let less = left - 1,
        more = right
    while (left < more) {
      if (nums[left] < nums[right]) {// 当前数 < 划分值
        swap(nums, ++less, left++)
      } else if (nums[left] > nums[right]) {// 当前数 > 划分值
        swap(nums, --more, left)
      } else {
        left++
      }
    }
    swap(nums, more, right)
    return [less + 1, more]
  }

  process(0, nums.length - 1)
  return nums
}
// console.log(quickSort([3, 5, 4, 2, 1, 7, 8, 6, 3]))
console.log(quickSort([3,2,1]))


