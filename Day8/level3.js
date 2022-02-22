const personAccount = {
	firstName: "Nikhil",
	lastName: "Rawat",
	incomes: {
		job: {
			amount: 50000,
			description: "Salary from developer job"
		},
		business: {
			amount: 50000,
			description: "Profits from income"
		}
	},
	expenses: {
		shopping: {
			amount: 10000,
			description: "For all the shopping needs"
		},
		maintainance: {
			amount: 7000,
			description: "For business maintainence"
		},
		insurance: {
			amount: 10000,
			description: "For business and car insurance"
		}
	},
	totalIncome: function(){
		let sum=0;
		for(let i of Object.keys(this.incomes)){
			sum+= this.incomes[i].amount;
		}
		return sum;
	},
	totalExpense: function(){
		let sum=0;
		for(let i of Object.keys(this.expenses)){
			sum+= this.expenses[i].amount;
		}
		return sum;
	},
	accountInfo: function(){
		console.log("Name-", this.firstName, this.lastName);
		console.log("Total income-", this.totalIncome());
		console.log("Total Expense-", this.totalExpense());
		console.log("Account Balance-", this.accountBalance());
	},
	addIncome: function(name, amount, description){
		this.incomes[name] = {
			amount: amount,
			description: description
		}
	},
	addExpese: function(name, amount, description){
		this.expenses[name] = {
			amount: amount,
			description: description
		}
	},
	accountBalance: function(){
		return this.totalIncome()-this.totalExpense()
	}
};
personAccount.accountInfo();
personAccount.addExpese("Utilities", 15000, "For bills like electricity, water and internet");
personAccount.addIncome("Freelancing", 20000, "Income from freelancing on upwork");
console.log("Account Balance-", personAccount.accountBalance());
console.log("Total Income-",personAccount.totalIncome());
console.log("Total Expense-",personAccount.totalExpense());

const users = [
	{
		_id: 'ab12ex',
		username: 'Alex',
		email: 'alex@alex.com',
		password: '123123',
		createdAt:'08/01/2020 9:00 AM',
		isLoggedIn: false
	},
	{
		_id: 'fg12cy',
		username: 'Asab',
		email: 'asab@asab.com',
		password: '123456',
		createdAt:'08/01/2020 9:30 AM',
		isLoggedIn: true
	},
	{
		_id: 'zwf8md',
		username: 'Brook',
		email: 'brook@brook.com',
		password: '123111',
		createdAt:'08/01/2020 9:45 AM',
		isLoggedIn: true
	},
	{
		_id: 'eefamr',
		username: 'Martha',
		email: 'martha@martha.com',
		password: '123222',
		createdAt:'08/01/2020 9:50 AM',
		isLoggedIn: false
	},
	{
		_id: 'ghderc',
		username: 'Thomas',
		email: 'thomas@thomas.com',
		password: '123333',
		createdAt:'08/01/2020 10:00 AM',
		isLoggedIn: false
	}
];

const products = [
	{
		_id: 'eedfcf',
		name: 'mobile phone',
		description: 'Huawei Honor',
		price: 200,
		ratings: [
			{ userId: 'fg12cy', rate: 5 },
			{ userId: 'zwf8md', rate: 4.5 }
		],
		likes: []
	},
	{
		_id: 'aegfal',
		name: 'Laptop',
		description: 'MacPro: System Darwin',
		price: 2500,
		ratings: [],
		likes: ['fg12cy']
	},
	{
		_id: 'hedfcg',
		name: 'TV',
		description: 'Smart TV:Procaster',
		price: 400,
		ratings: [{ userId: 'fg12cy', rate: 5 }],
		likes: ['fg12cy']
	}
]

function signUp(userId, username, email, password){
	let userExists = false;
	for(let i of users){
		if(i._id === userId.toLowerCase() || i.email === email.toLowerCase()){
			userExists = true;
			break;
		}
	}
	if(!userExists){
		let user =  {
			_id: userId,
			username: username,
			email: email,
			password: password,
			createdAt:new Date(),
			isLoggedIn: false
		};
		users.push(user);
	}else{
		console.log("You already exist");
	}
}

function signIn(email, password){
	let index;
	for(let i=0;i<users.length;i++){
		if(email===users[i].email){
			index = i;
			break;
		}
	}
	
	if(users[index].isLoggedIn){
		console.log("You are already logged in!");
	}else{
		users[index].isLoggedIn = true;
		console.log("User signed In!!");
	}
}

signUp("asbd23", "Nikhi", "nikhil@email.com", "123456");
signIn("nikhil@email.com", "123456");

function rateProduct(name, userId, rating){
	let userExists = false;
	for(let i of users){
		if(userId === i._id){
			userExists=true;
			break;
		}
	}
	if(!userExists){
		return;
	}

	let productExists = false;
	let productIndex;
	for(let j=0;j<products.length; j++){
		if(products[j].name === name){
			productExists = true;
			productIndex = j;
			break;
		}
	}
	if(!productExists){
		return;
	}
	let rate = {
		userId: userId,
		rate: rating
	}
	products[productIndex].ratings.push(rate);
}

rateProduct("TV", "asbd23", 4);
console.log(products[2]);

function averageRating(name){
	let product;
	for(let i of products){
		if(i.name === name){
			product = i;
			break;
		}
	}
	let sum = 0;
	for(let i of product.ratings){
		sum+=i.rate;
	}
	console.log(sum/product.ratings.length);
}

averageRating("TV");

function likeProduct(name, userId){
	let userExists = false;
	for(let i of users){
		if(userId === i._id){
			userExists=true;
			break;
		}
	}
	if(!userExists){
		return;
	}

	let productExists = false;
	let productIndex;
	for(let j=0;j<products.length; j++){
		if(products[j].name === name){
			productExists = true;
			productIndex = j;
			break;
		}
	}
	if(!productExists){
		return;
	}
	let userIndex = products[productIndex].likes.indexOf(userId)
	if(userIndex!=-1){
		products[productIndex].likes.splice(userIndex,1);
	}else{
		products[productIndex].likes.push(userId);
	}
}

likeProduct("TV", "fg12cy");
console.log(products[2].likes);