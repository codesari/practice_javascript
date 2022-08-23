//!---------- 1 ---------
//! Example sum of positive numbers, when user enters a negative number
console.log("********* EXERCİSE ***********");

//? Negatif sayi girilene kadar girilen pozitif sayıları topla
//! do-while methods
// let num = 0;
// let sum = 0;

// do {
//   sum += num;
//   num = Number(prompt("Enter a number,please"));
// } while (num >= 0);

// console.log(sum);

//! only while methods

let num = Number(prompt("Enter a number,please"));
let sum = 0;

while (num >= 0) {
  sum += num;
  num = Number(prompt("Enter a number,please"));
}
console.log(sum);
