const arrNum1 = [84, -3, 24, 62, 15, -33, 47, -55];

const negative = [];
const positive = [];

const diziBol = (x) => {
  for (let i = 0; i < x.length; i++) {
    if (x[i] > 0) {
      positive.push(x[i]);
    } else {
      negative.push(x[i]);
    }
  }
  console.log("Orjinal dizi : " + arrNum1);
  console.log("Pozitif dizi : " + positive);
  console.log("Negatif dizi : " + negative);
};

diziBol(arrNum1);

//!  ----------------------------------------------------------
//!  ----------------------------------------------------------

// yukarıdaki arrNum1 dizisinin ortalama degerini hesapla

let sum = 0;
let average = 0;
const calcAvrg = (x) => {
  for (let i = 0; i < x.length; i++) {
    sum += x[i];
  }
  average = sum / x.length;
  console.log("Average is : " + average);
};

calcAvrg(arrNum1);

//* ======================================================
//*                   FOR-IN LOOP
//* ======================================================

//*-------------------------------------------------------
//* SORU: Ogrenciler dizisinde ogrenci isimleri saklanmaktadir.
//* ogrencileri aramamizi saglayacak ve aranilan ogrenciden
//* ne kadar sayida bulunuldugunu  ana programa döndürecek bir
//* fonksiyonu yaziniz. Eger aranilan isimde bir ogrenci yok ise
//* fonksiyon "ogrenci bulunamadi" dondurulmelidir.
//*--------------------------------------------------------

const students = ["ahmet", "mehmet", "ismet", "ahmet", "can", "mehmet", "cem"];

const findStudent = (arr, searchword) => {
  let counter = 0;
  for (let i in arr) {
    if (searchword === arr[i]) {
      counter++;
    }
  }
  if (!counter) {
    // if (counter == 0)
    return `${searchword} is not found`;
    // tek tik kullanarak yazdırmak istiyorsan en aşağıda clg demen lazım.direk return de yazdırmak için ise returnden sonra clg kullanman lazım
  } else {
    return `${searchword} is founded
   in array ${counter} times`;
  }
};

// const key = prompt("Enter a student name,please").toLowerCase();

// console.log("Searcing word is : " + key);
// console.log(findStudent(students, key));

//!  ----------------------------------------------------------
//!  ----------------------------------------------------------

//* ======================================================
//*                   FOR-OF LOOP
//* ======================================================

//* for of dongusu, for in dongusunun bir cok veri yapisini
//* kapsayacak sekilde guncellenmis halidir. Bu dongude dizi
//* icersindeki veriye erisirken indisleme kullanmaya gerek yoktur.

const findStudentsOf = (arr, searchWord) => {
  let counter = 0;
  for (let item of arr) {
    item === searchWord ? counter++ : null;

    //! Short-circuit yöntemi: && => kosul dogru (true) ise ifadeyi calisitir.
    // searchWord === item && counter++;

    //! Short-circuit yöntemi: || => kosul yanlis (false) ise ifadeyi çalıştır.
    // searchWord === item || counter++;
  }
  return !counter
    ? `${searchWord} can not be found`
    : `${searchWord} is found ${counter} times`;
};

// const key = prompt("Enter a student name,please").toLowerCase();
// console.log("Searcing word is : " + key);

// console.log(findStudentsOf(students, key));

//!  ----------------------------------------------------------
//!  ----------------------------------------------------------
//! CALLBACK FUCTİON

const tek = (arr) => {
  return arr % 2 != 0;
};

const cift = (arr) => {
  return arr % 2 == 0;
};

const sayiSec = (arr, func) => {
  let empty = [];
  for (let item of arr) {
    if (func(item)) empty.push(item);
  }
  return empty;
};

const sayilar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
console.log(sayiSec(sayilar, tek));
console.log(sayiSec(sayilar, cift));
