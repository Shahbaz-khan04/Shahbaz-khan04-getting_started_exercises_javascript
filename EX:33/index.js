let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let ordinalNumber = "";
for (let i = 1; i <= numbers.length; i++) {
  if (i === 1) ordinalNumber += i + "st ";
  else if (i === 2) ordinalNumber += i + "nd ";
  else if (i === 3) ordinalNumber += i + "rd ";
  else ordinalNumber += i + "th ";
}
console.log(ordinalNumber);
