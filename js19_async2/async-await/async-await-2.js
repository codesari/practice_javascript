getTechNews = async () => {
  const apiKey = "6cefe118ac8c443ba227b92f540b086d";
  //   const country
  //   const category
  const url = `https://newsapi.org/v2/top-headlines?country=tr&category=technology&apiKey=${apiKey}`;

  try {
    const res = await fetch(url);
    //   console.log(res);
    if (!res.ok) {
      throw new Error(`Something went wrong.Error Code --> ${res.status}`);
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
