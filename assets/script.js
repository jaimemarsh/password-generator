// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//make generatePassword()

function generatePassword() {
  let length = 8;
  let choiceArry = [];
  let specialCharactersArry = ['!', '@', '$', '%', '?', '<', '>', '*', '#', ';',];
  let lowercaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let uppercaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W','X','Y','Z'];
  let numberArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];




  console.log("Click")
  prompt("Please select a length for your password 8-128 characters");
  //
  prompt("Would you like lowercase letters?");
  prompt("Would you like uppercase letters?");
  prompt("Would you like any special characters?");

  //1. Prompt the user for the password critera
  // a. password length 8 < 128
  // b. do you want to include lowercase, upper case, special characters
  //2. validate the input, make sure everything matches
  //3. generate password based on critera


  //4. display password on page
  return "Generated password will go here"
}