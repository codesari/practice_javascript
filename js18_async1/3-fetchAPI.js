// fetch("https://api.github.com/users").then((res) => console.log(res));

// * bu sekilde fetch ile response nin ham halini elde ederiz,datasını cekmek icin json kullanmamız gerekiyor,bu yüzden bir then() daha atıp json lasmis veriyi data isimli parametreyle alıyoruz
// fetch("https://api.github.com/user")
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// ! fetch,optimist bir yapı.cevap geldigi müddetce kendini basarılı sayıyor,hatalar bu yüzden catch e girmiyor.hatayı catch'de göstermek için gelen responsa üzerinden status durumunu kontrol ettiriyoruz.ok degiskeni true ve false degeri alır.true ise baglanti basarili olmustur,false ise basarisiz
fetch("https://api.github.com/user")
  .then((res) => {
    console.log(res);
    if (!res.ok) {
      throw Error("Something went wrong");
    } else {
      //? Hata yoksa veriyi json lastir.
      return res.json();
    }
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// fetch("https://api.github.com/users")
//   //? aksi belirtilmedikçe burası GET metoduduriGET harici bir kullanım icin method:POST diye belirtmek gerekir

//   .then((response) => {
//     response.json();
//   })
//   .then((data) => console.log(data))
//   .catch(() => console.log("Something went wrong"));
// //   .catch((err) => console.log(err));

// // ? ham hali response,data olarak döndüğü zaman data diyoruz,best practise da
// // ? 401 authentication
// // ? 500 ler server la ilgili hatalardır
// // ? 200 ler basarili durumlardır
