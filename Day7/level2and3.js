const { set } = require("express/lib/application");

//Linear equation
function linEq(x, a, b, c) {
	let y = (c - a*x)/b;
	return y;
}
console.log("Y=", linEq(10,2,3, 30));		// 2x + 3y -30 = 0  if x = 10

//Quadratic equation
function quadEq(a=1, b=0, c=0){
	let d = Math.sqrt(b**2 - 4*a*c);
	let x1 = (-b + d)/(2*a);
	let x2 = (-b - d)/(2*a);
	if(x1===x2){
		return x1;
	}
	return [x1, x2];
}

console.log(quadEq()) // {0}
console.log(quadEq(1, 4, 4)) // {-2}
console.log(quadEq(1, -1, -2)) // {2, -1}
console.log(quadEq(1, 7, 12)) // {-3, -4}
console.log(quadEq(1, 0, -4)) //{2, -2}
console.log(quadEq(1, -1, 0)) //{1, 0}

//Print each value of array
function printArray(arr) {
	for(const i of arr){
		console.log(i);
	}
}
printArray([1, "Two", "Three", false, 3.14]);

//show date time
function showDateTime() {
	let date = new Date();
	console.log(date.toLocaleString('en-US', {
		day: 'numeric', // numeric, 2-digit
		month: 'numeric', // numeric, 2-digit, long, short, narrow
		year: 'numeric', // numeric, 2-digit
		hour: 'numeric', // numeric, 2-digit
		minute: 'numeric', // numeric, 2-digit
	}));
}
showDateTime();

//swap values
function swapValues(x,y) {
	return [y, x];
}
console.log(swapValues(10, 6));

//reverse array
function revArray(arr){
	let revArr = [];
	for(const i of arr){
		revArr.unshift(i);
	}
	return revArr;
}
console.log(revArray([1,2,3,4,5,6,7]));

//capitalize array
function capArray(arr){
	let capArray = [];
	for(const i of arr){
		capArray.push(i[0].toUpperCase() + i.slice(1));
	}
	return capArray;
}
console.log(capArray(["banana", "apple", "orange", "strawberries"]));

//add item
function addItem(arr, items) {
	arr.push(items);
	return arr;
}
console.log(addItem([1,3,4,5,6], "Seven"));

//remove item
function removeItem(arr, index) {
	arr.splice(index, 1);
	return arr;
}
console.log(removeItem([1,2,3,4,5,6], 3));

//sum of num range
function sumOfNums(num){
	let sum = 0;
	for(let i=1;i<=num;i++){
		sum+=i;
	}
	return sum;
}
console.log(sumOfNums(10));

//sum of odd range
function sumOfOddNums(num){
	let sum = 0;
	for(let i=1;i<=num;i++){
		if(i%2!=0){
			sum+=i;
		}
	}
	return sum;
}
console.log(sumOfOddNums(10));

//sum of even range
function sumOfEvenNums(num){
	let sum = 0;
	for(let i=1;i<=num;i++){
		if(i%2===0){
			sum+=i;
		}
	}
	return sum;
}
console.log(sumOfEvenNums(10));

//count evens and odds
function countEvenOdd(num){
	let oddCount = 0;
	let evenCount = 0;
	for(let i=0;i<=num;i++){
		if(i%2===0){
			evenCount++;
		}else{
			oddCount++;
		}
	}
	return [oddCount, evenCount];
}
console.log(countEvenOdd(10));

//funciton with variable arguments
function varArgs(...arr){
	let sum = 0;
	for(const i of arr){
		sum+=i;
	}
	return sum;
}
console.log(varArgs(1, 2, 3, 4, 5, 6));

//random ip generator
function randomIp(){
	let a = Math.floor(Math.random()*256);
	let b = Math.floor(Math.random()*256);
	let c = Math.floor(Math.random()*256);
	let d = Math.floor(Math.random()*256);
	return a+"."+b+"."+c+"."+d;
}
console.log(randomIp());

//random mac address
function randomMac() {
	let mac = "XX:XX:XX:XX:XX:XX".replace(/X/g, function() {
		return "0123456789ABCDEF".charAt(Math.floor(Math.random() * 16))
	});
	return mac;
}
console.log(randomMac());

//random hex generator
function randomHex() {
	let hexStr	= "#";
	i=0;
	while(i<6){
		let temp = Math.ceil(Math.random()*22) + 47;
		if((temp>=48 && temp<=57)||(temp>=65 && temp<=70)){
			hexStr+=String.fromCharCode(temp);
			i++;
		}
	}
	return hexStr;
}
console.log(randomHex());

//random user id generator
function randUserId() {
	let randomChars	= "";
	let i=0;
	while(i<7){
		let temp = Math.ceil(Math.random()*74) + 48;
		if((temp>=48 && temp<=57)||(temp>=65 && temp<=90)||(temp>=97 && temp<=122)){
			randomChars+=String.fromCharCode(temp);
			i++;
		}
	}
	return randomChars;
}
console.log(randUserId());

//random user id by user
function randUserIdByUser(len, num){
	let ids = [];
	for(let i=0;i<num;i++){
		let randomChars	= "";
		let i=0;
		while(i<len){
			let temp = Math.ceil(Math.random()*74) + 48;
			if((temp>=48 && temp<=57)||(temp>=65 && temp<=90)||(temp>=97 && temp<=122)){
				randomChars+=String.fromCharCode(temp);
				i++;
			}
		}
		ids.push(randomChars);
	}
	return ids;
}
console.log(randUserIdByUser(6, 3));

