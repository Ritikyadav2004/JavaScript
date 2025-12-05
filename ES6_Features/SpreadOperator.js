let arr=[1,2,3,4,5,6,7,8,9];
// console.log(...arr);

let arr2=[...arr,10,11,12,13,14,15]; // it create neww array which stored in arr2 and concatenate
// console.log(arr2);



let arr3=[...arr,...arr2 ]  // creates new array and stored it into arr 3 
// console.log(arr3);


// WORKING WITH OBJECTS

let obj1={
    firstName:"john",
    age:22,
}
let obj2 ={
    lastName:"doe",
    city:"new york"
}

let obj3={...obj1,...obj2}
console.log(obj3);