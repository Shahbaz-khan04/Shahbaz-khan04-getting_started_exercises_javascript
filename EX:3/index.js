let names = "shahbAz kHan";
let nameDup = names;
console.log(nameDup.toLowerCase());
console.log(nameDup.toUpperCase());
// Now for title case
arr = names.split(" ");
for (let i = 0; i < arr.length; i++) {
  arr1 = arr[i].charAt(0).toUpperCase();
  arr[i] = arr1 + arr[i].slice(1).toLowerCase();
}
let output = "";
for (let j = 0; j < arr.length; j++) {
  output += arr[j] + " ";
}
console.log(output);
