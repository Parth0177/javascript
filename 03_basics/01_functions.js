function sayMyName(){
    console.log("P");
    console.log("A");
    console.log("R");
    console.log("T");
    console.log("H");   
}
//sayMyName()

/*function addTwoNumbers(Number1,Number2){
    console.log(Number1+Number2);
    
}*/

function addTwoNumbers(Number1,Number2){
    let result=Number1+Number2
    return result;    
}
const result=addTwoNumbers(5,9)

//console.log("result is:",result);

function loginuserMessage(username){
    if(username===undefined){
        console.log("Please enter a username");
        return
        
    }
    return `${username} Just Logged in`
}

console.log(loginuserMessage("Parth"))