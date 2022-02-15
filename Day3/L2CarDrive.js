let birthYear = prompt("Enter your birth year");
let currYear = new Date();
currYear=currYear.getFullYear();
let age = currYear - birthYear;
age>=18? alert("You are " + age + ". You are old enough to drive") : alert("You are " + age + ". You will be allowed to drive after " + (18-age));