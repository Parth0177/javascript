const name="Parth"
const Age=22

//console.log(name + " of age "+ Age+" is a good boy");

console.log(`Hello my name is ${name} and my age is ${Age}`);


const gameName= new String("Parthoic-pc")

console.log(gameName[2]);
console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase());
console.log(gameName);

console.log(gameName.charAt(6));
 console.log(gameName.indexOf('P'));
 

const newString= gameName.substring(0,6)
console.log(newString);

const anotherString =gameName.slice(2,4)
console.log(anotherString);

const newStirngOne="     Parth    "
console.log(newStirngOne);
console.log(newStirngOne.trim());



const url="https://parth.com/parth%20tiwari"
console.log(url.replace('%20','-'));

console.log(url.includes("parth"));


const newString2 = new String("Parth-Tiwari-017")
console.log(newString2.split('-'));

