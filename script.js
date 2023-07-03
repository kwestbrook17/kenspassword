// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  
function generatePassword() {
  var length = prompt("Enter the length of the password (between 8 and 128 characters):");
  if (length < 8 || length > 128) {
    alert("Please enter a valid length between 8 and 128 characters.");
    return;
  }

  var uppercase = confirm("Include uppercase letters?");
  var lowercase = confirm("Include lowercase letters?");
  var numbers = confirm("Include numbers?");
  var specialChars = confirm("Include special characters?");

  if (!uppercase && !lowercase && !numbers && !specialChars) {
    alert("Please select at least one character type.");
    return;
  }

}

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
