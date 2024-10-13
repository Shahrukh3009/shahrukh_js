// For

// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     console.log(element);
// }

// loop into loop

// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//         console.log(i + "*" + j + " = " + i * j);
//     }

// }




// let myArray = ["Shahrukh", "Salman", "Rutik", "Amir", "Amithabh"]
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);  
// }



//break
for (let index = 1; index <= 10; index++) {
    console.log(index);
    if (index === 4) {
        console.log("Stopped at 4");  
        break;   
    }   
}



//continue
for (let index = 1; index <= 10; index++) {
    console.log(index);
    if (index === 4) {
        console.log("continue after 4");  
        continue;   
    }  
}