// const coding = ["JS","Java","CPP","Python","Apex"]

// coding.forEach( function(item){
//     console.log(item);
    
// } )

// Using arrow function

// coding.forEach((value)=>{
//     console.log(value);
    
// })


// one more way

// function printMe (item){
//     console.log(item);   
// }
// coding.forEach(printMe)




// loops on object which are into the arrays

const users = [
    {
        userName1 : "Shahrukh",
        age:"20"
    },
    {
        userName2 : "Shaikh",
        age:"25"
    },
    {
        userName3 : "Shafiya",
        age:"26"
    }
]

users.forEach((value)=>{
    console.log(value.age);
    
})