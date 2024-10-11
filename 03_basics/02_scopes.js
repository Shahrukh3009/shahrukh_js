var c = 300

let a = 100

if (true) {
    let a = 10
    const b = 20
    var c = 30
    console.log("Inner :", a);

}


console.log(a);
// console.log(b);
console.log(c);


// Nested Scope

function one() {
    const username = "Shahrukh"

    function two() {
        const website = "Youtube"
        console.log(username);

    }
    // console.log(website);

    two()

}
// one()


if (true) {
    const username = "Shaikh"
    if (username === "Shaikh") {
        const website = " LinkedIn"
        console.log(username + website);
    }
    // console.log(website);    // It will not work as it is outside the scope of if

}
// console.log(username);     // It will not work as it is outside the scope of if


// ------------------------ Interesting----------------------------


console.log(addOne(5)); // we can initialize value before the function in this typpe

function addOne(num) {
    return num + 1
}
console.log(addOne(5))

//------------------------

// console.log(addTwo(4)) // we cannot initialize value before the function in this type it will give an error

const addTwo = function addThree(numb) {
    return numb + 2
}

console.log(addTwo(4))

 




