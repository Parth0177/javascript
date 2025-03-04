function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200,400,600,800,720));

function calc(val1,val2,...val3){
    return val1,val2,val3
}
console.log(calc(400,100,500,600,800,200,300,1000,9900));


const user={
    username:"Parth",
    price:199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} 
    and price is ${anyObject.price}`);   
}
handleObject(user)


const mynewArray=[200,400,600,800]

function returnSecondValueOfArray(getArray){
    console.log(`The Second Value of Array is ${getArray[1]}`);    
}
returnSecondValueOfArray(mynewArray)