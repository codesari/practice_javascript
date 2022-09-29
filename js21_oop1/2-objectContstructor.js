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
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  getSummary = function () {
    return ` ${this.title} was written by ${this.author} in ${this.year}`;
  };
}
//? instance
const book1 = new Book("Kasagi", "Omer Seyfettin", 1920);
const book2 = new Book("Sinekli Bakkal", "H.Edip Adivar", 1920);
