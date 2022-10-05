//* ======================================================
//*        OOP - Static and Private  (ES6)
//* ======================================================
//? ENCAPSULATİON --> PRİVATE

//? Static degiskenler ve metotlar butun bir class'i ilgilendiren
//? verileri tutmak veya degistirmek icin elverislidir.

//? Eger nesnelerden bagimsiz sadece ilgili class' a ait bir degiskene
//? ihtiyac varsa o zaman static degisken kullanmak mantiklidir.

//! Encapsulation OOP'nin temel unsurlarindan birisidir.
//! Bir class icerisindeki degeri/durumu class disindan dogrudan ve
//! izinsiz erisimlere kapatmak icin kullanilir.

//! Encapsulation private degiskenler ve private metotlar yardimiyla yapilir.
//! ES6 ve sornasinda private degisken ve metotlari belirtmek icin
//! # (hash) kullanilir.

//! Private degiskenler dogrudan erisilemezler. Bunlara erismek icin class
//! icerisinde tanimlanan public (genel) erisimli getter ve setter metotlar
//! kullanilir.

//! Private metotlara ise class disirasindan da eriselemez.
//! Private metotlara ancak class icerisindeki diger metotlar ile erisilebilir.

class Book {
  // * private variable
  #id = "1234567";
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.getTitle = function () {
      return this.title;
    };
  }
  //   * private id'ye erişmek icin class icinde bir public fonk.yazdik(constructor'un disinda)
  getId() {
    //? fonk. yazarak kontrollü okuma yaptık fakat burada herhangi bir complex ifade yazmadım.Disaridan erişmek isteyenlerin özelliklerinin sorgulayacak birşeyler yazabiliriz buraya..Ta ki her isteyen id yi okuyamasın,sınırlanma olsun..

    return this.#id;
    //? private olan bir degiskeni fonk() ile genel yaptık
  }
  setId(id) {
    this.#id = id;
    // ? burada return demezsek getId fonk() ile cagirabiliriz
  }
  //! private metod tanimladik
  #computeAge() {
    return new Date().getFullYear() - this.year;
  }
  //! private metoda ulaşmak icin bir fonk() yazdik.
  accessAge() {
    return this.#computeAge();
  }
}

const book1 = new Book("Steve Jobs", "Walter Isaccson", 2011);
// console.log(book1.#id);
console.log(book1.getId());

book1.setId("0007777");
console.log(book1.getId());
console.log(book1.accessAge());
