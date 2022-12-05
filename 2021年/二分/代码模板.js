x = 10 // 输入的值

function Twopoints(){
  let left = 0
  let right = x
  while (left <= right) {
    let mid = left + ((right - left) >> 1)
    if (mid * mid > x)
      right -= 1
    else
      left += 1
  }
  return right
}

