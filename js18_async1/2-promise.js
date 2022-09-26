const myPromise = new Promise((resolve, reject) => {
  resolve("Data fetched");
  reject("Data is helted");
});
myPromise.then((res) => console.log(res));

// const myPromise = new Promise((resolve, reject) => {
//   //? resolve--> basarili bitince calisacak FONKSİYON
//   //? reject --> basarisiz oldugunda calisacak FONKSİYON
//   const success = Math.floor(Math.random() * 5);
//   const data = { a: 1, b: 2 };
//   if (success) {
//     console.log("Data fetched");
//     resolve(data);
//   } else {
//     reject(new Error("Fetch halted"));
//   }
// });
// // ? promise,islemleri yaptıktan sonra then e atılıyor
// myPromise
//   .then((response) => console.log(response))
//   .catch((err) => console.log(err));
// // myPromise.then((res) => console.log(res)).then().then().then().catch()

const newPromise = new Promise((resolve, reject) => {
  const randomNumber = Math.floor(Math.random() * 200);
  if (randomNumber % 2 == 0) {
    console.log("Cift sayi bulundu");
    resolve(randomNumber);
  } else {
    reject(new Error("Cift sayi yok"));
  }
});
newPromise.then((res) => console.log(res)).catch((err) => console.log(err));
