//

const heros = ["Shahrukh","Amir","Salman","Rutik"]
const south_heros = ["Nagraj","Marie","Allu","MaheshBabu"]

// heros.push(south_heros)

// console.log(heros);
// console.log(south_heros);

// const all_Heros = heros.concat(south_heros)
// console.log(all_Heros);

const all_new_heros = [...heros, ...south_heros]  //best way to add to arrays [Spread operator]
console.log(all_new_heros);


console.log(Array.isArray("Shahrukh"));
console.log(Array.from("Shahrukh"));

let score = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score, score2, score3));







