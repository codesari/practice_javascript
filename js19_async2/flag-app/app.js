const fetchCountryByName = (name) => {
  const url = `https://restcountries.com/v3.1/name/${name}`;
  fetch(url)
    .then((res) => {
      if (!res.ok) {
        renderError(`Something went wrong :${res.status}`);
        throw new Error();
      }
      //! burada return etmemiz lazım,alsi takdirde diğer then'e geçmez yani diğer then'e return etmez
      return res.json();
    })
    .then((data) => renderCountries(data))
    .catch((err) => console.log(err));
};
const renderError = () => {
  const countryDiv = document.querySelector(".countries");
  countryDiv.innerHTML += `
    <h2>Countries can not fetched</h2>
    <img src="./img/404.png" alt="" />
  `;
};

const renderCountries = (data) => {
  //   console.log(data);
  const countryDiv = document.querySelector(".countries");
  const {
    capital,
    currencies,
    languages,
    region,
    name: { common },
    flags: { svg },
  } = data[0];
  console.log(Object.values(languages)); //! dilleri string olarak almak icin object.value tapıyoruz.language nin icinde nasıl saklandıgına bakıyoruz yani ,dizi mi obje mi string mi bunlar önemli
  //   ! Object icindeki tüm verileri cekeceksen--> object.value....
  countryDiv.innerHTML += `
  <div class="card mx-auto shadow-lg" style="width: 18rem">
  <img src="${svg}" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">${common}</h5>
    <p class="card-text">${region}
    </p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"><i class="fa-solid fa-comments"></i>${capital}</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
    
    
    
    
    `;
};
fetchCountryByName("turkey");
fetchCountryByName("usa");
fetchCountryByName("swe");
fetchCountryByName("rus");
fetchCountryByName("deu");
