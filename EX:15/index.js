let invited_persons = ["Saif", "Asad", "Fahd"];

invitation(invited_persons);

console.log(
  invited_persons[2] +
    " can not come. Modifying my list of guests with Salamat inplace of " +
    invited_persons[2] +
    "\n"
);
invited_persons[2] = "Salamat";

invitation(invited_persons);

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
