let stringEx = "Learning Javascript is fun!"; // Activity 1
console.log(stringEx.includes("Javascript"));
console.log(stringEx.indexOf("fun"));

let stringEx2 = "CODE BOOTCAMP" // Activity 2
let lowerCaseString = stringEx2.toLowerCase()
let lowerCaseStringClean = lowerCaseString.trim()
let finalText = lowerCaseStringClean.replace("bootcamp", "Javascript")
console.log(finalText);

let sentence = "Coding is fun and educational" // Activity 3
let words = sentence.split(" ");
console.log(words);

let word = "Bootcamp" // Activity 4
console.log(word.charAt(0));
let partialWord = word.slice(4, 8)
console.log(partialWord);

// Advanced Challenge
let string = `Customer: John Doe 
Order: Apple, Banana, Grape
Total: $20.50` 

let customerLine = string.split("\n")[0]; 
let customerName = customerLine.split(": ")[1];
console.log(customerName);

let orderLine = string.split("\n")[1];
let items = orderLine.split(": ")[1];
let itemsFinal = items.split(",");
console.log(itemsFinal);

let priceLine = string.split("\n")[2];
let finalPrice = priceLine.toUpperCase()
console.log(finalPrice);

// Practice Problem #2

let inputString = "  Welcome to the Coding Bootcamp! Learn JavaScript today.  ";
let hasJavaScript = inputString.includes("Javascript");
let codingPosition = inputString.indexOf("Coding");
let startsWithWelcome = inputString.startsWith("Welcome");
let endsWithToday = inputString.endsWith("today.");

let lowercaseString = inputString.toLowerCase()
let uppercaseString = inputString.toUpperCase()
let trimmedString = inputString.trim()
let replacedString = inputString.at("Javascript", "coding")

let wordsArray = inputString.split(" ");

let firstCharacter = trimmedString.charAt(0);
let extractedBootcamp = inputString.slice(24, 32);

console.log({
  hasJavaScript,
  codingPosition,
  startsWithWelcome,
  endsWithToday,
  lowercaseString,
  uppercaseString,
  trimmedString,
  replacedString,
  wordsArray,
  firstCharacter,
  extractedBootcamp,
});
