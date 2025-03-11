// Dates start from 1 January 1970

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);


let myCreatedDate= new Date(2023,0,23)
console.log(myCreatedDate.toDateString());


let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));



let newDate = new Date()
console.log(newDate.getDate());
console.log(newDate.getFullYear());
console.log(newDate.getHours());

newDate.toLocaleString('default',{
    weekday:"long",
    //console.log(newDate);
    
    })
    












