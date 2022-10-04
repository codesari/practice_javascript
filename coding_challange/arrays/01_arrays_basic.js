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

console.log(typeof obje);

// ! PUSH() and UNSHİFT()

// ! push() diziye sondan ekleme yapar

// diziye push yapacağımız için değişkeni let yapıyoruz
let opSystems = ["ME", "XP"];
console.log(opSystems.length);
opSystems.push("VİSTA"); // return the new length
console.log(opSystems);
console.log(opSystems.length);

// ! unshift() dizinin başından ekleme yapar

opSystems.unshift("WİN 98");
console.log(opSystems, opSystems.length);

//! diziye manuel ekleme de yapılabilir (using index) fakat tavsiye edilmeyen bir yöntem

// let arrayPage = ["Google", "Land"];
// arrayPage[2] = "Page";
// console.log(arrayPage);

// ! eğer arada index atlarsan atladığın index undefined olur.bu yüzden bu yöntem tavsiye edilmez

let arrayPage = ["Google", "Land"];
arrayPage[3] = "Page";
console.log(arrayPage);

// ! pop() metodu dizideki son elemanı çıkarır ve çıkardığı elemanın değerini tutar

const poppedElement = arrayPage.pop();
console.log(poppedElement);
console.log(arrayPage);

// ! shift() metodu dizinin başındaki elemanı çıkarır ve çıkardığı elemanı tutar.

const shiftedElements = arrayPage.shift();
console.log(shiftedElements);
console.log(arrayPage);

// ? ************ ÖZET ****************
// ?    push() - pop()     --> diziye SONDAN eleman ekleme ve çıkartma
// ? unshift() - shift()   --> dizinin BAŞINDAN elemanan ekleme ve çıkarma
