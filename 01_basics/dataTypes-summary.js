// Primitive dataTypes

// 7 Types : String, Boolean, Number, Symbol, BigInt, Null, Undefined

// Reference (Non-Primitive DataTypes)

// Array, Objects, Functions

//Array 

const heros = ["Shahrukh", "Salman", "Amir"];

//Object
let myObj = {
    name: 'Shahrukh',
    id: '123',
    age: '35'
}

//Function
const myFunction = function () {
    console.log("Hello world")
}



// ----------------------------Stack and Heap Memory-------------------------------

// Stack (Primitive)     Heap(Non-Primitive)

let myYoutubeName = "ShahrukhShaikhdotcom"
let anotherName = myYoutubeName

anotherName = "ShahrukhandShafiya"

console.log(myYoutubeName);
console.log(anotherName);


let userOne = {
    name: "shahrukh",
    age: "24"
}



let userTwo = userOne;

userTwo.name = "Shafiya"

console.log(userOne.name);
console.log(userTwo.name);



