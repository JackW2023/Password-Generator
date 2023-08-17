// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordBox = document.querySelector("#password");

function generatePassword() {
  var password = 'wegwgos'

  // modify password

  return password

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  passwordBox.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
