function car(manufacturer, modelName, ...rest) {
  let obj = {
    manufacturedBy: manufacturer,
    modelNo: modelName,
  };
  for (let i = 0; i < rest.length; i++) {
    Object.assign(obj, rest[i]);
  }
  return obj;
}
let car_details = car(
  "Honda",
  "ybrG",
  { color: "black", owner: "Shahbaz Khan" },
  { color2: "blue", owner2: "Asad Khan" }
);
console.log(car_details);
