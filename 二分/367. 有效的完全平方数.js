
let isPerfectSquare = function(num) {
  let low = 0;
  let high = num;
  let tmpSquare = 0;
  while(low <= high){
    let mid = (low+high)>>1;
    tmpSquare = mid*mid;
    if(tmpSquare > num){
      high = mid -1;
    }else if(tmpSquare < num){
      low = mid + 1;
    }else{
      return true;
    }
  }
  return false;
};
console.log(isPerfectSquare(16))
console.log(isPerfectSquare(14))
