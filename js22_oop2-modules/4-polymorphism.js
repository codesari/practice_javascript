//* ======================================================
//*        OOP -  Polymorphism(ES6)
//* ======================================================

//* Polymorphism, bir degisken, fonksiyon veya nesnenin çoklu sekiller
//* alabilmesini tanimlayan bir nesne-yonelimli programlama teknigidir.
//* Polymorphism, genellikle Overloading ve Overriding gibi alt kavramlar
//* ile bilinir.

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

// //? Sub-Class tanimlamasi (Inheritance)
// class Magazine extends Book {
//   constructor(title, author, year, month) {
//     //! Book'un constructor'i cagrildi
//     super(title, author, year); //! Book'un prototpye kopyalnmis
//     this.month = month;
//   }
//   //! Overrided Metot (Parent class'daki bir metodun farkli
//   //! fonksiyonellikle fakat ayni isimle tanimlanmasi)
//   getSummary() {
//     return `${this.title} was writtten by ${this.author} in ${this.year} in ${this.month}`;
//   }

//   //!Override edilmis bir parent fonksiyonunu kullanmak icin super keyword'u kullanilabilr.
//   getSummaryParent() {
//     return super.getSummary();
//   }
// }

// //? Magazine objesinin yeni bir instance
// const mag1 = new Magazine("Scientific Research", "Einstein", 1926, "Sep");
// console.log(mag1.getSummary());
// console.log(mag1.getSummaryParent());

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

class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year);
    //? ES5 yönteminde call ile yaptigimizi burada super ile yapiyoruz ve bu kullanımda prototype lar da default olarak gelmis oluyor,biz ekstra prototypelar ile ugrasmiyoruz..
    this.month = month;
  }
  //? OVERWRİTİNG
  getSummary() {
    return `${this.title} was writtten by ${this.author} in ${this.year} ${this.month}`;
  }
  //! overwriting e rağmen ben parent daki getSummary foksiyonunu kullanmak istersem su seilde bir fonksiyon yazabilirim..
  getİntendedSummary() {
    return super.getSummary();
  }
}
const mag1 = new Magazine("CHIP", "Koffman", 1995, "3 aylik");

console.log(mag1.getSummary());
console.log(mag1.getİntendedSummary());
