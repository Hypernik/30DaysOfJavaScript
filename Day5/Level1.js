const emptyArr = Array();
console.log(emptyArr);

const fruits = ["Apple", "Orange", "Pineapple", "Banana", "Strawberries", "Jamun", "Jackfruit"];
console.log(fruits);
console.log("Length:",fruits.length);
console.log("First:", fruits[0], "Last:", fruits[fruits.length-1], "Middle:",fruits[Math.floor((fruits.length)/2)]);

const mixedDataTypes = ["String", 3.14, 420, ["inside", "list"], true, "Add"];
console.log(mixedDataTypes);

const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
console.log(itCompanies);
console.log("No. of companies:", itCompanies.length);
console.log("First:", itCompanies[0], "Last:", itCompanies[itCompanies.length-1], "Middle:",itCompanies[Math.floor((itCompanies.length)/2)]);
console.log(itCompanies.join(", "));

const index = itCompanies.indexOf("Microsoft");
index!=-1? console.log("Company at", index): console.log("Company not found");

console.log(itCompanies.sort());
console.log(itCompanies.reverse());

console.log(itCompanies.slice(0,3));
console.log(itCompanies.slice(-3));
console.log(itCompanies.slice(Math.floor(itCompanies.length/2), Math.floor(itCompanies.length/2)+1));

console.log(itCompanies.shift());
console.log(itCompanies.splice(Math.floor(itCompanies.length/2),1));
console.log(itCompanies.pop());
console.log(itCompanies.splice());