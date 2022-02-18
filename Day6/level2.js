//random length id generator
let randomChars	= "";
let i=0;
let charLen = Math.ceil(Math.random()*15)
while(i<charLen){
	let temp = Math.ceil(Math.random()*74) + 48;
	if((temp>=48 && temp<=57)||(temp>=65 && temp<=90)||(temp>=97 && temp<=122)){
		randomChars+=String.fromCharCode(temp);
		i++;
	}
}
console.log("Any chars random id-",randomChars);

//hexadecimal generator
let hexStr	= "#";
i=0;
while(i<6){
	let temp = Math.ceil(Math.random()*22) + 47;
	if((temp>=48 && temp<=57)||(temp>=65 && temp<=70)){
		hexStr+=String.fromCharCode(temp);
		i++;
	}
}
console.log("Hexadeciaml code-", hexStr);

//rgb generator
let rgbList = [];
for(let i=0;i<3;i++){
	let temp = Math.ceil(Math.random()*255);
	rgbList.push(temp);
}
console.log("RGB values-", rgbList.join(","));

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]
//capitalize countries
let capCountries = [];
for(const i of countries){
	capCountries.push(i.toUpperCase());
}
console.log("Capitalized country names-", capCountries);

//countries length
let countriesLen = [];
for(const i of countries){
	countriesLen.push(i.length);
}
console.log("Countries name length-", countriesLen);

//countries arr of arr
let countriesArr = [];
for(const i of countries){
	let code = i.slice(0,3).toUpperCase();
	let length = i.length;
	countriesArr.push([i, code, length]);
}
console.log("Countries array of array-", countriesArr);

//countries with land
let landCountries = [];
for(const i of countries){
	if(i.includes('land')){
		landCountries.push(i);
	}
}
if(landCountries.length===0){
	console.log("There are no countries with land");
}else{
	console.log("Countries with land-", landCountries);
}

//countries end with 'ia'
let iaCountries = [];
for(const i of countries){
	if(i.endsWith("ia")){
		iaCountries.push(i);
	}
}
if(iaCountries.length===0){
	console.log("There are no countries ending with 'ia'");
}else{
	console.log("Countries ending with 'ia'-", iaCountries);
}

//country with biggest no. of chars
let max=0;
let cnt;
for(const i of countriesArr){
	if(max<i[2]){
		max=i[2];
		cnt=i[0];
	}
}
console.log("Country with max chars-", cnt, max);

//countries with only 5 chars
let cntry5 = [];
for(const i of countriesArr){
	if(i[2]===5){
		cntry5.push(i[0]);
	}
}
console.log("Country with 5 chars-", cntry5);

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

//longest word in tech
let maxTech;
max=0;
for(const i of webTechs){
	if(i.length>max){
		max=i.length;
		maxTech=i;
	}
}
console.log("Longest word in webTechs-", maxTech);

//web arrays of arrays
let webTechArr = [];
for(const i of webTechs){
	webTechArr.push([i, i.length]);
}
console.log('WebTech arr of arr-', webTechArr);

//MERN stack
const mernStack = ['MongoDB', 'Express', 'React', 'Node']
let acronym = "";
for(const i of mernStack){
	acronym+=i[0];
}
console.log("Acronym-", acronym);

//WebTechs display
for (const i of webTechs) {
	console.log(i);
}

let fruits = ['banana', 'orange', 'mango', 'lemon'];

//reverse fruit order
let revFruits = [];
for (const i of fruits) {
	revFruits.unshift(i);
}
console.log("Reverse fruit-", revFruits);

//print arr of arr upper case
const fullStack = [
	['HTML', 'CSS', 'JS', 'React'],
	['Node', 'Express', 'MongoDB']
];

for(i of fullStack){
	for(j of i){
		console.log(j.toUpperCase());
	}
}
