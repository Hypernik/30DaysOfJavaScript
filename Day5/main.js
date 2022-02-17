// console.log(countries)
// console.log(webTechs);

var str = "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
str = str.replace(/[.,]/g,"");
console.log(str);
console.log(str.split(" ").length);

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

shoppingCart.unshift('Meat')
shoppingCart.push('Sugar')
shoppingCart.splice(shoppingCart.indexOf('Honey'), 1);
shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea';

console.log(shoppingCart);

var countries1 = [
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
  // 'Kenya',
  'India'
];
var index = countries1.includes('Ethiopia');
index?console.log("ETHIOPIA"): countries1.push("Ethiopia");
console.log(countries1);

var webTechs1 = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB',
]
var flag = webTechs1.includes('Sass');
flag? console.log('Sass is a CSS preprocess'): webTechs1.push('Sass');
console.log(webTechs1);

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd)
console.log(fullStack);

console.log(countries1.slice(0, 9));
var index = Math.floor(countries1.length/2);
if(countries1.length%2==0){
  console.log("Middle counties:", countries1[index], countries1[index+1]);
}else{
  console.log("Middle country:", countries1[index]);
}
console.log(countries1);
if(countries1.length%2==0){
  var cntryPart1 = countries1.slice(0, index);
  var cntryPart2 = countries1.slice(index);
}else{
  var cntryPart1 = countries1.slice(0, index+1);
  var cntryPart2 = countries1.slice(index+1);
}
console.log(cntryPart1, cntryPart2)