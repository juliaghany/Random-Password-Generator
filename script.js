// Assignment Code

var numberCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowerCaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacters = ["&", "!", "$", "(", ")", "*", "+", "-", "/", ":", "=", "?", ">", "<", "@"];


var generateBtn = document.querySelector("#generate");

// write functions here 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
// Do I need to add another part to the function that pertains to whether or not the user selects cancel? 
function generatePassword() {
  var numberOfCharacters = prompt("How many characters would you like in your password?")
  var useNumbers = prompt("Would you like to use numbers?")
  var useLowerCase = prompt("Would you like to use lower case letters?")
  var useUpperCase = prompt("Would you like to use upper case letters?")
  var useSpecialCharacters = prompt("Would you like to use special characters?")
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Create arrays for each type of characters--numbers, uppers, lowers, special (x)
//Prompt the user for input about # and types of characters (x)
//Capture those inputs in variables (x)
//Create a pool of characters to use based on each response--so if/then statements with each response/answer, use.concat to add chosen character pools to master array
//Use a for loop that loops the number of characters chosen by the student and at each iteration use Math.floor(Math.random for the index of the master array to choose a random character and add it to the password string
//After the loop, return the generated password.