// const numbers = [2, 4, 6, 8];
// const output = [];
// for (const Number of numbers) {
//   const doubled = Number * 2;
//   output.push(doubled);
// }
// console.log(output); // [4, 8, 12, 16]






// function redouble(numbers){
//     const output=[];
//     for(const Number of numbers){
//         const doubled=Number*2;
//         output.push(doubled);
//     }
//     return output;
// }

// const numbers = [2, 4, 6, 8];
// const result = redouble(numbers);
// console.log(result); // [4, 8, 12, 16]


// function doubleIt(numbers){
//     return numbers*2;
// }
// const output=doubleIt (numbers);
// // console.log(output)

// const doubleNumbers = (numbers) => {
//     return numbers.map(number => number * 2);
//   };
  
  // Example usage:
  const numbers = [2, 4, 6, 8];
//   const doubledNumbers = doubleNumbers(numbers);
//   console.log(doubledNumbers); // [4, 8, 12, 16]

  const doubled=num=>num*2;
  const makeDouble=numbers.map(doubled);
  console.log(makeDouble)