// //todo 6- Write a JavaScript function to hide email addresses to protect from unauthorized user.
// // console.log(protect_email("robin_singh@example.com"));
// // "robin...@example.com"

// const protect_email = (str) => {
//   let arr = str.split("@");
//   let firstPart = arr[0];
//   let secondPart = arr[1];
//   let average = firstPart.length / 2;
//   let firstPartOne = firstPart.substr(0, average);
//   let firstPartTwo = firstPart.substr(average);
//   let arr2 = firstPartOne.split("");
//   let arr3 = firstPartTwo.split("");
//   for (i = 1; i < arr2.length; i++) {
//     arr2[i] = "*";
//   }
//   for (i = 1; i < arr3.length; i++) {
//     arr3[i] = "*";
//   }
//   arr2 = arr2.join("");
//   arr3 = arr3.join("");
//   return console.log(arr2 + arr3 + "@" + secondPart);

//   //   for (let i = 0; i < 5; i++) {
//   //     arr[i] = str[i];
//   //   }
//   //   for (let i = 5; i < str.length; i++) {
//   //     arr[i] = "*";
//   //   }
// };
// protect_email("ahmtsr81@gmail.com");

//todo 7- Write a JavaScript function to parameterize a string. Go to the editor
// console.log(string_parameterize("Robin Singh from USA."));
// "robin-singh-from-usa"

const parameterize = (str) => {
  let result = str.toLowerCase().split(" ").join("-");
  return console.log(result);
};

parameterize("bu yazdigim cümleyi parametre haline getir");

//todo camelCase

const camelCase = (str) => {
  let first = str.split(" ")[0];
  let second = str
    .split(" ")
    .filter((item) => str.indexOf(item) != 0)
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
    .join("");

  return console.log(first + second);
};

camelCase("her ne girersen gir camel case olacak");
camelCase("kod calismasi cok zamanimi aliyor");

//camelCase kodu en az 2 saatimi aldı 😡
