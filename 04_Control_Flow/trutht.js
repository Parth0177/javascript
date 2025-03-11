const userEmail="Parth670@gmail.com"

if(userEmail){
    console.log("Got User Email");
    
}else{
    console.log("Dont have user email!");
    
}

/* fasly values
  false ,0 , -0, BigInt On, "", null, undefined, NaN*/

 /* truthy values
  "0", "false" , " ", [] , {} , function(){} */ 

userEmail2=[]

if(userEmail2.length===0){
    console.log("Array is empty");
    
}

const emptyObj={}

if(Object.keys(emptyObj).length===0){
    console.log("Object is Empty");
    
}


//NULLISH COALESCING OPERATOR(??): null, undefined

let val1;
//val1= 5 ?? 10
//console.log(val1);

//val1= undefined?? 15
val1 = null ?? 10 ?? 15
console.log(val1);

// Terniary Operator

//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice<=80 ? console.log("less than 80"):console.log("More than 80");




