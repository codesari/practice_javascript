//! Example print numbers from 0 to 7 using break
//!break

// let num = 0;
// while (true) {
//   alert(num);
//   num++;
//   if (num == 7) break;
// }

//! What is the output of the following code?
//!continue
var sum = 0;
for (var i = 3; i < 7; i++) {
  sum += i;
  if (i === 3 || sum > 10) {
    continue;
  }
  console.log(i);
}