//rgb generator
function genRGB(){
	let rgbList = [];
	for(let i=0;i<3;i++){
		let temp = Math.ceil(Math.random()*255);
		rgbList.push(temp);
	}
	return "rgb("+rgbList.join(", ")+")";
}
console.log(genRGB());

//generate arrayOfHexaColors
function arrayOfHexaColors(){
	let num = Math.floor(Math.random()*10);
	let arrHexa = [];
	for(let i=0;i<num;i++){
		arrHexa.push(randomHex());
	}
	return arrHexa;
}
console.log(arrayOfHexaColors());

// arrayOfRgbColors
function arrayOfRgbColors(){
	let num = Math.floor(Math.random()*10);
	let arrRGB = [];
	for(let i=0;i<num;i++){
		arrRGB.push(genRGB());
	}
	return arrRGB;
}
console.log(arrayOfRgbColors());

//convertHexaToRgb
function convertHexaToRgb(hexa){
	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexa);
	let val = result ? {
		r: parseInt(result[1], 16),
		g: parseInt(result[2], 16),
		b: parseInt(result[3], 16)
	} : null;
	return "rgb(" +val.r+","+val.g+","+val.b+")";
}
console.log(convertHexaToRgb('#0033ff'));

//convertRgbToHexa
function convertRgbToHexa(r, g, b){
	function componentToHex(c) {
		var hex = c.toString(16);
		return hex.length == 1 ? "0" + hex : hex;
	}
	return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
console.log(convertRgbToHexa(255, 0, 255));

//generateColors
function generateColors(type, num){
	let colors = [];
	if(type=="hexa"){
		for(let i=0;i<num;i++){
			colors.push(randomHex());
		}
	}else{
		for(let i=0;i<num;i++){
			colors.push(genRGB());
		}
	}
	return colors;
}
console.log(generateColors("hexa", 3));
console.log(generateColors("rgb", 5));

//shuffle array
function shuffleArr(arr){
	let len=arr.length;
	for(let i=0;i<len;i++){
		let a = Math.floor(Math.random()*len);
		let b = Math.floor(Math.random()*len);
		let c = arr[a];
		arr[a] = arr[b];
		arr[b] = c;
	}
	return arr;
}
console.log(shuffleArr([1,2,3,4,5,6,7,8,]));

//factorial
function factorial(num){
	let fact = 1;
	for(let i=1;i<=num;i++){
		fact*=i;
	}
	return fact;
}
console.log(factorial(6));

//Check is empty
function isEmpty(param) {
	return param==null || param==undefined || param==="";
}
console.log(isEmpty());

//sum
function sum(...arguments){
	let adds = 0;
	for(let i of arguments){
		adds+=i;
	}
	return adds;
}
console.log(sum(1,2,3,4,5));

//sumOfArrayItems
function sumOfArrayItems(arr){
	let sum=0;
	for(let i of arr){
		if(!isNaN(i)){
			sum+=i;
		}else{
			return "Arrays has values other than numbers";
		}
	}
	return sum;
}
console.log(sumOfArrayItems([1,2,3,4,5,6,7,8]))

//average
function average(arr){
	let add = sumOfArrayItems(arr)
	if(!isNaN(add)){
		return add/arr.length
	}
	return add;
}
console.log(average([1,2,3,4,5,6]));

//modifyArray
function modifyArray(arr){
	if(arr.length<=4){
		return 'item not found';
	}
	arr[4] = arr[4].toUpperCase();
	return arr;
}
console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']));
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']));

//isPrime
function isPrime(num){
	let sqrtNum = Math.floor(Math.sqrt(num));
	for(let j=2;j<=sqrtNum;j++){
		if(num%j==0){
			return false
		}
	}
	return true;
}
console.log(isPrime(6));

//unique items
function uniqueItems(arr){
	let unique = [...new Set(arr)];
	if(unique.length === arr.length){
		return true;
	}
	return false;
}
console.log(uniqueItems([1,2,3,4,5,6,7,8]));
console.log(uniqueItems([1,2,3,8,5,6,7,8]));

//data type same
function sameDataType(arr){
	let dataArr = [];
	for(let i of arr){
		dataArr.push(typeof(i));
	}
	let dataType = [...new Set(dataArr)];
	if(dataType.length===1){
		return true;
	}
	return false;
}
console.log(sameDataType([1,23,4,5,6,7,8]));
console.log(sameDataType([1,3,5, false, "hsdf"]));

//valid variable
function isValidVar(varName){
	return /^[_$a-zA-Z]+[a-zA-Z0-9_]?[a-zA-Z0-9]$/ig.test(varName);
}
console.log("Regex Check");
console.log(isValidVar("$hello"));
console.log(isValidVar("_hello"));
console.log(isValidVar("hell0"));
console.log(isValidVar("hel_lo"));
console.log(isValidVar("9hello"));
console.log(isValidVar("hello)"));


//seven unique nums
function sevenNums(){
	let arr = [];
	let i = 0;
	while(i<7){
		let num = Math.floor(Math.random()*10);
		if(arr.indexOf(num)==-1){
			arr.push(num);
			i++;
		}
	}
	return arr;
}
console.log(sevenNums());