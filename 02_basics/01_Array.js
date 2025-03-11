const myArr=[0,1,2,3,4,5,true,"Parth"]
console.log(myArr);
console.log(myArr[2])

const myHeros=["Naruto","Itachi","Obito","Kakashi","Sasuke"]
console.log(myHeros[3]);


const myArr2= new Array(1,2,3,4,5,6)
console.log(myArr2);


// ARRAY METHODS


myArr.push(6)      // Adds from end
myArr.push(22)
console.log(myArr);

myArr.pop()        // Removes from end
console.log(myArr);

myArr.unshift(9)    // Adds value in starting
console.log(myArr);

myArr.shift()      // Removes from starting
console.log(myArr);


console.log(myArr.includes(8));  // gives only true false

console.log(myArr.indexOf(6));   // gives the index


const newArr= myArr.join()     // converts elements of array in strings

console.log(myArr, typeof myArr);
console.log(newArr,typeof newArr);


// slice, splice

console.log("A", myArr);
const myn1=myArr.slice(1,3)
console.log(myn1);
console.log("B",myArr);


const myn2 = myArr.splice(1,3)
console.log("c", myArr);

console.log((myn2));



