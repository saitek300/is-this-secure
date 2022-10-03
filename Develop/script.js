
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

var numericCharacters = [
'0',
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

var lowercaseCharacters = [
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

var uppercaseCharacters = [
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

function getPasswordArray() {
  
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
    hasLowercaseCharacters === false &&
    hasUppercaseCharacters === false
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
function getRandom(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  var randomElement = array[randomIndex];

  return randomElement;
}


function generatePassword() {
  var options = getPasswordArray();
  
  var result = [];

  
  var possibleCharacters = [];

  
  var guaranteedCharacters = [];

  
  if (!options) return null;


  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  
  if (options.hasNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
  }

  
  if (options.hasLowercaseCharacters) {
    possibleCharacters = possibleCharacters.concat(lowercaseCharacters);
    guaranteedCharacters.push(getRandom(lowercaseCharacters));
  }

  
  if (options.hasUppercaseCharacters) {
    possibleCharacters = possibleCharacters.concat(uppercaseCharacters);
    guaranteedCharacters.push(getRandom(uppercaseCharacters));
  }

  
  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);

    result.push(possibleCharacter);
  }

  
  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }

  
  return result.join('');
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
