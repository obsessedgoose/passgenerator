document.querySelector("#generate").addEventListener("click", writePassword);

// Arrays

// Upper Array
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Lower Array

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Number Array

var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Special Array

var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "]", "<", ">", "?", "/", "=", "+", "-", "_"];



var plength = "";

var Upper;

var Lower;

var Number;

var Special;

function createPassword () {
  var plength = prompt("How long would you like your password?");


  while (plength <=8 && plength >= 128) {
    alert("Please select a number between 8 and 128.");

    var plength = prompt("How long would you like your password?");
  }

  var confirmUpper = confirm("Do you want to use upper case?");
  var confirmLower = confirm("Do you want to use lower case?");
  var confirmNumber = confirm("Do you want to use numbers?");
  var confirmSpecial = confirm("Do you want to use special characters?");


  while (confirmUpper === false && confirmLower === false && confirmNumber === false && confirmSpecial === false) {
    alert("Please pick at least one option.");

    var confirmUpper = confirm("Do you want to use upper case?");
    var confirmLower = confirm("Do you want to use lower case?");
    var confirmNumber = confirm("Do you want to use numbers?");
    var confirmSpecial = confirm("Do you want to use special characters?");
  }

  var passChar = [];

  if (confirmUpper) {
  passChar = passChar.concat(confirmUpper);
  }

  if (confirmLower) {
    passChar = passChar.concat(confirmLower);
  }

  if (confirmNumber) {
    passChar = passChar.concat(confirmNumber);
  }

  if (confirmSpecial) {
    passChar = passChar.concat(confirmSpecial);
  }
}