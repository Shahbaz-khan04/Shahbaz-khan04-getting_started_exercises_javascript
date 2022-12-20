let invited_persons = ["Ammi", "Saif", "Fahd"];
invitation(invited_persons);
console.log(
  invited_persons[2] +
    " can not come. Modifying my list of guests with Salamat inplace of " +
    invited_persons[2] +
    "\n"
);
invited_persons[2] = "Salamat";
invitation(invited_persons);
console.log(
  "I found a bigger dinner table. So I should invite some more guests.\nInviting Baba,Asad ,Afsha also.\n"
);
invited_persons.unshift("Baba");
invited_persons.push("Afsha");
invited_persons.splice(3, 0, "Asad");
invitation(invited_persons);
console.log(
  "Oh no! The new dinner table won't arrive in time. I will only invite two guests now.\n"
);
while (invited_persons.length > 0) {
  if (invited_persons.length <= 2) {
    let i = invited_persons.length;
    console.log(invited_persons[i - 1] + " You're still invited.");
    invited_persons.pop();
  } else {
    let poped_person = invited_persons.pop();
    console.log("Im sorry " + poped_person + " I can't invite you to dinner.");
  }
}
console.log(invited_persons);

function invitation(invited_persons) {
  for (var i = 0; i < invited_persons.length; i++) {
    console.log(
      "Hi " +
        invited_persons[i] +
        " It would be a pleasure if you for dinner at our house."
    );
  }
  console.log("\n");
}
