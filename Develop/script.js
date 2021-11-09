// Assignment code here
// Our global strings that we add to based on what paremeters the user selects
var specialCharacters = "";
var uppercaseCharacters = "";
var lowercaseCharacters = "";
var numberList = "";
var length = 0;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var mods = function() {
  var low = false;
  var upp = false;
  var numb = false;
  var spec = false;
  var go = false;
  // Gets length of user password
  length = parseInt(window.prompt("How many characters would you like in your password (8-128)?"));
  // Ensures the user cannot put in an inporper response
  if (length == "" || length == "null" || !length || length < 8 || length > 128) {
    window.alert("Please enter a valid response");
    mods();
  }
   while (go === false) { 
    var userMods = window.prompt(
      "Type 'Lowercase', 'Uppercase', 'Numbers', or 'Special' to add or remove it from these attributes to your password. Enter 'Go' to generate your password."
    );
    if (userMods == "" || userMods == "null") {
      window.alert("Please enter a valid response");
      mods();
    }
    // Changes user input to lowercase for ease of use
    userMods.toLowerCase;
    switch(userMods) {
      // Puts user text in lowercase to prevent caps errors
      case "lowercase":
        // if any parameter is true, it will be toggled on and can be toggled off if the user inputs the attribute again
        if (!low) {
          low = true;
          window.alert("Your password will NOW contain lowercase letters");
          break;
        }
        else {
          low = false;
          window.alert("Your password will NOT contain lowercase letters");
          break;
        }
      case "uppercase":
        if (!upp) {
          upp = true;
          window.alert("Your password will NOW contain uppercase letters");
          break;
        }
        else {
          upp = false;
          window.alert("Your password will NOT contain uppercase letters");
          break;
        }
      case "numbers":
        if (!numb) {
          numb =  true;
          window.alert("Your password will NOW contain numbers");
          break;
        }
        else {
          numb = false;
          window.alert("Your password will NOT contain numbers");
          break;
        }
      case "special":
        if (!spec) {
          spec = true;
          window.alert("Your password will NOW contain special characters");
          break;
        }
        else {
          spec = false;
          window.alert("Your password will NOT contain special characters");
          break;
        }
      case "go":
        go = true;
        if (low) {
          lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
        }
        if (upp) {
          uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }
        if (numb) {
          numberList = "0123456789";
        }
        if (spec) {
          specialCharacters = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
        }
        if (low == false && upp == false && numb == false && spec == false){
          go = false;
          window.alert("Please select at least one attribute");
        }
        break;
      default:
        window.alert("You did not pick a valid option. Try again.");
    }
   }

   writePassword();
};
// Displays the password by changing the text of #password
var writePassword = function() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  window.alert("Password Generated!");
};

// Puts all of our strings together and randomly selects one character at a time, then generates and returns password 
var generatePassword = function() {
  var userPassword = "";
  var passwordOptions = (specialCharacters + lowercaseCharacters + uppercaseCharacters + numberList);
  for (var i = 0; i <= length; i++) {
  userPassword += passwordOptions.charAt(Math.random() * passwordOptions.length);
  }
  return userPassword;
};

// Add event listener to generate button
generateBtn.addEventListener("click", mods);
