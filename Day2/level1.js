let challenge = "30 Days of JavaScript";
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(0,2));
console.log(challenge.substring(3));
console.log(challenge.includes("Script"));
let arrStr = challenge.split(" ");
console.log(arrStr);

let techCmp = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
let techArr = techCmp.split(", ");
console.log(techArr);

console.log(challenge.replace("JavaScript", "Python"));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt(11));
console.log(challenge.indexOf('a'));
console.log(challenge.lastIndexOf('a'));

let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf("because"));
console.log(sentence.lastIndexOf('because'));
console.log(sentence.search("because"));

let trimChallenge = " 30 Days of JavaScript ";
console.log(trimChallenge.trim());
console.log(challenge.startsWith('30'));
console.log(challenge.endsWith('cript'));
console.log(challenge.matchAll('a'));

console.log("30 days of".concat(' ',"JavaScript"));
console.log(challenge.repeat(2));