// Singleton object

const tinderUser = new Object()
// console.log(tinderUser);


const userTwo = {
    email: "sshaik@123.com",
    userfullname: {
        username: {
            firstname: "Shahrukh",
            lastname: "shaikh"
        }
    }
}

// console.log(userTwo.userfullname.username.lastname);



const obj1 = {1:"A", 2:"B"}
const obj2 = {3:"C", 4:"D"}
const obj3 = {5:"E", 6:"F"}

// const obj4 = Object.assign({},obj1,obj2,obj3)

// console.log(obj4);

const obj4 = {...obj1, ...obj2} // spread operator
// console.log(obj4);



// ------------OBJECT Destrcture------------------

const course = {
    coursename : "Js in detail",
    courseprice : "999",
    courseduration : "3 months"
}

console.log(course.courseduration);

const {coursename} = course // destructure
// OR
const {coursename:name} = course // if we want to change the name of coursename to name
console.log(coursename);
console.log(name);

{
    //JSON
}




[
    {}, 
    {},        // JSON
    {}
]











