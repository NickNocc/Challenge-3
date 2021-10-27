// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// var length = function() {
//   var userLength = window.prompt("How many characters would you like in your password?");
//   var userPassword = "";
//   for (var i = 0; i < userLength; i++)
// };

var mods = function() {
  var low = false;
  var upp = false;
  var numb = false;
  var spec = false;
  var go = false;
   while (go === false) { 
    var userMods = window.prompt(
      "Type 'Lowercase', 'Uppercase', 'Numbers', or 'Special' to add or remove it from these attributs to your password. Enter 'Go' to generate your password."
    );
    if (userMods == "" || userMods == "null") {
      window.alert("Please enter a valid response");
      mods();
    }
    var userMods = userMods.toLowerCase;
    switch(userMods) {
      case "lowercase":
        if (!low) {
          low = true;
          window.alert("Your password will NOW contain lowercase letters");
          console.log(low);
          break;
        }
        else {
          low = false;
          window.alert("Your password will NOT contain lowercase letters");
          console.log(low);
          break;
        }
      case "uppercase":
        if (!upp) {
          upp = true;
          window.alert("Your password will NOW contain uppercase letters");
          console.log(upp);
          break;
        }
        else {
          upp = false;
          window.alert("Your password will NOT contain uppercase letters");
          console.log(upp);
          break;
        }
      case "numbers":
        if (!numb) {
          numb =  true;
          window.alert("Your password will NOW contain numbers");
          console.log(numb);
          break;
        }
        else {
          numb = false;
          window.alert("Your password will NOT contain numbers");
          console.log(numb);
          break;
        }
      case "special":
        if (!spec) {
          spec = true;
          window.alert("Your password will NOW contain special characters");
          console.log(spec);
          break;
        }
        else {
          spec = false;
          window.alert("Your password will NOT contain special characters");
          console.log(spec);
          break;
        }
      case "go":
        go = true;
        break;
    }
   }
   writePassword();
};

// Add event listener to generate button
generateBtn.addEventListener("click", mods);
