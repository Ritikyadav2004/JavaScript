// accessing method 
// let heading = document.getElementById("heading");// return value
// console.dir(heading); // null if wrong 

// accessing with id name 
// let button =  document.getElementById("myid")
// console.log(button);
// console.dir(button);
// //
// // accessing with class name 
// let headings = document.getElementsByClassName("myclass")
// console.log(headings);
// console.dir(headings);

// accessing with tag
// let para = document.getElementsByTagName("p")
// //console.log(para);
// console.dir(para);

//accessing with queary selector
// here we can pass id and class both it detect itself

// let elemnt  = document.querySelector("p"); // 1st element return 
// console.dir(elemnt);

// let elemntall  = document.querySelectorAll("p"); // 1st element return 
// console.dir(elemntall);

// accesing with class name
// let elemnt  = document.querySelector(".myclass"); // 1st element return 
// console.log("single elemnt");
// console.dir(elemnt);

// // accessing with id name
// let elemntall  = document.querySelectorAll(".myclass"); // 1st element return 
// console.log('All Element');
// console.dir(elemntall);



let elemnt  = document.querySelector("#myid"); // 1st element return 
console.log('Single elemnt');
console.dir(elemnt);

// // accessing with id name koi sens nhi bananta as single elemnt
// let elemntall  = document.querySelectorAll("#myid"); // 1st element return 
// console.dir('All element',elemntall);
