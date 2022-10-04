// //* ======================================================
// //*           OOP - Classes and Inheritance (ES6)
// //* ======================================================

// //? Classes'lar, object (nesne) olsuturmak icin kullanilan sablonlardir.
// //? JS'de Class'lar prototipler uzerine insa edilmistir. Ancak, syntax
// //? ES5'den farklidir. Aslinda, class keyword'u ilk olarak ES6 da
// //? kullanilmistir ancak bu sadece bir syntactical sugar'dir.
// //? JavaScript, class-tabanli bir dil degil, prototype-tabanli bir dildir.
// //? yaygin kullanim class-tabanli oldugu icin syntax'ini O'na benzetmistir.

// //? Bir parent class'in degisken ve fonksiyonelliği extends
// //? keyword'u ile child class'a gecmektedir.(INHERITANCE)

// class Book {
//   constructor(title, author, year) {
//     this.author = author;
//     this.title = title;
//     this.year = year;

//     //? Bu alanda yazilan bir metot butun instance'ların belleginde tek tek yer kaplar.
//     this.getTitle = function () {
//       return this.title;
//     };
//   }

//   //! Bu kisimda yazilan fonksiyonlar aslinda prototype alaninda bulunur.
//   getAge() {
//     return new Date().getFullYear() - this.year;
//   }
//   getSummary() {
//     return `${this.title} was writtten by ${this.author} in ${this.year}`;
//   }
// }

// //?instance
// const book1 = new Book("Kasagi", "Omer Seyfettin", 1920);
// console.log(book1);
// console.log(book1.getAge());
// console.log(book1.getSummary());

// //? Sub-Class tanimlamasi (Inheritance)

// class Magazine extends Book {
//   constructor(title, author, year, month) {
//     //! Book'un constructor'i cagrildi
//     super(title, author, year); //! Book'un prototpye kopyalnmis
//     this.month = month;
//   }
// }

// //? Magazine objesinin yeni bir instance
// const mag1 = new Magazine("Scientific Research", "Einstein", 1926, "Sep");
// console.log(mag1);

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    // * bu kisma yazdıgimiz fonk veyas deisken tüm ibstanslarda yer kaplar.ama constructor un disinda tanimlarsak sadece prototype da yer kaplar ve tüm instance ler ulaşabilir
  }
  getAge() {
    return new Date().getFullYear() - this.year;
  }
  getSummary() {
    return `${this.title} was writtten by ${this.author} in ${this.year}`;
  }
}

const book1 = new Book("Steve Jobs", "I can't remember", 2011);
const book2 = new Book("Wozniak", "I can't remember", 2008);
console.log(book1.getAge());
console.log(book2.getAge());
console.log(book1.getSummary());
console.log(book2.getSummary());

class Magazine extends Book {
  constructor(title, author, year) {
    super(title, author, year);
    //? ES5 yönteminde call ile yaptigimizi burada super ile yapiyoruz ve bu kullanımda prototype lar da default olarak gelmis oluyor,biz ekstra prototypelar ile ugrasmiyoruz..
  }
}
