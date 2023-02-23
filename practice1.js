//make evenArray to oddArray   ---for loop
let oddArr = [1, 3, 5, 7, 9];
let evenArr = [];

for(let i=0; i<oddArr.length; i++) {
  evenArr.push(oddArr[i] + 1);
}

console.log(evenArr);
// Output: [2, 4, 6, 8, 10]


//make evenArray to oddArray   -----.map() 

let oddArr1 = [1, 3, 5, 7, 9];
let evenArr1 = oddArr.map(function(num) {
  return num + 1;
});

console.log(evenArr1);
// Output: [2, 4, 6, 8, 10]
