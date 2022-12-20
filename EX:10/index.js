// EX:3
let name1 = "shahbAz kHan";
let nameDup = name1;
console.log(nameDup.toLowerCase());
console.log(nameDup.toUpperCase());
// Now for title case
arr = name1.split(" ");
for (let i = 0; i < arr.length; i++) {
  arr1 = arr[i].charAt(0).toUpperCase();
  arr[i] = arr1 + arr[i].slice(1).toLowerCase();
}
let output = "";
for (let j = 0; j < arr.length; j++) {
  output += arr[j] + " ";
}
console.log(output);

// EX: 6
let name2 = "\tShahbaz\n \tKhan  ";
// using regex
console.log(name2.replace(/\s+/g, ""));

// EX:7,8
console.log(5 + 3); //8
console.log(10 - 2); //8
console.log(2 * 4); //8
console.log(16 / 2); //8
