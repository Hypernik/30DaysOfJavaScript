let month = prompt('Enter a month').toLowerCase();
month = month.charAt(0).toUpperCase() + month.slice(1);
if(month=='February'){
	alert('February has 28 days');
}else if(month=='January'||month=='March'||month=='May'||month=='July'||month=='August'||month=='October'||month=='December'){
	alert(month+' has 31 days');
}else{
	alert(month+' has 30 days');
}