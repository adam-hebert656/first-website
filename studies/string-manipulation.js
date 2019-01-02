/* 
 * Strings can be manipulated using operators in a similar way to numbers.
 * However, there are only two operators than can be used on strings,
 * and they both essentially do the same thing, concatenate the string.
 */

/*
 * Concatenate: +
 * This simply puts two (or more) strings together
 */
var str1 = "Hello";
var str2 = "World";
var fullStr = str1 + " " + str2;
console.log(fullStr); // Prints "Hello World"

/*
 * Concatenate/Assign: +=
 * This adds a string to a variable and assigns it
 */
fullStr += " Adam";
console.log(fullStr); // Prints "Hello World Adam"

/* 
 * Strings can also be manipulated using a variety of methods.
 * NOTE: All these methods return a new string/value and do not change the original string
 */
 
/*
 * toLowerCase()
 * This converts all characters in a string to their lowercase equivelents\
 */
var lowercase = "Adam Hebert";
lowercase.toLowerCase(); // Evaluates to "adam hebert"

/*
 * toUpperCase()
 * This converts all characters in a string to their uppercase equivelents
 */
var uppercase = "hello world";
uppercase.toUpperCase(); // Evaluates to "HELLO WORLD"

/*
 * concat()
 * Joins two (or more) strings
 */
var str3 = "Hello";
var str4 = " World";
str3.concat(str4); // Evaluates to "Hello World"

/*
 * split()
 * Splits a string into an array (using the character(s) specified in the parentheses)
 */
var splitStr = "Adam Hebert Is Cool";
splitStr.split(" "); // Evaluates to ["Adam", "Hebert", "Is", "Cool"]

/* 
 * trim()
 * Trims the whitespace from both ends of a string
 */
var toTrim = "              I'm Adam          ";
toTrim.trim(); // Evaluates to "I'm Adam"

// There are MANY MANY more methods for strings, but these are just some of the basics