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
  console.log("Click")

  let characterLength = "";
  let choiceArr = [];
  let specialCharactersArr = ['!', '@', '$', '%', '?', '<', '>', '*', '#', ';',];
  let lowercaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let uppercaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let numberArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let password = "";

  characterLength = parseInt(prompt("Please select a length for your password 8-128 characters"));
  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Please try again and choose a number 8 - 128");
    return "Try Again";
  }
  if (confirm("Would you like lowercase letters") == true) {
    choiceArr = choiceArr.concat(lowercaseArr);
  }
  if (confirm("Would you like uppercase letters") == true) {
    choiceArr = choiceArr.concat(uppercaseArr);
  }
  if (confirm("Would you like any special characters") == true) {
    choiceArr = choiceArr.concat(specialCharactersArr);
  }
  if (confirm("Would you like numbers?") == true) {
    choiceArr = choiceArr.concat(numberArr);
  }
  console.log(choiceArr)

  for (var i = 0; i < characterLength; i++) {
    let randomGenerator = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomGenerator];
  }

  return password
}