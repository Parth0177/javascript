//const tinderUser= new Object()
const TinderUser={}
TinderUser.id="123abc"
TinderUser.name="Parth"
TinderUser.isLoggedin=false

//console.log(TinderUser);

const regularUser={
    email:"abc@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Parth",
            lastname:"Tiwari"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);


const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj4={5:"e",6:"f"}

//const obj3=Object.assign({},obj1,obj2,obj4)

const obj3={...obj1,...obj2,...obj4}
console.log(obj3);

console.log(TinderUser);

console.log(Object.keys(TinderUser));
console.log(typeof Object.keys(TinderUser));
console.log(Object.values(TinderUser));

console.log(Object.entries(TinderUser));


console.log(TinderUser.hasOwnProperty("isLoggedin"));



