function countNums(){
    let nums = 0;
    return function(){
        nums++;
        return nums;
    };
}
let value1 = countNums();
let value2 = countNums();
console.log(value1());
console.log(value2());
console.log(value1());
console.log(value2());
console.log(value1());
console.log(value2());
console.log(value1());
console.log(value2());

function makeAdder(x) {
    return function(y) {
      return x + y;
    };
  }
  
  var add5 = makeAdder(5);
  var add10 = makeAdder(10);
  
  console.log(add5(2));  // 7
  console.log(add10(2)); // 12