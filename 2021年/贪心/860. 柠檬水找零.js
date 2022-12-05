// https://leetcode-cn.com/problems/lemonade-change/


/* 贪心*/
let lemonadeChange = function(bills) {
  if(bills.length && bills[0]>5)
    return false
  let five = 0, ten = 0, len = bills.length;
  for (let i = 0; i < len; i++) {
    if(bills[i] === 5) {
      five++;
    } else if(bills[i] === 10) {
      if(five === 0) {
        return false;
      };
      five--;
      ten++;
    } else if(bills[i] === 20) {
      if(ten >0 && five > 0) {
        ten--;
        five--;
      } else if(five >= 3) {
        five -= 3;
      } else {
        return false;
      }
    }
  }
  return true;
};

// true
console.log(lemonadeChange([5,5,5,10,20]))
