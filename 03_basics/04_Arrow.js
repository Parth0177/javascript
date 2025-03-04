const user={
    username:"Parth",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username} , Welcome to website`);
        
    }

}
user.welcomeMessage()
user.username="Gunnu"
user.welcomeMessage()


/*function chai(){
    let username="Parth"
    console.log(this.username);
    
}*/
 chai=()=>{
    let username="Parth"
    console.log(this.username);
    
}
chai()

//()=>{} arrow function

/*const addtwo=(num1,num2)=>{   Basic arrow function
    return num1+num2
}*/

const addtwo= (num1,num2)=>  num1+num2
const addthree=(num1,num2)=> (num1+num2)

const addfour=() =>({username:"Parth"})
console.log(addfour());


console.log(addtwo(3,4))
console.log(addthree(4,8));


