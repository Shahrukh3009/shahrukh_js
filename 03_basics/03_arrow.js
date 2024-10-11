//this keyword

const user = {
    username : "Shahrukh",
    price : 200,

    welcomemessage : function(){
        console.log(`Hello ${this.username}, Welcome to our channel`)
    console.log(this);

    }

    
}

// user.welcomemessage()
// user.username = "Shaikh"
// user.welcomemessage()

// console.log(this);

// ------------------------------Arrow Function------------------------------------

const chai = () =>{
    let userid = 30
    console.log(this.userid); // it will throw undefined because we cannot call this keyword in function
    
}

chai()

//Arrow function 1  => If we put curly braces, then we have to write return keyword
// const addTwo = (num1, num2) => {
//     return num1+num2
// }

// console.log(addTwo(7,2));


//Arrow function 2  => If we didn't put curly braces, then we dont have to write return keyword

// const addTwo = (num1, num2) => ( num1+num2 )


// console.log(addTwo(7,2));


