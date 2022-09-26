//*========================================
//*             3- FETCH API
//*========================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamizi ve cevaplari yontebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda
//? gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.

console.log("FETCH");

// https://api.github.com/users

fetch("https://api.github.com/user")
//   .then((response) => response.json())
  .then((response) => {
    
    response.json())
  }
  .then((data) => console.log(data))
  .catch(() => console.log("Something went wrong"));
//   .catch((err) => console.log(err));
// ? ham hali response,data olarak döndüğü zaman data diyoruz,best practise da
// ? 401 authentication
// ? 500 ler server la ilgili hatalardır
// ? 200 ler basarili durumlardır
