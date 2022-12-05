let subSort = function(array) {
  if (array.length === 1)
    return [-1, -1];
  let array2 = [...array]
  array2.sort((a, b)=>a - b)
  let left = array.length
  let right = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array2[i]) {
      left = left < i ? left : i
      right = right > i ? right : i
    }
  }
  if (left === 0 && right === 0 || left > right) {
    return [-1, -1];
  }

  return [left, right]
};


let subSort2 = function(array) {
  let r=-1,l=-1;
  //正向遍历记录最右区间值
  let max = Number.MIN_SAFE_INTEGER;
  console.log(max)

  for(let i=0;i<array.length;i++){
    if(array[i]>=max){
      max = array[i];
    }else{
      r = i;
    }
  }
  //反向遍历记录最左区间值
  let min = Number.MAX_SAFE_INTEGER;
  for(let i=array.length-1;i>=0;i--){
    if(array[i]<=min){
      min = array[i]
    }else{
      l = i;
    }
  }
  return [l,r]
}
console.log(subSort([1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]))
