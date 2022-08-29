//? concat()
// ! concat() method is used to combine two or more arrays

const ary1 = ["Bu", "bir", "js"];
const ary2 = ["array", "metod", "calismasidir"];

const new_ary = ary1.concat(ary2);
console.log(new_ary);

// ! concat ile bir değer de ekleyebiliriz
const new_ary2 = new_ary.concat("dikkatle dinleyin!", ary1);
console.log(new_ary2);

//? join()
// ! join (birleşme noktası)

let arr = ["a", "b", "c", "d"];
console.log(arr);
console.log(arr.join(""));
