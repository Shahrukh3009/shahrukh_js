const userEmail = []

if (userEmail) {
    console.log("We got the user email");
} else {
    console.log("we don't have user Email");
    
}

// falsy values

// false , 0, -0, BigInit 0n, null, undefined, Nan, ""


// Truthy values

// "0", "false", " ", [], {}, function(){}



// Nullish coalescing operator ( ?? )


let val1;

// val1 = null ?? 10  // always assigned the value opposite to null or undefined

// val1 = 10 ?? undefined


// val1 = 5 ?? 10 // it will always show left side value in this case

// val1 = 15 ?? 10 // same

// console.log(val1);



// Ternary operator
