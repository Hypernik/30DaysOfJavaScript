const dog = {}
console.log(dog);

dog.name = "Shiro";
dog.legs = 4;
dog.color = "White";
dog.age = 3;
dog.bark = function(){
	console.log("Woof Woof!");
}

console.log("Name-", dog.name);
console.log("Legs-", dog.legs);
console.log("Color-", dog.color);
console.log("Age-", dog.age);
dog.bark();

dog.breed = "Pomerian";
dog.getDogInfo = function(){
	return this.name +" is " + this.age + " years old, with " + this.color + " color and " + this.breed + " breed.";
}

console.log("Breed-",dog.breed);
console.log(dog.getDogInfo());