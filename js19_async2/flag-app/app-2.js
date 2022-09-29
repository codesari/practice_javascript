const getCountryInfo = async (name) => {
  const url = `https://restcountries.com/v3.1/name/${name}`;

  try {
    const res = await fetch(url);
    // console.log(res);
    if (!res.ok) {
      printError(`Something went wrong.Error code ${res.status}`);
      throw new Error();
    }
    const data = await res.json();
    // console.log(data);
    printData(data);
  } catch (error) {
    console.log(error);
  }
};

printError = (msg) => {
  const countriesDiv = document.querySelector(".countries");
  const errorMessage = msg;

  countriesDiv.innerHTML += `<h2>${errorMessage} </h2>
    <img src="./img/404.png" alt="" />`;
};
printData = (data) => {
  console.log(data);
  const {
    capital,
    currencies,
    flag: { svg },
    languages,
    name: { common },
  } = data[0];
  //* objelerin keys veya value vey hepsini (entries) lerini çekmek için..
  //   console.log(currencies);
  //   console.log(Object.entries(currencies));
  //   console.log(Object.values(currencies));
  //   console.log(Object.keys(currencies));

  console.log(Object.values(currencies)[0].name);

  //* örnek ulasma kodu (hard coded) -->   console.log(Object.values(data[0].currencies.TRY.symbol));
};
getCountryInfo("turkey");

// ! ÖDEV : ülke isimlerini apiden çek döngü ile selectin option value göm
// ! seçili ülke değişeceği zaman addEvenListener("change") ile ya da onchange metodu kullan
