// singleton
// agar hum literals use krke object create krte h toh singleton nhi banta.
// constructor se banta h.


//++++++++++++ Object Literals+++++++++++++

const mySym=Symbol("Key1")


const jsUser={
    name:"Parth",
    "Full Name":"Parth Tiwari",
    [mySym]:"myKey1",
    age:22,
    location:"Lucknow",
    Email:"parthtiwari670@gmail.com",
    isLoggedin:false,
    lastLoginDays:["Monday","Saturday"]
}

console.log(jsUser.Email);
console.log(jsUser["Email"]);
console.log(jsUser["Full Name"]);
console.log(jsUser[mySym]);

//Object.freeze(jsUser)
jsUser.Email="Parthtiwaristjoseph@gmail.com"

console.log(jsUser);
console.log(jsUser["Email"]);

jsUser.greeting= function(){
    console.log("Hello Js User");
}
jsUser.greeting2=function(){
    console.log(`Hello JS User,${this["Full Name"]}`); 
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());






