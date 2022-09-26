let isError = false;

getTechNews = async () => {
  const apiKey = "6cefe118ac8c443ba227b92f540b086d";
  //   const country
  //   const category
  const url = `https://newsapi.org/v2/top-headlines?country=tr&category=technology&apiKey=${apiKey}`;
  //* bir hata olustugunda kullanıcı bu hatayı göremiyor,hata console da gözüküyor.biz bu hatayı kullanıcıya bilgi vermek icin DOM'a basmamiz gerekiyor.bunun icin flag mantığıyla bir degisken olusturup kontrol edelim.

  try {
    const res = await fetch(url);
    //   console.log(res);
    if (!res.ok) {
      isError = true;
      //* throw new Error,hatayı consola yazdırır.biz kullanıcıya bilgi vermek için DOM'a basmak istiyoruz
      //   throw new Error(`Something went wrong.Error Code --> ${res.status}`);
      //* burada bir hata fırlattıgimizda program direk catch'e gidecektir.bu yüzden asagidaki dom'a basma fonksiyonu calismayacak ve ekrana bilgi veremeyecegiz bu yüzden hata fırlatma kodunu siliyoruz onun yerine kullanıcıya viz bilgi veriyoruz
    }
    const data = await res.json();
    //! eger await yazmazsak verinin gelmesini beklemeden asagi gecebilir ve veriler null gözükebilir
    // console.log(data.articles);
    printToDOM(data.articles);
  } catch (error) {
    console.log(error);
  }
};

printToDOM = (news) => {
  console.log(news);
  const newsLists = document.querySelector("#news-lists");
  if (isError) {
    newsLists.innerHTML += `<h2> Error occured.</h2>
    <img src="./img/404.png" alt="">`;
    return;
    //* bu sekilde return dersek,artik asagi satira bakma anlamına gelir
  }
  news.forEach((item) => {
    const { title, description, urlToImage, url } = item; //! dest..
    newsLists.innerHTML += `
    <div class="col-sm-6 col-md-4 col-lg-3">
     <div class="card" >
  <img src="${urlToImage}" class="card-img-top" width="50px "alt="...">
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <p class="card-text">${description}</p>
    <a href="${url}" class="btn btn-primary">Details</a>
  </div>
</div>
</div>
    
    
    
    `;
  });
};

// getTechNews();
//* fonksiyonu bu şekilde kullanmak yerine "hersey yüklendikten sonra cagir" sekline getirebiliriz

window.addEventListener("load", getTechNews);
