// Declaring Necessary variable 
var uppercasedcharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowercasedcharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var specialcharacters = [ '@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
var numbers = ['0','1','2','3','4','5','6','7','8','9'];



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

    // Checking for the length
    var attempt = 0 
    var length = parseInt(prompt("Please states the password length, it could only be between 8-128 characters"));

    while (isNaN(length) || length < 8 || length > 128) {
        if(!attempt == 0) {
            alert("Please Enter a valid length")
            var length = parseInt(prompt("Please states the password length, it could only be between 8-128 characters"))
        }
        reattempt = 1;
        attempt = reattempt;
    }
    
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
