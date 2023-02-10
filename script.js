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
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// We learned about event.preventDefault() yesterday, should we add that to this? 

//Function that generates the password: begins by asking how many characters the user would like
//then asks the user if they would like to include numbers, lowercase letters, uppercase letters, and/or special characters

function generatePassword() {
  var lengthOfPassword = prompt("How many characters would you like your password to have? You must choose a number between 8 and 128.");
  if (lengthOfPassword = undefined || lengthOfPassword < 8 || lengthOfPassword > 128) {
    alert("You've either chosen a number less than 8, chosen a number greater than 128, or did not enter a number at all. Please choose a number between 8 and 128.");
    prompt("Choose a number between 8 and 128 to set the length for your password.");
  };
  var numberChar = confirm("Would you like to include numbers in your password?");
  var lowercaseChar = confirm("Would you like to include lowercase letters in your password?");
  var uppercaseChar = confirm("Would you like to include uppercase letters in your password?");
  var specialChar = confirm("Would you like to include special characters in your password?");

  // Use the comparsion operator "strictly equal" and logical operator "&&" to create an if/then statement in case user did not choose any criteria

  if (numberChar === false && lowercaseChar === false && uppercaseChar === false && specialChar === false) {
    alert("Because you canceled all criteria options, a password cannot be generated for you. Please choose at least one criteria.")
  }

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt

//Create arrays for each type of characters--numbers, uppers, lowers, special (x)
//Prompt the user for input about # and types of characters (x)
//Capture those inputs in variables (x)
//Create a pool of characters to use based on each response--so if/then statements with each response/answer, use.concat to add chosen character pools to master array
//Use a for loop that loops the number of characters chosen by the student and at each iteration use Math.floor(Math.random for the index of the master array to choose a random character and add it to the password string
//After the loop, return the generated password.