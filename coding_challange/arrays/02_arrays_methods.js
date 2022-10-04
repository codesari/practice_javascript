//? concat()
// ! concat() method is used to combine two or more arrays

const ary1 = ["Bu", "bir", "js"];
const ary2 = ["array", "metod", "calismasidir"];

const new_ary = ary1.concat(ary2);
console.log(new_ary);

// ! concat ile bir değer de ekleyebiliriz
// ! concat ekleme yapılan diziyi değiştirmiyor...
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
// ! sort fonksiyonu parametre olarak içine başka bir fonksiyon alabiliyor

numArr.sort(function (a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
});
console.log(numArr);

// ? splice() method
// ! splice metodu verilen aralıktaki dizi elemanlarını siler.1.değer indistir,2.deger indisten itibaren kaç değer silineceğidir
// ! To access part of an array without modifying it, see slice().
let deletedArr = numArr.splice(0, 4);
console.log(deletedArr);
console.log(numArr);

// ! Insert elements using splice()

let colorAry = ["red", "green", "blue"];
let deletedItems = colorAry.splice(2, 0, "purple", "orange");
// blue yu kaydırarak ekleme işlemi yapar red,green,purple,orang,blue
// 0 ın anlamı silinecek eleman yok
// bu fonskiyon normalde silinen elementleri döndürdüğü için deleted dedik,ama bu örnekte silme işlemi yok..
console.log(colorAry);
console.log(deletedItems);

// ! Update elements using splice()

let cityArr = ["istanbul", "düzce", "karabuk", "giresun"];
console.log(cityArr);
let deletedCity = cityArr.splice(2, 1, "zopran");
console.log(cityArr);
console.log(deletedCity);

// ? slice()
// !In this case, the original array is cloned. slice(start, stop);

const cities = ["istanbul", "düzce", "karabuk", "giresun", "bartin", "karabuk"];
console.log(cities);
let slicedCity = cities.slice(3, 5);
// ! slice daki 1. değer index değeri,2.değer ise kaçıncı eleman olduğu
console.log(slicedCity);

// const colors = ["Red", "Yellow", "Green", "Blue"];
// const slicedColors = colors.slice(1, 3);

// const newColors = colors.slice();

// console.log(colors);
// console.log(slicedColors);
// console.log(newColors);

// ? indexof() and lastIndexOf()

console.log(cities.indexOf("karabuk"));
console.log(cities.indexOf("giresun"));
console.log(cities.indexOf("karabuk", 3));
// bulamazsa -1 döndürür

console.log(cities.lastIndexOf("karabuk"));
console.log(cities.lastIndexOf("giresun"));
console.log(cities.lastIndexOf("karabuk", 3));
console.log(cities.lastIndexOf("karabuk", 1));

// ! fill()

const array3 = [1, 2, 3, 4, 5];
array3.fill(0);
console.log(array3);

// ** includes()
const sayilar1 = [3, 5, 2, "2", "üc", "bes", 5];

// ** includes() type a bakar..
console.log(sayilar1.includes(5));
