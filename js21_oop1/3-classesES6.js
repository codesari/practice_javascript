//* ======================================================
//*           OOP - Classes and Inheritance (ES6)
//* ======================================================

//? Classes'lar, object (nesne) olsuturmak icin kullanilan sablonlardir.
//? JS'de Class'lar prototipler uzerine insa edilmistir. Ancak, syntax
//? ES5'den farklidir. Aslinda, class keyword'u ilk olarak ES6 da
//? kullanilmistir ancak bu sadece bir syntactical sugar'dir.
//? JavaScript, class-tabanli bir dil degil, prototype-tabanli bir dildir.
//? yaygin kullanim class-tabanli oldugu icin syntax'ini O'na benzetmistir.

//? Bir parent class'in degisken ve fonksiyonelliği extends
//? keyword'u ile child class'a gecmektedir.(INHERITANCE)

class Book {
  constructor(title, author, year) {
    this.author = author;
    this.title = title;
    this.year = year;
  }

  //! Bu kisimda yazilan fonksiyonlar aslinda prototype alaninda bulunur.
  getAge() {
    return new Date().getFullYear() - this.year;
  }
  getSummary() {
    return `${this.title} was writtten by ${this.author} in ${this.year}`;
  }
}

//?instance
const book1 = new Book("Kasagi", "Omer Seyfettin", 1920);
console.log(book1);
console.log(book1.getAge());

//? magazine i book tan türet..
class Magazine extends Book {
    constructor(title,author,year,month){
        // super()//? parentın constructor u analamina gelir
        // ? Book constructor u cagirdik
        super(title,author,year)
        this.month = month
        // ? buradaki this magazine dir
    }

}
