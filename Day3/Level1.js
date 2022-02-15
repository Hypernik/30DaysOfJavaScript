let firstName = "Nikhil";
let lastName = "Rawat";
let country = "India";
let city = "Delhi";
let age = 22;
let isMarried = false;
let year = new Date; year= year.getFullYear();

console.log(typeof(firstName), typeof(age), typeof(isMarried), typeof(year));

console.log(typeof(10) == typeof('10'));
console.log(parseInt(9.8) == 10);

var true1 = 5>2;
var true2 = 5<8;
var true3 = "Pixel" === "Pixel";
console.log(true1, true2, true3);

var false1 = 5<2;
var false2 = 54>78;
var false3 = "Pixel" === "banana";
console.log(false1, false2, false3);

console.log("Check Question 2");

console.log(4 > 3);				//true
console.log(4 >= 3);			//true
console.log(4 < 3);				//false
console.log(4 <= 3);			//false
console.log(4 == 4);			//true
console.log(4 === 4);			//true
console.log(4 != 4);			//false
console.log(4 !== 4);			//false
console.log(4 != '4');		//false
console.log(4 == '4');		//true
console.log(4 === '4');		//false
console.log('python'.length != 'jargon'.length);	//false

console.log("Check Question 2");

console.log(4 > 3 && 10 < 12);		//true
console.log(4 > 3 && 10 > 12);		//false
console.log(4 > 3 || 10 < 12);		//true
console.log(4 > 3 || 10 > 12);		//true
console.log(!(4 > 3));						//false
console.log(!(4 < 3));						//true
console.log(!(false));						//true
console.log(!(4 > 3 && 10 < 12));	//false
console.log(!(4 > 3 && 10 > 12));	//true
console.log(!(4 === '4'));				//true
console.log('dragon'.includes('on') == 'python'.includes('on'));  //true

console.log("Year Functions");

let dateObj = new Date();
console.log(dateObj.getFullYear());
console.log(dateObj.getMonth());
console.log(dateObj.getDate());
console.log(dateObj.getDay());
console.log(dateObj.getHours());
console.log(dateObj.getMinutes());
console.log(dateObj.getTime());