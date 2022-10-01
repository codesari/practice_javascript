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
  age: "30",
  location: "Akçakoca",
  getSummary: function () {
    return `${this.name},${this.age} years old and he lives in ${this.location}`;
    // ! burada keys lere ulaşmak için this kullanmayı unutmuyoruz
  },
};

console.log(person);
console.log(person.getSummary());
//? gelen person objesi içinde prototyp özellikleri bulunuyor.bir tanesini deneyelim.
console.log(person.hasOwnProperty("age"));
