const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

numbers.forEach(num=> console.log(num));
countries.forEach(country=> console.log(country));
numbers.forEach(num=> console.log(num));

let capCountries = countries.map(country => {return country.toUpperCase()});
console.log(capCountries);

let lenCountries = countries.map(country => {return country.length});
console.log(lenCountries);

let sqNums = numbers.map(num => {return num**2});
console.log(sqNums);

let capNames = names.map(name => {return name.toUpperCase()});
console.log(capNames);

let easyProd = products.map((product)=>{return [product.product, product.price]});
console.log(easyProd);

let landCountries = countries.filter((country) => country.includes("land"));
console.log(landCountries);

let sixCountries = countries.filter((country)=> country.length===6);
console.log(sixCountries);

let moreSixCountries = countries.filter((country)=> country.length>=6);
console.log(moreSixCountries);

let eCountries = countries.filter((country) => country.startsWith("E"));
console.log(eCountries);

let prodPrices = products.filter((product) => typeof(product.price)==="number");
console.log(prodPrices);

function getStringLists(arr){
	let newArr = arr.filter((item)=> typeof(item) === "string");
	return newArr;
}
console.log(getStringLists(["Hello", "Byse", 34, "sdf", true, "False"]));

let sumNum = numbers.reduce((sum, num)=> sum+=num,0);
console.log(sumNum);

let countSent = countries.reduce((sent, country,index) => {
	if(index === countries.length-1){
		return sent+="and "+ country + " are north European countries"
	}else{
		return sent+=country+", "
	}
}, "");
console.log(countSent);

//some should return true if the conditions is met by at least one element
//every should return true if the conditions is met by all of element

console.log(names.some((name)=> name.length>7));
console.log(countries.every((country)=> country.includes("land")));

//finds the value of the element which matches the condition first
//findIndex the index of the element which matches the condition first

console.log(countries.find((country)=> country.length===6));
console.log(countries.findIndex((country)=> country.length===6));
console.log(countries.findIndex((country)=> country==="Norway"));
console.log(countries.findIndex((country)=> country==="Russia"));
