// 1. Number Within Range
/* 1. Check if a number is within a given range. Write a program that checks if a number is within the range of an object's min and max properties. Assume min <= max is always true.

Examples:

4, { min: 0, max: 5 }) ➞ true
4, { min: 4, max: 5 }) ➞ true
4, { min: 6, max: 10 }) ➞ false
5, { min: 5, max: 5 }) ➞ true */


function isWithinRange(num, obj) {
    if (num >= obj.min && num <= obj.max) {
        return true;
    } else {
        return false;
    }
 }
 
 console.log(isWithinRange(4, { min: 4, max: 5 }));
 
 // 2. Scrabble
 
 /* 2. Scrabble. Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand. Example: [ { tile: "N", score: 1 }, { tile: "K", score: 5 }, { tile: "Z", score: 10 }, { tile: "X", score: 8 }, { tile: "D", score: 2 }, { tile: "A", score: 1 }, { tile: "E", score: 1 } ]

The player's maximum score: 1 + 5 + 10 + 8 + 2 + 1 + 1 = 28 */


 const scrabbleHand = [
     { tile: "N", score: 1 },
     { tile: "K", score: 5 },
     { tile: "Z", score: 10 },
     { tile: "X", score: 8 },
     { tile: "D", score: 2 },
     { tile: "A", score: 1 },
     { tile: "E", score: 1 }
 ];
 
 function calcMaxScrabbleScore(tiles) {
     let total = 0;
     for (let i = 0; i < tiles.length; i++) {
         total += tiles[i]['score'];
     }
     return total;
 }
 
 console.log(calcMaxScrabbleScore(scrabbleHand));
 
 // 3. Empty Object?
 
/* 3. Is it an empty object? Write a program that returns true if an object is empty, and false if otherwise.

Examples:

{} ➞ true
{a: 1} ➞ false */

 function isEmpty(obj) {
     return Object.keys(obj).length === 0;
 }
 
 console.log(isEmpty({}));
 console.log(isEmpty({ a: "a" }));
 console.log(isEmpty({1 : 1}));
 
 // 4. Counting Letters
 
/* 4. Counting Letters. Create a function that counts the number of occurrences of each letter in a string. Return an object with key pair values of letters and the number of occurrences for each letter.

Example:

countLetters("tree") ➞ {t: 1, r: 1, e: 2} */

 function countLetters(str) {
     const strToArr = str.split("");
     const letterCount = {};
     for (let i = 0; i < strToArr.length; i ++) {
         if (letterCount.hasOwnProperty(strToArr[i])) {
             letterCount[strToArr[i]]++;
         }  else {
             letterCount[strToArr[i]] = 1;
         }
     }
     return letterCount;
 }
 
 console.log(countLetters("woolloomooloo"));
 
 // 5. Free Shipping
 
/* 5. Free Shipping. Create a function that determines whether an online order should get free shipping. An order gets free shipping if the total cost of items exceeds €50.

Examples:

freeShipping({ "Sponge": 3.50, "Soap": 5.99 }) ➞ false
freeShipping({ "Surround Sound Equipment": 499.99 }) ➞ true
freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 }) ➞ false */

 function freeShipping(object) {
     const orderArray = Object.values(object);
     let total = 0;
     for (let i = 0; i < orderArray.length; i ++) {
         total += orderArray[i];
     }
     return total > 50;
 }
 
 console.log(freeShipping({ "Sponge": 3.50, "Soap": 9.99 }));
 
 console.log(freeShipping({ "Surround Sound Equipment": 499.99 }));
 
 console.log(freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 }));
 
 // 6. Programming Object
 
 const programming = {
   languages: ["JavaScript", "Python", "Ruby"],
   isChallenging: true,
   isRewarding: true,
   difficulty: 8,
   jokes:
     "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
 };
 
 // Write the command to add the language "Go" to the end of the languages array.

 programming.languages.push("Go");
 console.log(programming);
 

 // Change the difficulty to the value of 7.
 programming.difficulty = 7;
 console.log(programming);
 

 //Using the delete keyword, write the command to remove the jokes key from the programming object.
 delete programming.jokes;
 console.log(programming);
 
 //Write a command to add a new key called isFun and a value of true to the programming object.
 programming.isFun = true;
 console.log(programming);
 
 //Using a loop, iterate through the languages array and console.log all of the languages.
 for (let i = 0; i < programming.languages.length; i ++) {
     console.log(programming.languages[i]);
 };
 
 //Using a loop, console.log all of the keys in the programming object.
 const myKeysArr = Object.keys(programming);
 for (const key of myKeysArr) {
     console.log(key);
 }
 
 // Using a loop, console.log all of the values in the programming object.
 const myValuesArr = Object.values(programming);
 for (const values of myValuesArr) {
     console.log(values);
 }

 //Create an object method where if the keys "isChallenging" and "isRewarding" have values of "true", 
 // then return "Learning the programming languages: "JavaScript, Python, Ruby, Go" is rewarding and challenging.
 programming.worthwhile = () => {
   if (programming.isChallenging && programming.isRewarding) {
     return `Learning the programming languages: ${programming.languages} is rewarding and challenging.`;
   }
 };
 
 console.log(programming.worthwhile())
 
 // BONUS 1: In a comment, explain what is printed if we console.log an object method without calling it and why: 
 // `console.log` itself uses the Object.keys() method on objects, which can only return enumerable properties. 
 // For example, since functions are not enumerable, we only see `[Function]`, when we console.log(programming).
 

 // BONUS 2: Make sure that any other code cannot delete or change properties of the object.
 Object.seal(programming);
 
 delete programming.languages;
 
 console.log(programming);