// Destructing allow us to unpack arrays or objects into bunch of variables which makes working with arrays and objects a bit more convenient
//Array Destructuring
let [a,b]=[1,2,3,4,5,6,7];
// console.log(a,b); // it take only elmnt mathced with 0th then followed by 1st index and so on

let {name,age}={name:"Ritik",age:22,city:"Jabalpur"}
// console.log(name,age);

// what if we want to skip some values
let {firstName, lastName, Country} = {firstName:"Ritik",middleName:"Singh",lastName:"Yadav",age:22 ,city:"jabalpur",Country:"India"};
console.log(firstName, lastName, Country);


let [x,,y,,z]=[1,2,3,4,5,6,7,8,9];
console.log(x,y,z);


let a1="ritik"
let a2 = "yadav"
let a3 =24

const person={
    a1,
    a2,
    a3,
}
// HERE HOW WE CAN USE DESTRUCTURING TO UNPACK OBJECT PROPERTIES INTO VARIABLES
console.log(person);