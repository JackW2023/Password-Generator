// Original JS

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Function to generate password based on user criteria
function generatePassword() {
  // Prompt the user for password criteria
  // The parseInt change the stuff in the parentheses into integer  
  var length = parseInt(prompt("Enter the desired password length (between 8 and 128):"));

  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please enter a valid password length between 8 and 128.");
    return "";
  }

  var useUppercase = confirm("Do you want to include uppercase letters?");
  var useLowercase = confirm("Do you want to include lowercase letters?");
  var useNumbers = confirm("Do you want to include numbers?");
  var useSpecialChars = confirm("Do you want to include special characters?");

  if (!useUppercase && !useLowercase && !useNumbers && !useSpecialChars) {
    alert("You must select at least one character type.");
    return "";
  }

  // Generate the password based on the criteria
  var charset = "";
  if (useUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (useLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
  if (useNumbers) charset += "0123456789";
  if (useSpecialChars) charset += "!@#$%^&*()_+";

  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);