//* ======================================================
//*                     (OOPS)
//* ======================================================

//* Object Literals
console.log("**** Object Literals ****");

const book1 = {
  title: "ISID'la Mücadelem",
  author: "Nadia Murad",
  year: 2008,
  // !arrow fonk. burada dogru calismiyor.this calismiyor
  getSummary: function () {
    return ` ${this.title} was written by ${this.author} in ${this.year}`;
  },
};
console.log(book1);
console.log(book1.hasOwnProperty("author")); //? true
// ! Object nesnesinden miras yoluyla geldi..
console.log(new Date());

const book2 = {
  title: "Outliers",
  author: "Adam Fewer",
  year: 2020,
  // !arrow fonk. burada dogru calismiyor.this calismiyor
  getSummary: function () {
    return ` ${this.title} was written by ${this.author} in ${this.year}`;
  },
};
console.log(book2);
console.log(book2.getSummary());
