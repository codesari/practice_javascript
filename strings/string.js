// //! String Literals (klasik yöntem) ile tanımlama.(Primitive)
// const str1 = "Ahmet";
// const str2 = "Sari";
// // console.log(str1 + " " + str2);
// console.log(str1, typeof str1);

// //! Non-primitive string tanımlama.(Object)

// const str3 = new String("Object olarak tanimlama");
// console.log(typeof str3);

// //! String birleştirme (Concatination)
// const sayi = 3;
// const str4 = str1 + str2 + str3 + sayi;
// console.log(str4, typeof str4);

// const str1 = "Hello";
// const str2 = "World";

// console.log(str1.concat(str2));

// const str3 = "hepsi kucuk harf";
// console.log(str3.toLocaleUpperCase("en"));
// en yapıldığında küçük i yi buyuk I yapar.tr olarak da ayarlanabilir
// burada str3 ün değeri değişmez(immutable).ille de değiştirmek istiyorsak atama yapmamız gerekir(assign)

const esitMi = (str1, str2) => {
  return str1.toLocaleUpperCase() === str2.toLocaleUpperCase()
    ? "Esittir"
    : "Esit degildir";
};
// arrow fonksiyonun da süslü parantez kullanılırsa return kullanmak zorundayız aksi takdirde undefine sonucu verir..

console.log(esitMi("adas", "adas"));
