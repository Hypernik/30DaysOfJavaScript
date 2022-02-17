let fruits = ["Orange", "Apple", "Banana", "Strawberries"];
let nums = [1, 3, 5, 8, 9];

console.log("Fruits:", fruits);
console.log("Length - ", fruits.length, nums.length);

let companiesString = "Google, Microsoft, Facebook, Apple, Amazon, IBM";
let companies = companiesString.split(", ");
console.log("Companies", companies);

console.log("First:", companies[0], "Last:", companies[companies.length-1]);
console.log("First:", companies.indexOf("Google"), "Last:", companies.indexOf('Facebook'));
console.log("Last index of:", companies.lastIndexOf("Apple"));
console.log("Company present?:", companies.includes("Alibaba"));

companies[3] = "Metaverse";
console.log("Companies", companies);

let index = companies.indexOf("Tesla");
index!=-1? console.log("The company does not exist in arraya"): console.log("The company does exist in the array");

console.log(companies.join());
console.log(companies.join(" | "));

console.log(companies.slice(3));
console.log(companies.slice(1, companies.length));

console.log("Splicing", companies.splice(0,1)); //removes the first item
console.log("Splicing with replace", companies.splice(3, 3, "McDonalds", "Alphabet", "Samsung"));
console.log("Companies", companies);

companies.push("Startbucks");
console.log(companies);
companies.pop();
console.log(companies);

companies.shift();
console.log(companies);
companies.unshift("Starbucks");
console.log(companies);

console.log(companies.reverse());

const arr= Array();	//creates an empty array
console.log(arr);

const eightArr = Array(8);
console.log(eightArr);

const eightXArr = Array(8).fill('X');
console.log(eightXArr);

const list1 = [1,2,3,4];
const list2 = [5,6,7,8];
const list3 = list1.concat(list2);
console.log(list3);
console.log(list3.length);

console.log("IsArray?:", Array.isArray(list3));

let frntEnd = ["HTML", "CSS", "JS", "React"];
let backEnd = ["Node", "Express", "MongoDB"];
const fullStack = [frntEnd, backEnd];
console.log(fullStack);