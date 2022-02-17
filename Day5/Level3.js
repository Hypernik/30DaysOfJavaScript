const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
console.log('Min:',ages[0], 'Max:', ages[ages.length-1]);
var median;
var index = Math.floor(ages.length/2);
if(ages.length%2==0){
	median = (ages[index] +ages[index+1])/2;
}else{
	median = ages[index];
}
console.log(ages)
console.log(median)

var totalAge=0;
ages.forEach(function(element){
	totalAge+=element;
})
var average = totalAge/ages.length;
console.log(average);

console.log('Range:', ages[ages.length-1]-ages[0])

var minAvg = ages[0] - average;
var maxAvg = ages[ages.length-1] - average;
console.log("min - avg:", Math.abs(minAvg))
console.log("max - avg:", Math.abs(maxAvg));
