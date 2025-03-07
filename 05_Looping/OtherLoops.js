// For of

//["","",""] strings in array
//[{},{},{}] objects in array\


const arr=[1,2,3,4,5,6,7]

/*for (const element of object) {
    
}*/  //For of loop

for (const num of arr) {
    console.log(num);
    
}


const greetings="Hello_World"

for (const greet of greetings) {
    console.log(`Each Char is ${greet}`);
    
}


// MAPS

const map=new Map()
map.set('IN',"India")
map.set("USA","United States of America")
map.set("PAK","Pakistan")
map.set("Fr","France")

console.log(map);

for (const [key,value] of map) {
    console.log(key,":-",value);
    
}

const myObj={
    'game1':'Basketball',
    'game2':'Cricket',
    'game3':'Badminton'

}

/*for (const [key,value] of myObj) {
    console.log(key,":-",value);
}*/

