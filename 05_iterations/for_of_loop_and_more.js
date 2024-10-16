// for of loop

// const myArray = [1, 2, 3, 4, 5]
// for (const arr of myArray) {
//     console.log(`value of array is ${arr}`);
    
// }

// const Greertings = "Welcome Shahrukh"

// for (const greet of Greertings) {
//     console.log(`Each value is ${greet}`);
    
// }


//Maps

const map = new Map

map.set("IN", "INDIA")
map.set("USA", "UNITED STATE OF AMERICA")
map.set("FR", "FRANCE")
map.set("CA", "CANADA")

// console.log(map);

// if we want to use loop on it

// for (const key of map) {
//     console.log(key);         // it's not giving proper log as it's showing seperate arrays
// }


for (const [key, value] of map) {
    console.log(key, ":-", value);         // it's giving proper log
}

