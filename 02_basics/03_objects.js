// Object literals

const JsUser = {
    name : "Shahrukh",
    email: "sshaik@google.com",
    age: "25",
    isLoggedIn: "false",
    location : "India",
    loginDays: ["monday", "tuesday", "wed"]
}

// console.log(JsUser.age);
// console.log(JsUser["isLoggedIn"]); // correct way

// JsUser.age = "30" // to change the value of object
// console.log(JsUser);

// Object.freeze(JsUser) // to locked the object values
// JsUser.location = "maharashtra"
// console.log(JsUser);


JsUser.greetings = function(){
    console.log(`Hello Js User ${this.name}`);
    
}

