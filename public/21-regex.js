/*
Regular expressions;
patterns used to match character combinations in strings. 
In JavaScript, regular expressions are also objects.
*/

/*
(1). Test method
Executes a search for a match between a regular expression and a specified case sensitive string. 
Returns true or false.
*/

let myString = 'Hello, World!';
let myRegex = /Hello/;
let result = myRegex.test(myString); // true

/*
(2).
Alternation / OR Operator = | ;
search for multiple patterns
*/

let cString = 'Jen likes the colour red.';
let cRegex = /red|blue|green|pink|black/;
let result = cRegex.test(cString); // true

/*
(3).
Ignore Case = i ;
search for uppercase and lowercase variations of specified string
*/

let iString = 'HELLO';
let iRegex = /hello/i;
let iresult = iRegex.test(iString); // true

/*
(4).
.match() method
apply the method on a string and pass in the regex inside the parentheses
extracts actual string matches into array 
*/

let mString = 'Wow it just appeared from nowhere';
let mRegex = /Wow/;
let mresult = mString.match(mRegex); // returns ['Wow']

/*
(5).
g flag = /regex/g
To search or extract a pattern more than once, you can use the g flag.
*/

let colour = 'RED, red, rEd';
let colRegex = /red/gi;
let colresult = colour.match(colRegex); // returns ['RED', 'red', 'rEd'];

/*
(6).
wildcard character class = /./
Matches any single character except line terminators
(Inside a character set, the dot loses its special meaning and matches a literal dot.)
(ES2018 added the s "dotAll" flag, which allows the dot to also match line terminators.)
*/

let rhymeString = 'Run for fun in the sun while we eat a bun';
let rhymeRegex = /.un/gi;
let result = rhymeString.match(rhymeRegex).length; // returns 4 matches

/*
(7).
character sets = [a-z]
A character set. Matches any one of the enclosed characters.
Specify a range of characters by using a hyphen.
Can include a character class in a character set.
*/

let setString = "We'll always remember the feeling";
let setRegex = /[a-z0-9]/gi; // match all alphanumberic characters
let result = setString.match(setRegex);

/*
(8).
negated character sets = [^a-z]
matches anything that is not enclosed in the brackets
You can specify a range of characters by using a hyphen
*/

let negateString = '@!#$%^&';
let negateRegex = /[^A-Za-z0-9]/g; // match everything but alphanumeric characters
let result = negateString.match(negateRegex);
