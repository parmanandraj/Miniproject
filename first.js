// function countVowels(str){
//      let count =0;
//     for(const char of str){
//         if (char === "a" || 
//             char === "e" || 
//             char === "i" || 
//             char === "o" || 
//             char === "u"
//         ){
//             count++;
//         }
//        }
//        console.log(count);
// }

// print even number from java (console)

// Using filter method to filter even numbers from an array
// let arr = [1,2,3,4,5,6,7,8,9,10];
// let evenArr = arr.filter((val) => {
//     return val % 2 === 0;
// });
// console.log(evenArr);

// // print odd number from java (console)
// let arr2 = [1,2,3,4,5,6,7,8,9,10];
// let oddArr = arr2.filter((val) => {
//     return val % 2 !== 0;
// });
// console.log(oddArr);

// // Usin reduce method to find the sum of the array 
// let arr3 = [1,2,3,4,5];
//  const output = arr3.reduce((prev,curr) =>{
//     return prev + curr;
//  });
//   console.log(output);

// Using reduce method to find the largest number in the array)
// let arr4 = [5,7,3,9,1];
// const largest = arr4.reduce((prev, curr) =>{
//     return prev > curr ? prev : curr;
// });
// console.log(largest);

// Qs. We are given array of marks of students. Filter out of thr marks of students thet scored 90+.
//  let marks = [78, 85, 92, 88, 95, 80, 90];
//   let toppers = marks.filter((val) => {
//     return val > 90;
//   });
//       console.log(toppers);   

// Qs. Take a number as input from user. Create an array of number from 1 to n.
 // (1) Use the reduce method to calculate sum of numbers in the array.
 // (2) Use the reduce method to calculate the product of all numbers in the array.
  
 // (1) Use the reduce methhod to calculate sum of numbers in thhe array.
 //let n = prompt("Enter a number:");
//  let arr = [];
//     for(let i = 1; i <= n; i++) {
//         arr[i-1] = i;
//     }
//     console.log(arr);
//   let sum = arr.reduce ((prev, curr) => {
//     return prev + curr;
//   });
//     console.log("Sum of numbes :",sum);

// (2) Use the reduce method to calulate the product of all numbers in the array.
//  let n = prompt("Enter a number:");


 let arr2 = [];
    for(let i = 1; i <= n; i++) {
        arr2[i-1] = i;
    } 
    console.log(arr2);
    let factorial = arr2.reduce((prev, curr) => {
        return prev * curr;
    });
    console.log("factorial of numbers",factorial);

