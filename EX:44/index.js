function itemsOfSandwich(itemsArray) {
  console.log("Following are the items inside your sandwich:");
  for (let i = 0; i < itemsArray.length; i++) {
    console.log(i + 1 + ". " + itemsArray[i]);
  }
}
let arr = ["beef patty", "tomato", "Lettuce", "Mayonise", "Ketchup"];
itemsOfSandwich(arr);
