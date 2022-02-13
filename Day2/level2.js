let johnHolmesQuote = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.";
console.log(johnHolmesQuote);

let motherTeressaQuote = `"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`
console.log(motherTeressaQuote);

console.log(typeof(+'10')==typeof(10));
console.log(Math.ceil(parseFloat('9.8'))==10);
console.log("python".includes("on"), "jargon".includes("on"));

let statement = 'I hope this course is not full of jargon.';
console.log(statement.includes("jargon"));

let randNum = Math.floor(Math.random()*101);
console.log(randNum);

let randNum2 = Math.floor(Math.random()*(100-50+1) + 50);
console.log(randNum2);

let randNum3 = Math.floor(Math.random()*256);
console.log(randNum3);

let jsVar = "JavaScript";
console.log(jsVar.charAt(Math.floor(Math.random()*jsVar.length)));

console.log("1 1 1 1 1");
console.log("2 1 2 4 8");
console.log("3 1 3 9 27");
console.log("4 1 4 16 64");
console.log("5 1 5 25 125");

let sent = 'You cannot end a sentence with because because because is a conjunction';
let bcoz = "because because because";
console.log(sent.substr(sent.indexOf(bcoz), bcoz.length));