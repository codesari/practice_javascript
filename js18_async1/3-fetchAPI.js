// fetch("https://api.github.com/users").then((res) => console.log(res));

// * bu sekilde fetch ile response nin ham halini elde ederiz,datasını cekmek icin json kullanmamız gerekiyor,bu yüzden bir then() daha atıp json lasmis veriyi data isimli parametreyle alıyoruz
// fetch("https://api.github.com/user")
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
//
// ! fetch,optimist bir yapı.cevap geldigi müddetce kendini basarılı sayıyor,kendine yanlızca response gelmezse basarisiz sayıyor.hatalar bu yüzden catch e girmiyor 401 vs...hatayı catch'de göstermek için gelen responsa üzerinden status durumunu kontrol ettiriyoruz.ok degiskeni true ve false degeri alır.true ise baglanti basarili olmustur,false ise basarisiz
// * url sonu : users -->true
fetch("https://api.github.com/users")
  .then((res) => {
    console.log(res);
    // * Error Handling
    if (!res.ok) {
      throw Error("Something went wrong");
    } else {
      //? Hata yoksa veriyi json lastir.
      return res.json();
      //? res.json() --> data
    }
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

//! fetch,asenkron bir yapı,res.json() ile okudugumuz verileri fetch dısında göstermek istediğimiz zaman ve bu yapı senkron olacağından verileri göremiyoruz.çünkü önce senkron islem calisiyor daha sonra fetch den veriler geliyor dolayısıyla görmek istediğimiz veriyi göremiyoruz

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
