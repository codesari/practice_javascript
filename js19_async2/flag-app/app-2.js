const getCountryInfo = async (name) => {
  const url = `https://restcountries.com/v3.1/name/names`;

  try {
    const res = await fetch(url);
    // console.log(res);
    if (!res.ok) {
      printError(`Something went wrong.Error code ${res.status}`);
      throw new Error();
    }
    const data = res.json();
    console.log(data);
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
getCountryInfo("turkey");
