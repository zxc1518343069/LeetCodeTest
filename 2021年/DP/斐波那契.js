let arrT = (n) => {
  let arr = new Array(n + 1).fill(0)
  arr[0] = 1
  arr[1] = 1
  for (let i = 2; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2]
  }
  return arr[n-1]
}
let arr = new Array(10).fill(0)
let arrT2 = (n) => {
  if (n <=1)
    return n
  if (arr[n] === 0){
    arr[n] = arrT2(n-1) + arrT2(n-2)
  }
  return arr[n]
}


//  1  1  2  3  5  8  13 .....
console.log(arrT2(3))
