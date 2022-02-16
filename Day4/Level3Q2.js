let month = prompt('Enter a month').toLowerCase();
let year = prompt('Enter the year');
month = month.charAt(0).toUpperCase() + month.slice(1);
if(month=='February'){
	if(year%400==0 || (year%4==0 && year%100!=0)){
		alert('February has 29 days');
	}else{
		alert('February has 28 days');
	}
}else if(month=='January'||month=='March'||month=='May'||month=='July'||month=='August'||month=='October'||month=='December'){
	alert(month+' has 31 days');
}else{
	alert(month+' has 30 days');
}