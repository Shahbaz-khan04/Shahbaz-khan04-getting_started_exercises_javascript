function show_magicians(arr1) {
  for (i = 0; i < arr1.length; i++) console.log(arr1[i]);
}
function make_great(arr2) {
  for (j = 0; j < arr2.length; j++) arr2[j] = "the great  " + arr2[j];
}
let array = [
  "David Copperfield",
  "Doug Henning",
  "Penn & Teller",
  "David Blaine",
  "Lance Burton",
];
let array2 = [
  "David Copperfield",
  "Doug Henning",
  "Penn & Teller",
  "David Blaine",
  "Lance Burton",
];
make_great(array2);
show_magicians(array);
show_magicians(array2);
