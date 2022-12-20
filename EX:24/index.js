let name = "Shahbaz";
let a = 5,
  b = 5;
let arr = [2, 4, 7, 5, 9];
console.log("Tests for equality and inequality with strings");
console.log("Is name == 'Shahbaz' I predict yes");
console.log("name == 'Shahbaz' is true.");
console.log("Is name != 'Shahbaz' I predict No");
console.log("name != 'Shahbaz' is false.");
console.log("Tests using the lower case function");
console.log("Is name.toLowerCase() == 'shahbaz' I predict yes");
console.log("name.toLowerCase() == 'shahbaz' is true.");
console.log("Is name.toLowerCase() != 'shahbaz' I predict No");
console.log("name.toLowerCase() != 'shahbaz' is false.");
console.log(
  "Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to"
);
console.log("Is a == b I predict yes");
console.log("a == b is 'true'");
console.log("Is a != b I predict No");
console.log("a != b is 'false'");
console.log("Is a > b I predict No");
console.log("a > b is 'false'");
console.log("Is a < b I predict No");
console.log("a < b is 'false'");
console.log("Is a >= b I predict yes");
console.log("a >= b is 'true'");
console.log("Is a <= b I predict yes");
console.log("a <= b is 'true'");
console.log("Tests using 'and' and 'or' operators");
console.log("Is a= 5 && b= 5  I predict yes");
console.log("a= 5 && b= 5 is 'true'");
console.log("Is a= 10 || b= 10  I predict No");
console.log("a= 10 || b= 10 is 'false'");
console.log("Test whether an item is in a array");
let notFound = true;
for (let i = 0; i < 5; i++) {
  if (arr[i] == 7) {
    console.log("7 is in a array.");
    notFound = false;
  } else if (arr[i] == 11) notFound = false;
}
if (notFound == true) {
  console.log("Test whether an item is not in a array");
  console.log("11 is not in a array.");
}
