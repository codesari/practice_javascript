// //* ======================================================
// //*             OOP - Object Constructor (ES5)
// //* ======================================================

// //* Javascript, prototype-temelli bir dildir.
// //* Butun JavaScript nesneleri (objects) ozellikleri (properties)
// //* ve metotlari bir prototipten miras olarak almaktadir.
// //* Object prototipi, prototip miras zincirinin en tepesinde yer almaktadir.
// //* Ornegin Date ve Array nesneleri Object.prototype'dan miras almaktadir.

// //? Object Constructor
// ! Person aslında bir kalıp gibi..Asagida bu kalıptan istedigimiz gibi türetiyoruz
// * kalıp ve para basma ilişkisi gibi..

function Person(name, birthday, location) {
  this.name = name;
  this.birthday = birthday;
  this.location = location;
  // !constructor icinde fonk.tanimlarken esittir operatoru kullanılır.
  // getSummary = function () {
  //   const age = new Date().getFullYear() - this.birthday;

  //   return `${this.name},${age} years old and he lives in ${this.location}`;
  //   // ! burada keys lere ulaşmak için this kullanmayı unutmuyoruz
  // };
  // ! fonksiyonu obje kalıbının icinde tanimlamak yerine asagida prototype olarak tanimladik.avantajları aşağıda yazıyor
}

// //? new keyword'u Person Constructor'ini parameterler ile cagirmaktadir.
// //? Constructor ise Person nesnesinden bir ornek (instance) olusturmaktadir.
// //? Constructor, mantiksal bir ifade iken instance fiziksel bir olusum gibi dusunulebilir.
// //? Contructor'da tanimlanmis tum degisken ve fonksiyonlar olusturulan
// //? her bir instance'da hayat bulmus olur.

// ? instance = constructor dan türettiklerimiz
const person1 = new Person("ahmet", "1992", "Akçakoca");

// //! Prototype, belirli bir Nesne'nin (Object) tum instance'larina
// //! kolay bir sekilde metotlar tanimlamaya izin vermektedir.
// //! Prototip alaninda bir metot tanimlamanin avantaji bu metot'un
// //! olusan tum instance'larin belleginde yer kaplamamasi ancak tum
// //! instance'larin bu metota ulasabilmesidir.
Person.prototype.getAge = function () {
  return new Date().getFullYear() - this.birthday;
};
Person.prototype.getSummary = function () {
  const age = this.getAge();
  return `${this.name},${age} years old and he lives in ${this.location}`;
};

console.log(person1.getAge());
console.log(person1.getSummary());

// //* Ornegin Person nesnesinin tum instance'lari getAge() fonksiyonunu miras alabilir.
// //* Ancak, getAge() fonksiyonu bellekte sadece bir yer kaplamaktadir.

// //* Bir nesnenin prototiplerine .prototype ile erisilebilir.
// //* Ancak bir instance'in prototiplerine .__proto__ ile erisilmektedir.

console.log(Person.prototype);
console.log(person1.__proto__);
// ! disaridan,objeye degisken,metod,fonksiyon atayabiliriz..
Person.prototype.graduadeStatus = true;

// //* INHERİTANCE

// //? Sub-class

function Patient(name, birthday, location, status) {
  Person.call(this, name, birthday, location);
  //! Patient kalıbı ile yeni instance oluşturduk.Ortak olan keysleri Book kalıbından cagirdik,tekrardan yazmak yerine.
  this.status = status;
}

// ! person kalıbından miras olarak fonksiyon almak istersek default olarak alamıyoruz.Bunun icin..
Patient.prototype = Object.create(Person.prototype);
// ! sığ kopya yapıyoruz..sonra çağırabiliyoruz

const patient1 = new Patient("Ahmet", 1992, "Akçakoca", "Serious");
console.log(patient1);

console.log(patient1.getSummary());
console.log(patient1.getAge());

// function Magazine(title, author, year, month) {
//   Book.call(this, title, author, year);
//   //? Book objesini cagiriyoruz.Book objesindeki ortak degerleri bir daha yazmamak icin
//   this.month = month;
//   //*? burada da ekstra özellik vermek isterken yazıyoruz.Person-Hasta-Hemsire-Doktor arasindaki iliski gibi.Hepsinde ortak özellikler var ama farklı özelliklerini biz üretiyoruz.Benzerleri birbirinden türetebiliriz.
// }
// // ! prototype lari miras almak icin Object.create() metodu kullanılabilir.
// Magazine.prototype = Object.create(Book.prototype);

// const mag1 = new Magazine("Scientific Research", "Einstein", 1926, "Sep");
// console.table(mag1);
// // ! prototype lar dogrudan miras olarak gelmiyor
// console.log(mag1.getSummary());
// console.log(mag1.getAge());
// console.log(mag1.price);
