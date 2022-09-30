
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];

var numericCharacters = ['0',
'1',
'2',
'3',
'4',
'5',
'6',
'7',
'8',
'9'
];

var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

function getPasswordOptions() {
  
  var length = parseInt(
    prompt('How many characters would you like your password to contain?'),
    10
  );

  if (Number.isNaN(length)) {
    alert("Password length must be provided as a number");
    return null;
  }

  if(length < 8) {
    prompt("password must be 8 characters or more.");
    return null;
  }

  if(length > 128) {
    prompt("password must be 128 characters or less.");
    return null;
  }

  var hasSpecialCharacters = confirm (
    "Click Ok to include special characters"
  );

  var hasNumericCharacters = confirm (
    "Click Ok to include numbers"
  );

  var hasUppercaseCharacters = confirm (
    "Click Ok to include uppercase characters"
  );

  var hasLowercaseCharacters = confirm (
    "Click Ok to include lowercase characters"
  );
  if (
    hasSpecialCharacters === false &&
    hasNumericCharacters === false &&
    hasLowerCasedCharacters === false &&
    hasUpperCasedCharacters === false
  ) {
    alert("please pick a character type");
    return null;
  }

var passwordArrays = {
  length: length,
  hasSpecialCharacters: hasSpecialCharacters,
  hasNumericCharacters: hasNumericCharacters,
  hasLowercaseCharacters: hasLowercaseCharacters,
  hasUppercaseCharacters: hasUppercaseCharacters,
};

return passwordArrays;
}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
