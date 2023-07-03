// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

  
function generatePassword() {
  var length = prompt("Enter the length of the password (between 8 and 128 characters):");
  // var strNum = "12"
  var lengthNum = Number.parseInt(length)
  console.log(typeof length, typeof lengthNum)
  if (lengthNum < 8 || lengthNum > 128) {
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

  var chars = []
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz".split("")
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
  var numberChars = "1234567890".split("")
  var symbols = "!@#$%^&*()_+=-{}[]:;,.<>/?~`".split("")
 
if (lowercase) {
  chars = chars.concat(lowercaseChars)
}



 var result =[]


for (let i = 0; i < lengthNum; i++) {
  console.log(chars[i])
var randomChar = chars[Math.round(Math.random() * chars.length)]
console.log(randomChar)
  result.push(randomChar)

  
}
 
 console.log(result)




  
  return result.join(" ")
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
