// Stack(Primitive) , Heap(Non-Primitive)

let myYtName="Unfiltered Life Of Cancer Warrior"
let anothername= myYtName
anothername="Parth Tiwari"

console.log(myYtName);

console.log(anothername);

//              HEAP


let userOne={
    email:"user1@gmail.com",
    upi: "user1@ibl"   
}

let userTwo = userOne
console.log(userTwo);

userTwo.email="Parth@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);


