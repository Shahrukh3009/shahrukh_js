const name = "Shahrukh"
const age = 26

console.log(name + age + "Yes"); // Old way of writing

console.log(`Hello My Name is ${name} and My age is ${age}`) // Modern way of writing which is called as String Interpolation

const gameName = new String ('Shahrukh')
console.log(gameName[1]);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(7));
console.log(gameName.indexOf('a'));


const newString = gameName.substring(0,4)
const anotherString = gameName.slice(-5, 4)
console.log(newString);
console.log(anotherString);


const newStringOne = "   Shaikh    "
console.log(newStringOne);
console.log(newStringOne.trim());


const newStringTwo = "Shahrukh%shaikh"
console.log(newStringTwo.replace("%", "-"));
console.log(newStringTwo.includes('sundar'))
console.log(newStringTwo.includes('shaikh'))





