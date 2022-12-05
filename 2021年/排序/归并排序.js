let mergeSort = function(nums) {

  let process = (left, right) => {
    if (left === right)
      return
    let mid = left + ((right - left) >> 1)
    process(left, mid)
    process(mid + 1, right)
    merge([], left, mid, right)
  }
  let merge = (arr, left, mid, right) => {
    let p = left
    let q = mid + 1
    while (p <= mid && q <= right)
      arr.push(nums[p] <= nums[q] ? nums[p++] : nums[q++])
    while (p <= mid)
      arr.push(nums[p++])
    while (q <= right)
      arr.push(nums[q++])
    for (let i = 0; i < arr.length; i++) {
      nums[left + i] = arr[i]
    }
  }

  process(0, nums.length - 1)
  return nums
}
console.log(mergeSort([3, 5, 4, 2, 1, 7, 8, 6, 3]))
