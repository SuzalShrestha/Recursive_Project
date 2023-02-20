/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

Examples:

range(1, 5); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []
***********************************************************************/


// your code here
let range=function(startNum,endNum){
  
if(startNum>endNum-1){
  return [];
}

  var countArray=range(startNum+1,endNum);
  countArray.unshift(startNum);
  return countArray;

}
console.log(range(2,6));
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = range;
} catch (e) {
  module.exports = null;
}
