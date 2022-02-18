for(let i=0;i<11;i++){
	console.log(i);
}
let i = 0;
while(i<11){
	console.log(i);
	i++;
}
i=0;
do{
	console.log(i);
	i++;
}while(i<11);

for(let i=10;i>=0;i--){
	console.log(i);
}
i = 10;
while(i>=0){
	console.log(i);
	i--;
}
i=10;
do{
	console.log(i);
	i--;
}while(i>=0);

let n = 6;
for(let i=0;i<=n;i++){
	console.log(i);
}

//Pyramid
for(let i=0;i<=7;i++){
	console.log("#".repeat(i+1));
}

//loop for square of nums
for(let i=0;i<=10;i++){
	console.log(i,"x",i,"=",i*i);
}

//Loop for num square and cube
for(let i=0;i<=10;i++){
	console.log(i,"\t",i**2,"\t",i**3);
}

//even no.
for(let i=0;i<=100;i++){
	if(i%2==0){
		console.log(i);
	}
}

//odd numbers
for(let i=0;i<=100;i++){
	if(i%2!=0){
		console.log(i);
	}
}

//prime numbers
for(let i=1;i<=100;i++){
	let flag=true;
	let sqrtNum = Math.floor(Math.sqrt(i));
	for(let j=2;j<=sqrtNum;j++){
		if(i%j==0){
			flag=false;
			continue;
		}
	}
	if(flag){
		console.log(i);
	}
}

//sum of all nums
let sum=0;
for(let i=0;i<=100;i++){
	sum+=i;
}
console.log("Sum of 0 to 100 is", sum);

//sum of evens & odds
let sumEven = 0, sumOdd = 0;
for (let i = 0; i < 101; i++) {
	if(i%2==0){
		sumEven+=i;
	}else{
		sumOdd+=i;
	}
}
console.log("Even sum-",sumEven,"\nOdd sum-", sumOdd);

//random num array
let randomNums = [];
for(let i=0;i<5;i++){
	randomNums.push(Math.ceil(Math.random()*10));
}
console.log("Random array-", randomNums);

//unique random numbers
let uniqueRandom = [];
i=0;
while(i<5){
	let temp = Math.ceil(Math.random()*10);
	if(uniqueRandom.indexOf(temp)==-1){
		uniqueRandom.push(temp);
		i++;
	}
}
console.log("Unique random array-", uniqueRandom)

//six random characters
let randomChars	= "";
i=0;
while(i<6){
	let temp = Math.ceil(Math.random()*74) + 48;
	if((temp>=48 && temp<=57)||(temp>=65 && temp<=90)||(temp>=97 && temp<=122)){
		randomChars+=String.fromCharCode(temp);
		i++;
	}
}
console.log("Six chars random id-",randomChars);

