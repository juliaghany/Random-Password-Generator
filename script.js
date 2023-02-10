// Assignment Code

// Create strings with availiable numerical, alphabetical, and special characters

var numberChar = "0123456789"
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz"
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var specialChar = "&!$()*+-:?@/>';[^],.="

var generateBtn = document.querySelector("#generate");

// write functions here 

// Write password to the #password input 

function writePassword() {
  var password = generatePassword();

// Add if statement with return to stop the function if user does not define a character length or any characters

  if (password === undefined) {
    return
  }
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Function that generates the password: begins by asking how many characters the user would like
// then asks the user if they would like to include numbers, lowercase letters, uppercase letters, and/or special characters

function generatePassword() {
  var lengthOfPassword = prompt("How many characters would you like your password to have? You must choose a number between 8 and 128.");

// Use if/then statement to alert user if they do not choose a number between 8 or 128, also alerts user if they do not input anything at all. 
// Use logical operator || which evaluates to true if either the input is greater than 8 or less than 128. Return will end the function execution 

  if (lengthOfPassword < 8 || lengthOfPassword > 128) {
    alert("You've either chosen a number that is less than 8, chosen a number that is greater than 128, or  did not enter anything at all. Please try again.");
    return
  };

  var wantsNumberChar = confirm("Would you like to include numbers in your password?");
  var wantsLowercaseChar = confirm("Would you like to include lowercase letters in your password?");
  var wantsUppercaseChar = confirm("Would you like to include uppercase letters in your password?");
  var wantsSpecialChar = confirm("Would you like to include special characters in your password?");

// Use the comparsion operator "strictly equal" and logical operator "&&" to create an if/then statement in case user did not choose any criteria

  if (wantsNumberChar === false && wantsLowercaseChar === false && wantsUppercaseChar === false && wantsSpecialChar === false) {
    alert("Because you canceled all criteria options, a password cannot be generated for you. Please try again.")
  }

// Create empty string to combine strings into passwordBase based on user input regarding criteria 
// Use += to combine the string to empty string if the user selected that criteria 

  var passwordBase = ""


  if (wantsNumberChar === true) {
    passwordBase += numberChar
  }

  if (wantsLowercaseChar === true) {
    passwordBase += lowercaseChar
  }

  if (wantsUppercaseChar === true) {
    passwordBase += uppercaseChar
  }

  if (wantsSpecialChar === true) {
    passwordBase += specialChar
  }


}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
