function sayMyName() {
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("I");
    console.log("K");
    console.log("H");
}

// sayMyName()






// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)
// }

// addTwoNumbers(7,8)
// addTwoNumbers(7,"8")





// function addTwoNumbers(number1, number2){
//     let result = number1 + number2
//     return result
// }




// OR 





// function addTwoNumbers(number1, number2){
//     // let result = number1 + number2
//     return  number1 + number2
// }

// const result = addTwoNumbers(6,7)

// console.log("Result : ",result );




// function userLoggedIn (username){
//      return `${username} just logged in`
// }

// console.log(userLoggedIn("Shahrukh"));


// function userLoggedIn(username) {
//     if (username === undefined) {
//         console.log("Please enter the username");
//         return

//     }
//     return `${username} just logged in`



// }
// console.log(userLoggedIn());

//OR

// function userLoggedIn(username) {
//     if (!username) {
//         console.log("Please enter the username");
//         return

//     }
//     return `${username} just logged in`



// }
// console.log(userLoggedIn());


// If we pass the value in parameter

// function userLoggedIn(username = "Shaikh") {
//     if (!username) {
//         console.log("Please enter the username");
//         return

//     }
//     return `${username} just logged in`



// }
// console.log(userLoggedIn("Shahrukh"));



// function cartTotalPrice (...num1) {   // rest operator
//     return num1
// }

// console.log(cartTotalPrice(100, 200,300));


// to use object in function
const user = {
    username:"Shafiya",
    age:"23"
}

function handleObject (anyobject){
    console.log(`Hello My name is ${anyobject.username} and my age is ${anyobject.age} `);
    
}
handleObject(user)

//t0 use Array in function

const myNewArray = [200, 300, 400, 500, 600]

function returnSecondValue (getArray){
return getArray[3]
}
console.log(returnSecondValue(myNewArray));



