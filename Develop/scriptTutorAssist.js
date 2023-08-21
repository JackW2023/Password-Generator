// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];


// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordBox = document.querySelector("#password");

function generatePassword() {
  var password = ''
  var allowedChars = []

  // prompt for characters
  var uppercase = confirm("Do you want to use upper case");
  var lowercase = confirm("Do you want to use lower case");
  var special = confirm("Do you want to use special character");
  var numbers = confirm("Do you want to use numbers");

  if (!uppercase && !lowercase && !special && !numbers) {
    alert("need to pick at less one set of characters")
    return '';
  }

  if (uppercase) {
    allowedChars = [...allowedChars, ...upperCasedCharacters]
    console.log(allowedChars)
  }

  if (lowercase) {
    allowedChars = [...allowedChars, ...lowerCasedCharacters]
    console.log(allowedChars)
  }

  if (special) {
    allowedChars = [...allowedChars, ...specialCharacters]
    console.log(allowedChars)
  }

  if (numbers) {
    allowedChars = [...allowedChars, ...numericCharacters]
    console.log(allowedChars)
  }

  var attempts = 0;
  var length = 0;
  while (length < 8 || length > 128) {
    if (attempts > 0) {
      alert("Your password must be between 8 and 128 characters!")
    }
    attempts++;
    var length = prompt("Select your password length between 8-128 characters", 12);
  }


  for (i = 0; i < length; i++) {
    var randomNumber = Math.floor(Math.random() * allowedChars.length);
    console.log('random index: ', randomNumber);
    var randomChar = allowedChars[randomNumber]
    console.log('random char', randomChar);
    password += randomChar
  }



  return password

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  passwordBox.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
