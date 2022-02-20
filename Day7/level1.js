function fullName1() {
	console.log("nikhil rawat");
}
fullName1();

function fullName2(firstName, lastName) {
	return firstName + " " + lastName;
}
console.log(fullName2("nikhil", "rawat"));

function addNumbers(num1, num2) {
	return num1 + num2;
}
console.log(addNumbers(23,54));

function areaOfRect(len, bre) {
	return len * bre
}
console.log(areaOfRect(4,5));

function permOfRect(len, bre) {
	return 2 * (len + bre);
}
console.log(permOfRect(4,5));

function volOfRectPrism(len, wid, hei) {
	return len * wid * hei;
}
console.log(volOfRectPrism(4,5,6));

function areaOfCircle(radius){
	return Math.PI * radius * radius;
}
console.log(areaOfCircle(5));

function permOfCircle(radius) {
	return 2 * Math.PI * radius;
}
console.log(permOfCircle(5))

function density(mass, volume) {
	return mass/volume;
}
console.log(density(1000, 500));

function speed(distance, time) {
	return distance/time;
}
console.log(speed(45,2));

function weight(mass, gravity=9.8){
	return mass * gravity;
}
console.log(weight(10));

function celToFarh(temp) {
	return (temp*9)/5 + 32
}
console.log(celToFarh(-40));

function bmi(weight, height) {
	let bmiNum = weight/(height**2);
	let result;
	if(bmiNum>=30){
		result = "Obesse";
	}else if(bmiNum>=25){
		result = "Overweight";
	}else if(bmiNum>=18.5){
		result = "Normal weight";
	}else{
		result = "Underweight";
	}
	return result;
}
console.log(bmi(94, 1.4));

function checkSeason(month){
	let season;
	if(["january", "february", "march"].includes(month)){
		season="Spring";
	}else if(["april", "may", "june"].includes(month)){
		season="Summer";
	}else if(["july, august, september"].includes(month)){
		season="Autumn";
	}else{
		season="Winter";
	}
	return season;
}
console.log(checkSeason("february"));

function maxNum(num1, num2, num3){
	if(num1>num2 && num1>num3) return num1;
	else if(num2>num1 && num2>num3) return num2;
	else return num3;
}
console.log(maxNum(10, 9, 8));
