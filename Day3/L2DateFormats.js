const now = new Date()
const year = now.getFullYear();
const month = now.getMonth() + 1;
const date = now.getDate();
const hours = 7;//now.getHours();
const minutes = 5;//now.getMinutes();

//YYYY-MM-DD HH:mm
console.log(`${year}-${month}-${date} ${hours}:${minutes}`);
// DD-MM-YYYY HH:mm
console.log(`${date}-${month}-${year} ${hours}:${minutes}`);
// DD/MM/YYYY HH:mm
console.log(`${date}/${month}/${year} ${hours}:${minutes}`);

//Level3

let hours1 = (hours<10)? '0'+hours: hours;
let minutes1 = (minutes<10)? '0'+minutes: minutes;
//YYYY-MM-DD HH:mm
console.log(`${year}-${month}-${date} ${hours1}:${minutes1}`);