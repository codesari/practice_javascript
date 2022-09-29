//* ======================================================
//*             OOP - Object Constructor (ES5)
//* ======================================================

//* Javascript, prototype-temelli bir dildir.
//* Butun JavaScript nesneleri (objects) ozellikleri (properties)
//* ve metotlari bir prototipten miras olarak almaktadir.
//* Object prototipi, prototip miras zincirinin en tepesinde yer almaktadir.
//* Ornegin Date ve Array nesneleri Object.prototype'dan miras almaktadir.

//? Object Constructor
// ! Book aslında bir kalıp gibi..Asagida bu kalıptan istedigimiz gibi türetiyoruz
// * kalıp ve para basma ilişkisi gibi..
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  //   this.getSummary = function () {
  //     return ` ${this.title} was written by ${this.author} in ${this.year}`;
  //   };
  // ! fonksiyonu obje kalıbının icinde tanimlamak yerine asagida prototype olarak tanimladik
}
//? instance
const book1 = new Book("Kasagi", "Omer Seyfettin", 1920);
const book2 = new Book("Sinekli Bakkal", "H.Edip Adivar", 1980);

Book.prototype.getSummary = function () {
  return ` ${this.title} was written by ${this.author} in ${this.year}`;
};
Book.prototype.getAge = function () {
  return new Date().getFullYear() - this.year;
};
// ! disaridan,objeye degisken atayabiliriz..
Book.prototype.price = 100;
console.log(Book.prototype); //*prototype a objedendan bakma
console.log(book1.__proto__); //* prototype a instance dan bakma

console.log(book1);
console.table(book1);
console.log(book1.getSummary());

console.log(book1, book2);
console.log(book1.getAge());
console.log(book2.getAge());

//* INHERİTANCE

//? Sub-class

function Magazine(title, author, year, month) {
  Book.call(this, title, author, year);
  //? Book objesini cagiriyoruz.Book objesindeki ortak degerleri bir daha yazmamak icin
  this.month = month;
  //*? burada da ekstra özellik vermek isterken yazıyoruz.Person-Hasta-Hemsire-Doktor arasindaki iliski gibi.Hepsinde ortak özellikler var ama farklı özelliklerini biz üretiyoruz.Benzerleri birbirinden türetebiliriz.
}

const mag1 = new Magazine("Scientific Research", "Einstein", 1926, "Sep");
console.table(mag1);
