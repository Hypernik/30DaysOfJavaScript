let a = 34;
let b = 54;

if(a>b){
	console.log(`${a} is greater than ${b}`);
}else{
	console.log(`${b} is greater than ${a}`);
}

console.log((a>b)? `${a} is greater than ${b}`: `${b} is greater than ${a}`);