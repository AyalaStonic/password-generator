
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  // list of all characters, numbers & symbols available to generate password
    var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var symbol = ["!", "@", "$", "%", "&", "£", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "#", "^", "_", "~", "|"];
    var userChoice = [];

// ask user for their desired password length
    var characterPassword = window.prompt("How many characters would you like your password to be?it must be more than 5 characters");
}
// ensure password
if (isNaN(characterPassword) || characterPassword < 5) {
  window.alert("Password length must be a number more than 5. Please try again.");
  return generatePassword();
}

// list of user input variables
var confirmLowercase = window.confirm("Would you like to include lowercase letters in your password?");
var confirmUppercase = window.confirm("Would you like to include uppercase letters in your password?");
var confirmNumbers = window.confirm("Would you like to include numbers in your password?");
var confirmSymbols = window.confirm("Would you like to include special characters in your password?");

// lowercase, uppercase, and/or special characters
if (confirmLowercase) {
  userChoice = userChoice.concat(alphaLower);
}
if (confirmUppercase) {
  userChoice = userChoice.concat(alphaUpper);
}
if (confirmNumbers) {
  userChoice = userChoice.concat(number);
}
if (confirmSymbols) {
  userChoice = userChoice.concat(symbol);
}

// validate input
console.log(userChoice);

    generatePassword();