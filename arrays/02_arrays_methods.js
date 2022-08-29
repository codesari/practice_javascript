//? concat()
// ! concat() method is used to combine two or more arrays

const ary1 = ["Bu", "bir", "js"];
const ary2 = ["array", "metod", "calismasidir"];

const new_ary = ary1.concat(ary2);
console.log(new_ary);

// ! concat ile bir değer de ekleyebiliriz
const new_ary2 = new_ary.concat("dikkatle dinleyin!", ary1);
console.log(new_ary2);

//? join()
// ! join (birleşme noktası)
// ! join() metodu bir seperator kullanarak dizi elemanlarını bir string hale getirir.

let arr = ["a", "b", "c", "d"];
console.log(arr);
console.log(arr.join(""));
console.log(arr.join("-"));
// ! dizide değişiklik yapmaz (not mutates)
console.log(arr);

// ? reverse()
// ! reverse metodu işlem yaptığında diziyi olduğu yerde değiştirir (mutate)

const courseList = ["Cyber", "AWS", "SalesForce", "FullStack"];
console.log("Before the reverse() : " + courseList);
courseList.reverse();
console.log("After the reverse() : " + courseList);

// ? sort() method

// ! By default, the sort() function sorts values as strings. If numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1". Because of this, the sort() method will produce incorrect result when sorting numbers.

const numArr = [1, 32, 25, 98, 700, 15, 100, 409];
// numArr.sort();
// console.log(numArr);

// ! bu problemi çözmek için bir fonksiyon oluşturulur

numArr.sort(function (a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
});
console.log(numArr);

// ? splice() method
// ! To access part of an array without modifying it, see slice().
let deletedArr = numArr.splice(0, 4);
console.log(deletedArr);
console.log(numArr);

// ! Insert elements using splice()

let colorAry = ["red", "green", "blue"];
let deletedItems = colorAry.splice(2, 0, "purple", "orange");
// bu fonskiyon normalde silinen elementleri döndürdüğü için deleted dedik,ama bu örnekte silme işlemi yok..
console.log(colorAry);
console.log(deletedItems);
