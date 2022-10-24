// Assignment 1.1: Starting out

console.log("Hello world");

// Assignment 1.2: Basic math

const a = 10;
const b = 2;

const sum = a + b;
const difference = a - b;
const fraction = a / b;
const product = a * b;
const exponentiation = a ** b;
const modulo = a % b;
const average = (a + b) / 2;

console.log(
  `For values of A = ${a} and B = ${b}, the sum is ${sum}, 
   the difference is ${difference}, 
   the fraction is ${fraction}, 
   the product is ${product}, 
   the exponentiation is ${exponentiation},
   the modulo is ${modulo},
   and the average is ${average}
   `
);

// Exercise 1.3: Working with strings

const str1 = "Dogukan";
const str2 = "Dogan";
const str_sum = str1 + str2;
const str_avg = (str1.length + str2.length) / 2;

console.log(str_sum);
console.log(str1.length);
console.log(str2.length);
console.log(str_avg);

if (str1.length < str_avg) {
  console.log(str1);
}
if (str2.length < str_avg) {
  console.log(str2);
}
if (str_sum < str_avg) {
  console.log(str_sum);
}

// Exercise 1.4: if conditionals

//a - The game hearts can only be played with 4 people
const playerCount = 4;

const gameHeartsPlayable =
  playerCount === 4
    ? console.log("We have enough people to play the game hearts")
    : console.log("There must be 4 people to play the game hearts");

//b - Mark is happy when he is not stressed or if he has ice cream (isStressed, hasIcecream)

const isStressed = false;
const hasIcecream = true;

const isMarkHappy =
  !isStressed && hasIcecream
    ? console.log("Mark is happy")
    : console.log("Mark is unhappy");

//c It is a beach day if the sun is shining, it is not raining and the temperature is 20 degrees Celsius or above
const isShining = true;
const isRaining = false;
const temperature = 20;

const isBeachDay =
  isShining && temperature >= 20 && !isRaining
    ? console.log("It is a beach day")
    : console.log("Its not a beach day");

//d Arin is happy if he sees either Suzy or Dan on Tuesday night.
//However, seeing them both at the same time, or being alone, makes him sad.

isTuesday = true;
seenSuzy = false;
seenDan = true;

const isArinHappy =
  isTuesday && (seenDan || seenSuzy) && !(seenDan && seenSuzy)
    ? console.log("Arin is happy")
    : console.log("Arin is unhappy");

// Exercise 1.5: Modifying strings

const myRandomString = "      Today is a very good day and I am happy.     ";
const noSpace = myRandomString.trim();
const maxLengthTwenty = noSpace.substring(0, 20);
const noCapitalLetter = maxLengthTwenty.toLowerCase();

console.log(noCapitalLetter);

// Extra bonus

const hasSpace = false;
const maxLength = 15;
const capitalLetter = false;

const checkConditions =
  !hasSpace && maxLength <= 20 && !capitalLetter
    ? console.log("You passed the test")
    : console.log("Error");
