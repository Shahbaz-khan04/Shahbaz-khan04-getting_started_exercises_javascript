let current_users = ["asad", "fahd", "saif", "shahbaz", "bilal"];
let new_users = ["salamat", "ASAD", "nasir", "huma", "SAIF"];
let flag;
for (let i = 0; i < new_users.length; i++) {
  flag = true;
  console.log("--------------------------");
  for (let j = 0; j < current_users.length; j++) {
    if (new_users[i].toLowerCase() == current_users[j]) {
      console.log(
        new_users[i] + " this person will need to enter a new username. "
      );
      flag = false;
      break;
    }
  }
  if (flag == true) console.log(new_users[i] + " the username is available.");
}
