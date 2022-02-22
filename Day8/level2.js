const users = {
	Alex: {
		email: 'alex@alex.com',
		skills: ['HTML', 'CSS', 'JavaScript'],
		age: 20,
		isLoggedIn: false,
		points: 30
	},
	Asab: {
		email: 'asab@asab.com',
		skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
		age: 25,
		isLoggedIn: false,
		points: 50
	},
	Brook: {
		email: 'daniel@daniel.com',
		skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
		age: 30,
		isLoggedIn: true,
		points: 50
	},
	Daniel: {
		email: 'daniel@alex.com',
		skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
		age: 20,
		isLoggedIn: false,
		points: 40
	},
	John: {
		email: 'john@john.com',
		skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
		age: 20,
		isLoggedIn: true,
		points: 50
	},
	Thomas: {
		email: 'thomas@thomas.com',
		skills: ['HTML', 'CSS', 'JavaScript', 'React'],
		age: 20,
		isLoggedIn: false,
		points: 40
	},
	Paul: {
		email: 'paul@paul.com',
		skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
		age: 20,
		isLoggedIn: false,
		points: 40
	}
};
let max=0;
for(let i of Object.keys(users)){
	if(max<users[i].skills.length){
		max = users[i].skills.length;
		var user = i;
	}
}
console.log(user, max);

let logUsers = [];
let points50 = [];

for(let i of Object.keys(users)){
	if(users[i].isLoggedIn){
		logUsers.push(i);
	}
	if(users[i].points>=50){
		points50.push(i);
	}
}
console.log("Logged in users-", logUsers.length, logUsers);
console.log("Users with more than 50 points-", points50.length, points50);

let mernUsers = [];

for(let i of Object.keys(users)){
	let mern = ["MongoDB","Express","React","Node"];
	let arr = users[i].skills
	let cond = arr.includes(mern[0]) && arr.includes(mern[1]) && arr.includes(mern[2]) && arr.includes(mern[3])
	if(cond){
		mernUsers.push(i);
	}
}
console.log("MERN Users-",mernUsers.length, mernUsers);

const usersCpy = Object.assign({}, users);
usersCpy.Nikhil = {
	email: 'nikhil@nikhil.com',
	skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
	age: 22,
	isLoggedIn: true,
	points: 56
};
console.log(Object.keys(users));
console.log(Object.keys(usersCpy));

console.log(Object.values(users));

const countries = {
	India: {
		name: "India",
		capital: "Delhi",
		population: 1380000000,
		language: ["Hinid", "Marathi", "Telegu", "Tamil", "Kannada", "Malyali", "Bengali", "Gujrati", "Bhojpuri"]
	},
	China: {
		name: "China",
		capital: "Beijing",
		population: 1400000000,
		language: ["Mandarin"]
	}
};

console.log(countries.India.name);
console.log(countries.India.capital);
console.log(countries.India.population);
console.log(countries.India.language);

