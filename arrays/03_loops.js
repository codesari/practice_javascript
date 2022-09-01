const arrNum1 = [84, -3, 24, 62, 15, -33, 47, -55];

const negative = [];
const positive = [];

const diziBol = (x) => {
  for (let i = 0; i < x.length; i++) {
    if (x[i] > 0) {
      positive.push(x[i]);
    } else {
      negative.push(x[i]);
    }
  }
  console.log("Orjinal dizi : " + arrNum1);
  console.log("Pozitif dizi : " + positive);
  console.log("Negatif dizi : " + negative);
};

diziBol(arrNum1);

//  ----------------------------------------------------------

// yukarıdaki arrNum1 dizisinin ortalama degerini hesapla

let sum = 0;
let average = 0;
const calcAvrg = (x) => {
  for (let i = 0; i < x.length; i++) {
    sum += x[i];
  }
  average = sum / x.length;
  console.log("Average is : " + average);
};

calcAvrg(arrNum1);

//* ======================================================
//*                   FOR-IN LOOP
//* ======================================================

//*-------------------------------------------------------
//* SORU: Ogrenciler dizisinde ogrenci isimleri saklanmaktadir.
//* ogrencileri aramamizi saglayacak ve aranilan ogrenciden
//* ne kadar sayida bulunuldugunu  ana programa döndürecek bir
//* fonksiyonu yaziniz. Eger aranilan isimde bir ogrenci yok ise
//* fonksiyon "ogrenci bulunamadi" dondurulmelidir.
//*--------------------------------------------------------
