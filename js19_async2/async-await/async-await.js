//! async-await yapısı yazım sitili senkron gibi..ama kendisi asenkron bir yapı
// ! görünüşte senkron,calismasi asenkron
// ! thunder eklentisi vscode üzerinden postman gibi yazılımlara ihtiyac duymadan islemlerimizi yapmamıza yarayan eklenti

//  callback-micro task-macrotask (calisma sirasi)
let isError = false;

const getNews = async function () {
  // ! hata almak icin apı keyde oynama yapabilirsin
  const API_KEY = "6cefe118ac8c443ba227b92f540b086d";
  const url =
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=" + API_KEY;
  // const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=`${API_KEY}`"

  try {
    const res = await fetch(url);
    if (!res.ok) {
      isError = true; //! bu kod isError yazımından sonra geldi
      // ? fetch in yapısında hata fırlatma doğrudan olmadığı icin,hata fırlatmayı biz kendimiz yazıyoruz
      // ? hata kodunu da yazdırmak istersek..
      //   throw new Error(`Something went wrong ${res.status}`); //! burada hata fırlatınca program catch(error) a geldi sonlandı,dolayısıyla renderNews fonk calismadı.bu kod return gibi davrandı.o yüzden bu kısmı iptal edelim
    }
    // ? alınan verileri DOM'a basmak icin render fonksiyonu oluşturduk

    const data = await res.json();
    console.log(data.articles);
    renderNews(data.articles);
  } catch (error) {
    console.log(error);
  }
};

const renderNews = (news) => {
  const newsList = document.getElementById("news-list");
  if (isError) {
    newsList.innerHTML += `
    <h2> News Can not be fetched</h2>
    <img src="./img/404.png" alt="">`;
  }
  news.forEach((item) => {
    // console.log(item);
    const { title, description, urlToImage, url } = item;
    //? destruction..
    newsList.innerHTML += `
    <div class="col-md-6 col-lg-4 col-xl-3">
    <div class="card">
  <img src="${urlToImage}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <p class="card-text">${description}</p>
    <a href="${url}" target="_blank" class="btn btn-primary">Details</a>
  </div>
</div>
</div>
    
 
    
    `;
  });
};
// getNews();
window.addEventListener("load", getNews);
// ? hersey yüklendikten sonra getNews() fonksiyonun cagirir
