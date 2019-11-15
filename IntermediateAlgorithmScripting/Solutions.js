// Intermediate Algorithm Scripting: Sum All Numbers in a Range
function sumAll(arr) {
  // let max = Math.max(arr[0], arr[1]);
  // let min = Math.min(arr[0], arr[1]);
  arr.sort((a, b) => a - b);
  let end = arr[1];
  let start = arr[0];
  let temp = 0;

  for (let i = start; i <= end; i++) {
    temp += i;
  }

  return temp;
}

// function sumAll(arr) {
//   var max = Math.max(arr[0], arr[1]);
//   var min = Math.min(arr[0], arr[1]);
//   var temp = 0;
//   for (var i = min; i <= max; i++) {
//     temp += i;
//   }
//   return temp;
// }

console.log(sumAll([1, 4]));
console.log(sumAll([4, 1]));
console.log(sumAll([5, 10]));

// Intermediate Algorithm Scripting: Diff Two Arrays
function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item));
  // const newArray = [];
  // for (let i = 0; i < arr1.length; i++) {
  //   for (let j = 0; j < arr2.length; j++) {
  //     console.log(arr1[i], arr2[j]);
  //     if (arr1.includes(arr2[j]) === false) {
  //       newArray.push();
  //     }
  //   }
  // }
  // return newArray;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
