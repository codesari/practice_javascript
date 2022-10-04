//* ======================================================
//*                     (OOPS)
//* ======================================================

//* Object Literals
console.log("**** Object Literals ****");

// console.log(new Date());

// const book2 = {
//   title: "Outliers",
//   author: "Adam Fewer",
//   year: 2020,
//   // !arrow fonk. burada dogru calismiyor.this calismiyor
//   getSummary: function () {
//     return ` ${this.title} was written by ${this.author} in ${this.year}`;
//   },
// };
// console.log(book2);
// console.log(book2.getSummary());

const person = {
  name: "Ahmet",
  birthday: 1992,
  location: "Akçakoca",
  getSummary: function () {
    const age = new Date().getFullYear() - this.birthday;

    return `${this.name},${age} years old and he lives in ${this.location}`;
    // ! burada keys lere ulaşmak için this kullanmayı unutmuyoruz
  },
};

const person2 = {
  name: "Emre",
  birthday: 1994,
  location: "Bartin",
  getSummary: function () {
    const age = new Date().getFullYear() - this.birthday;
    return `${this.name},${age} years old and he lives in ${this.location}`;
    // ! burada keys lere ulaşmak için this kullanmayı unutmuyoruz
  },
};

console.log(person);
console.log(person.getSummary());
console.log(person2);
console.log(person2.getSummary());
//? gelen person objesi içinde prototyp özellikleri bulunuyor.bir tanesini deneyelim.
console.log(person.hasOwnProperty("age"));

//? Object literals yontemi ile fazla sayida yeni objeler olusturmak oldukca zahmetlidir.
//? Ayrica programcilik yaklasimi acisindan da cok tekrar icerdigi icin uygun degildir (DRY - Dont Repeat Yourself)
//? Cozum: Object Oriented Programming (ES5 and ES6)
