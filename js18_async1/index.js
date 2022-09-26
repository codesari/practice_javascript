// console.log("Hello");
// setTimeout(() => {
//   console.log("Goodbye !");
// }, 2000);
// //? 2000ms = 2sn
// console.log("Hello again");

// document.addEventListener("click", () => {
//   console.log("clicked");
// });

// let intervalID = setTimeout(() => console.log("ahmet"), 5000);
// console.log(intervalID);

// function write() {
//   console.log("write write write !");
// }
// // ! setTimeout fonksiyonu bir id döndürür..Bu id'yi clearTimeout fonksiyonunun içine yazarak setTimeout fonksiyonunu durdurabiliriz
// let intervalID = setTimeout(write, 1000);
// clearTimeout(intervalID);
// console.log("don't write");

// //? 2 sn'de bir ekrana ahmet yazsın , 5 defa yazsın sonra dursun
// let count = 0;
// display = () => {
//   console.log("Ahmet");
//   const id = setTimeout(display, 1000);
//   count++;
//   if (count >= 5) {
//     clearTimeout(id);
//   }
// };
// display();

//? yukarıdaki programı daha kısa olarak setInterval() metodu ile yapabiliriz
// ? yani setTimeout verilen ms'den sonra bir kere çalışırken setInterval verilen ms aralıgında sürekli calisir..

// function print() {
//   console.log("print !");
// }
// setInterval(print, 1000);

//? durdurmak icin de clearInterval() metodu kullanıyoruz
// let count = 0;
// const id = setInterval(print, 1000);
// function print() {
//   console.log("print !");
//   count++;
//   if (count == 5) clearInterval(id);
// }

//! CALLBACK HELL

setTimeout(() => {
  console.log("Naber ,nasilsin ?");
  setTimeout(() => {
    console.log("iyiyim sen nasilsin");
    setTimeout(() => {
      console.log("Sağol bende iyiyim");
      setTimeout(() => {
        console.log("eeee daha daha nasilsin");
        setTimeout(() => {
          console.log("ayni be yaa,sen ne yaptin");
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
