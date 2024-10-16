const myObject = {
    js : "javascript",
    cpp : "C++",
    swift : "swift by apple",
}

for (const key in myObject) {
    console.log(`${key} is used for shortcut ${myObject[key]}`);
    
}