// Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];

// Expected Output :
// "Red, Green, White, Black"

// const arrToString = (arr)=>{
//     // return arr.toString()
//     return arr.join(", ")
// }

// console.log(arrToString(["Red", "Green", "White", "Black"]));
// console.log(arrToString(["2","44","999"]));

//**********************************SORU 2************************************** */

// Write a JavaScript program that accepts a number as input and insert dashes (-) between each two even numbers.
// For example, if you accept 025468 the output should be 0-254-6-8.
// let num="025468"
// num=num.split("")
// console.log(num);
// const insertDash=(num)=>{
//     console.log(num)
//     let result=""
//     for(let i=0;i<num.length;i++){
//         if(num[i]%2==0 && num[i+1]%2==0){
//             result+=num[i]+ "-"
//         }else{
//             result+=num[i]
//         }
//     }
//     return result
// }

// console.log(insertDash("025468"));
// // console.log(insertDash("669754462"));

//***********************************SORU3************************************ */

// Write a JavaScript program to sort the items of an array.
// Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8

// const sortArr=(arr)=>{
//     // console.log(arr)
//     // arr.sort((a,b)=>b-a)
//     // console.log(arr);
//     return arr.sort().reverse()
// }

// // console.log(sortArr([ 3, 8, 7, 6, 5, -4, 3, 2, 1 ]))
// console.log(sortArr([ "aa","bb","bc","dd","ad" ]))

//********************************SORU 4**************************************** */

// Write a JavaScript program to find the most frequent item of an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

// let arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
// console.log(arr1.sort());

const mostFrequent = (arr) => {
  let most;
  let repetition = 0;
  let count;
  arr = arr.sort();
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    count = 0;
    for (let k = i; k < arr.length; k++) {
      if (arr[i] == arr[k]) {
        count++;
      }
    }
    if (count > repetition) {
      repetition = count;
      most = arr[i];
    }
  }
  return `${most} en çok tekrar eden sayıdır. ${repetition} kere tekrar etmiştir`;
};

console.log(mostFrequent([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]));
