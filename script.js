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
  var lowercaseChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  var uppercaseChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  var numberChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  var symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '=', '-', '{', '}', '[', ']', ':', ';', ',', '.', '<', '>', '/', '?', '~', '`']
 
if (lowercase) {
  chars = chars.concat(lowercaseChars)
}

if (uppercase) {
  chars = chars.concat(uppercaseChars)
}

if (numbers) {
  chars = chars.concat(numberChars)
}

if (specialChars) {
  chars = chars.concat(symbols)
}



 var result =[]


for (let i = 0; i < lengthNum; i++) {

var randomChar = chars[Math.round(Math.random() * chars.length)]
console.log(randomChar)
  result.push(randomChar)

  
}
 
 console.log(result)




  
  return result.join("")
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
