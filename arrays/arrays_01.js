// ! Literal methods (using an array literal)
const array1 = ["eat", "sleep"];
console.log(array1, typeof array1);

// ! Using the new keyword
const array2 = new Array("drink", "go to bed");
console.log(array2, typeof array2);

const emptyArray = [];
console.log(emptyArray, typeof emptyArray);

const array_number = [2, 4, 6, 8];
console.log(array_number, typeof array_number);

const mixedArray = [true, false, -7, "hello", "c"];
// tek tik i çift tırnağa çeviriyor
console.log(mixedArray);

// ! BÜTÜN TYPEOF LARA OBJECT DEDİ..TÜM ARRAYLAR OBJECT TÜRÜNDEDİR

const days_array = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

let first = days_array[0];
console.log(first);
// ! length,toplam dizi eleman sayısını verir.fakat n eleman varsa son eleman n-1 dir.çünkü index 0 dan başlar
let last = days_array[days_array.length - 1];
console.log(last);

console.log(days_array.length);

const diziSayi = [8, 9, 10];
const obje = { firstName: "Edward", lastName: "John", age: 30 };
// ! Array.isArray() ve instanceof fonksiyonları kullanımı
console.log(Array.isArray(diziSayi)); // true
console.log(Array.isArray(first)); // false

console.log(diziSayi instanceof Array); // true
console.log(obje instanceof Array); // false
