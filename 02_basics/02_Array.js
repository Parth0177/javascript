const marvelHeros=["Thor","Spiderman","Iron man"]
const DcHeros=["Superman","Flash","Batman"]

//marvelHeros.push(DcHeros)    It changes in the same array
//console.log(marvelHeros[3][1]);

//const all_heros=marvelHeros.concat(DcHeros)   //it gives new copy of array
//console.log(all_heros);


const all_new_heros= [...marvelHeros,...DcHeros]  // spread operator ...
console.log(all_new_heros);

const Another_Array=[1,2,3,[4,5,6],8,7,[true,false],[4,5,8,["Parth","Lala"]]]

const real_another_array= Another_Array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Parth"))
console.log(Array.from("Parth"));
console.log(Array.from({name:"Parth"}));  // Intersting Case

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));

