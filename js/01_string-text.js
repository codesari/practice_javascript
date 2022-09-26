// todo 1. Write a JavaScript function to check whether a string is blank or not.
// Test Data :
// console.log(is_Blank(''));
// console.log(is_Blank('abc'));
// true
// false

const isBlank = (str) => {
  const result = str.trim().length == 0 ? true : false;
  return console.log(result);
};
// * kac tane bosluk olabileceğini bilmediğimizden tek tek bunu elle veremeyiz bu yüzden trim() kullanıyoruz.

isBlank("   ");

// todo 2.Write a JavaScript function to split a string and convert it into an array of words.
// Test Data :
// console.log(string_to_array("Robin Singh"));
// ["Robin", "Singh"]

let arr = [];
// *arr yi fonksiyonun disinda cagirabilmek için global alanda tanımladık
const strToArr = (str) => {
  arr = str.split(" ");
  console.log(arr);
};
strToArr("Ahmet bugün js calisiyor");
console.log(arr[2]);

// todo 3.Write a JavaScript function to extract a specified number of characters from a string. Go to the editor
// Test Data :
// console.log(truncate_string("Robin Singh",4));
// "Robi"
// ? My solituon

let splittedArr = [];
let resultArr = [];
let strResult = "";
const extractChar = (str, x) => {
  splittedArr = str.split("");
  for (let i = 0; i < x; i++) {
    resultArr[i] = splittedArr[i];
  }
  strResult = resultArr.join("");
  return console.log(strResult);
};
extractChar("Ahmet bugün js calisiyor", 10);

// ? 2.Yöntem slice() kullanarak
// let result = "";
// const getStr = (str, length) => {
//   result = str.slice(0, length);
//   return console.log(result);
// };
// getStr("Ahmet bugün js calisiyor", 2);

//  todo 4.Write a JavaScript function to convert a string in abbreviated form
// Test Data :
// console.log(abbrev_name("Robin Singh"));
// "Robin S."
// ? My Solution (Birden fazla isme göre geliştirildi)

let splittedArr2 = [];
let result2 = "";
const shortenName = (str) => {
  splittedArr2 = str.trim().split(" ");
  console.log(splittedArr2);
  //   let result = splittedArr2[0] + " " + splittedArr2[1].charAt(0) + ".";
  //   bir satır yukarıdaki kod 2 degerli isimler icin.(Ahmet Sari)
  for (let i = 0; i < splittedArr2.length - 1; i++) {
    result2 += splittedArr2[i] + " ";
  }
  console.log(result2);
  result2 += splittedArr2[splittedArr2.length - 1].charAt(0) + ".";
  console.log(result2);
};

shortenName("       Ahmet Sari Burak Kaan Yamak Olgun Umur Yüksel ");

// * trim ile split(" ") in beraber kullanılması mantıklı,çünkü split boşluğa göre bölüyor
// * eger başta boşluk olursa gereksiz bölme yapmış olur
// let strr = "        Ahmet Sari";
// console.log(strr.split(" "));
// console.log(strr.trim().split(" "));
