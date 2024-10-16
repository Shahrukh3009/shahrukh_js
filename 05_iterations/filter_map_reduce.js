// filter


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const myNewNums = myNums.filter((value) =>
//     value > 4
// )

// console.log(myNewNums);

// another way

const myNewNums = myNums.filter((value) =>{
   return value > 4                               // we have to use return keyword if we put {}, otherwise it will log empty array
})

// console.log(myNewNums);

const books = [
    { title : "Book one", genre : "Fiction", publish: "1998", edition:"2016"},
    { title : "Book two", genre : "History", publish: "1978", edition:"2010"},
    { title : "Book three", genre : "Non-Fiction", publish: "2000", edition:"2022"},
    { title : "Book four", genre : "History", publish: "2012", edition:"2015"},
    { title : "Book five", genre : "Fiction", publish: "2003", edition:"2024"}
]

const myBooks = books.filter( (value)=>  value.genre === "History" && value.publish >= 2000)
// console.log(myBooks);



//------------------------------MAP-----------------------

const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumbers.map((nums)=>{
//     return nums+10
// })

// console.log(newNums);

//Chaining=>


// const newNumsOne = myNumbers.map((num)=> num * 20).map((num)=>num +2 ).filter((num)=> num > 50)
// console.log(newNumsOne);



//------------------reduce----------------------

const numbers = [1,2,3,4,5]

const newNumber = numbers.reduce((acc, currentValue)=>{
    return acc + currentValue
}, 0)

console.log(newNumber);







