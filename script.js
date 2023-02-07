// Assignment Code

// Should I use a charset instead? 
// Do I need to put quotation marks around each letter in the vars with letters? 

var numberCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowerCaseCharacters = ["abcdefghijklmnopqrstuvwxyz"];
var upperCaseCharacters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var specialCharacters = ["&", "!", "$", "(", ")", "*", "+", "-", "/", ":", "=", "?", ">", "<", "@"];


var generateBtn = document.querySelector("#generate");

// write functions here 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var numberOfCharacters = prompt("How many characters would you like in your password?")
  if (numberOfCharacters <= 12) 
    var useNumbers = prompt("Would you like to use numbers?")
  if (useNumbers = "yes")
    var useLowerCase = prompt("Would you like to use lower case letters?")
  if (useLowerCase = "yes")
    var useUpperCase = prompt("Would you like to use upper case letters?")
  if (useUpperCase = "yes")
    var useSpecialCharacters = prompt("Would you like to use special characters?")
  //if (useSpecialCharacters = "yes")
}

function writePassword() {
  
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Create arrays for each type of characters--numbers, uppers, lowers, special
//Prompt the user for input about # and types of characters
//Capture those inputs in variables
//Create a pool of characters to use based on each response--so if/then statements with each response/answer, use.concat to add chosen character pools to master array
//Use a for loop that loops the number of characters chosen by the student and at each iteration use Math.floor(Math.random for the index of the master array to choose a random character and add it to the password string
//After the loop, return the generated password.