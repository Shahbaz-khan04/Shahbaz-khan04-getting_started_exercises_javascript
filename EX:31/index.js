let arr = [];
if (arr.length > 0) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "admin")
      console.log("Hi " + arr[i] + " What would you like to know?");
    else console.log("welcome back " + arr[i] + " How are you? ");
  }
} else console.log("We need to find some users!");
