// if

/*if(condition){ // if the condition is true then only it will execute.

}*/

//comparison operator
// <, >, <=, >=, ==, !=, ===

if(2!=3){
    console.log("executed");
    
}

const temperature=81
if(temperature<=50){
    console.log(`The Temperature is less than 50 and it is ${temperature}`);
    
}else{
    console.log("The temperature is more than 50");
    
}

//const balance =1000

//if(500<balance<1000) console.log("test"),
//console.log("test2");

 // +++++++++++ NESTED IF ELSE +++++++++++

const balance =10000
 if(balance<2000){
    console.log("Less Than 2000");
    
 }else if(balance<5000){
    console.log("Less than 5000");
    
 }else if(balance<9000){
    console.log("Less than 9000");
    
 }else if(balance>10000){
    console.log("Balance is greater than 10000");
    
 }
 else{
    console.log("Balance is greater than 9000 but less than 10000");
    
 }


const userLoggedIn= true
const debitCard=true
const loggedInfromGoogle=false
const loggedInfromEmail=true

if(userLoggedIn && debitCard){
    console.log("Allow To Buy Courses");
    
}

if(loggedInfromGoogle||loggedInfromEmail){
    console.log("User Logged In");
    
}
