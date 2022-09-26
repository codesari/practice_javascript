getTechNews = async () => {
  const apiKey = "6cefe118ac8c443ba227b92f540b086d";
  //   const country
  //   const category
  const url = `https://newsapi.org/v2/top-headlines?country=tr&category=technology&apiKey=${apiKey}`;

  const res = await fetch(url);
  console.log(res);
  const data = await res.json();
  //! eger await yazmazsak verinin gelmesini beklemeden asagi gecebilir ve veriler null gözükebilir
  console.log(data.articles);
};

getTechNews();
