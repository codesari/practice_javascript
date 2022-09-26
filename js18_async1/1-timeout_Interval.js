//*==================================================
//*        1- Senkron-Asenkron Programlama
//*==================================================

//! Javascript, single-threaded ve Asenkron Programlama dilidir.

//? Asenkron Programlama
//? --------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basriyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//? Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri,
//? Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Asyn Programlama
//? kullanilmasi cok onemlidir.

//* Senkron
//* ------------------------------------------------

// const wait = (second) => {
//   const startTime = new Date().getTime();
//   //   while (new Date().getTime() < startTime + second);
//   //   ici bos while --> sadece sonunda noktali virgül olacak
//   while (new Date().getTime() < startTime + second) {}
// };
// console.log("Hello");
// // alert("CW"); //! blocking code (asagıdaki kodun calismasını blokladı)
// console.time("timer");
// wait(3000); //!blocking code
// console.timeEnd("timer");
// console.log("FS12");

//* Asenkron (setTimeout)
//* arkaplanda calisan bi kod.yani non-blocking kod
// console.log("timeout");
// setTimeout(() => {
//   //! non-blocking,asenkron
//   console.log("Hi");
// }, 2000);

// setTimeout(() => {
//   //! non-blocking,asenkron
//   console.log("Hi 2");
// }, 500);
// console.log("timeout bitti");

//* Asenkron (setInterval,clearInternal)
//* periyodik olarak süre veriyor.her 1 sn de bir yap gibi..
// console.log("Timer Started");
// let counter = 0;

// const intervalId = setInterval(() => {
//   console.log(++counter);
//   if (counter > 4) {
//     clearInterval(intervalId);
//     console.log("Timer stopped");
//   }
// }, 1000);

//! Callback Hell (nested ve birbirine bagli callback'ler)
//!-----------------------------------------------------
//* Eger birbirine bagimli asenkron kodlarin yazilmasi gerekirse,nested callback
//* yapisinin kullanilmasi gerekebilir. Fakat bu iyi bir programlama yaklasimi degildir.
// !callback hell olarak adlandirilan bu yapinin anlasilmasi ve surdurulebilirligi oldukca zordur.

setTimeout(() => {
  console.log("john:Hi");
  setTimeout(() => {
    console.log("Sarah: Hello");
    setTimeout(() => {
      console.log("John: How Are you?");
      setTimeout(() => {
        console.log("Sarah:Fine and you?");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

//? COZUMLER:
//?----------------------------------------------------
//* 1- XMLHttpRequest (Eski yontem, Ornek: AJAX)
//? https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
//* 2- Promise,
//! 3- Fetch API (Promise'in basitlestirilmis hali),
//! 4- ASYNC-AWAIT (Fetch API'nin makyajlanmis hali)
