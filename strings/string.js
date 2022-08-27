//! String Literals (klasik yöntem) ile tanımlama.(Primitive)
const str1 = "Ahmet";
const str2 = "Sari";
// console.log(str1 + " " + str2);
console.log(str1, typeof str1);

//! Non-primitive string tanımlama.(Object)

const str3 = new String("Object olarak tanimlama");
console.log(typeof str3);

//! String birleştirme (Concatination)
const sayi = 3;
const str4 = str1 + str2 + str3 + sayi;
console.log(str4);
