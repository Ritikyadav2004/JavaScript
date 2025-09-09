// console.log("Hello World?");
// age = 12;
// name = "Ritik Yadav";
// lucknumber = 12.0;
// console.log(age," ",name," ",lucknumber)
// y = undefined;
// n =null;
// isFollow=true;
// isFollowing=false;
// console.log(y,n,isFollow,isFollowing);
// // cannot redecler but can be update
// let fulname = "Ritik Yadav"
// let age1 = 21;
// let totalprice = 1000;
// console.log(fulname,age1,totalprice)
// age1 = 23;6

// console.log(age1);
// // can be redcaler
// var number = 21;
// console.log("Number !st time printed",number);
// var number =22;
// console.log("Number 2nd time redaclare and printed",number);

// //constant aesi cheej jo change nhi ho sakti 
// const age2 =22;
// console.log(age2);
// const pi = 3.141;
// console.log(pi);

// let a;
// console.log(a);// undefinmed
// // const a1;
// // console.log(a1); // genrate error

// // var have global scope 
// // let and const have block scoope {}
// // alert("Hey There");
// // prompt("How are you");
// let price = 100.33;
// let fulname2= 'Ritik yadav';
//Learning object in js
// let obj = {
//     name:"Ritik",
//      id:1,
//      salary:100,
//      Address:"Noida"
//     }
// console.log(obj.Address,obj.id);
// console.log(typeof(null));
// let x = BigInt("893739847893739");
// console.log(x);

// const student = 
// {
//     age:21,
// fullname:"Ritik",
// mark:9.2,
// isPass:true,
// }
// student["age"]++;
// // console.log(student);
// student["mark"]=10;
// console.log(student["age"],student["mark"]);

// const product=
// {
//     titile : "Classic Pen",
//     rating:4,
//     offer:5,
//     price:270
// }
// console.log(product);

// const profile
// ={
//     user_name:"shradhakhapra",
//     follow:true,
//     message:true,
//     post:195,
//     followers:"569k",
//     following:"4",
//     name :"Shradha Khapra",
//     Profession:"Entrepreneur",
//     Bio:"Apna College | ex-Micrsoft , DRDO To educate someone is the highest privilege",

// }
// console.log(profile);
// console.log(typeof profile["follow"]);

// let age =108;
// console.log(age>18 ?"Adult":"Child");
// alert("Hello Let do some Question");
// let number=prompt("Write number:");
// if(number%5===0)
//  {console.log("yes");}
// else console.log("Not");
// for(let i=0;i<=7    6;i++)
// {
//     console.log(i);
// }
// 
// let arr = [2323,323,33,3233,32,32,3]
// for(let val of arr)
// {
//     console.log("val",val);
// }


//for in loop
// const profile
// ={
//     user_name:"shradhakhapra",
//     follow:true,
//     message:true,
//     post:195,
//     followers:"569k",
//     following:"4",
//     name :"Shradha Khapra",
//     Profession:"Entrepreneur",
//     Bio:"Apna College | ex-Micrsoft , DRDO To educate someone is the highest privilege",

// }

// // for(let i in profile)
// // {
// //     console.log("Key=",i,"Value=",profile[i]);
// // }

// //templete
// // let senetence = `this is a special type of string`;
// // console.log(senetence);
// console.log(`this profilw is of ${profile.name} and she have ${profile.followers} she was a brillint women has proffession of ${profile.Profession}`);

// let arr = [12,23,345,44,45];
// for(let i=0;i<arr.length;i++)
// {
//     console.log(`Marks of Student ${i}: ${arr[i]/arr.length}`);
// }

//question for a given arr with 5 item ->[250,645,300,900,50]
//all item have 1-% discouhnt pff chnage the array ton stor final price
// let OriginalPrice=[250,645,300,900,50];
// let NewPrice = [];
// //formula used --> newPrice= originalprice -(originalPrive/10)
// for(let i=0;i<OriginalPrice.length;i++)
// {
//     NewPrice[i]=OriginalPrice[i]-(OriginalPrice[i]/10);

// }
// for(let i=0;i<OriginalPrice.length;i++)
// {
//     console.log(`Price After Discount of 10% in ${OriginalPrice[i]} is avialable in ${NewPrice[i]}`);
// }

//Push()
//POP()
//toString()
//  let veggie = ['Potato','apple','lichi','banana']
// //  veggie.push("Gazar","Mango","Began")
// // // //console.log(veggie);
// // // console.log(veggie.pop());

// // console.log(veggie.toString());

// let marks = [23,34,45,55,44,5,56,6,6,4,6]
// // console.log(marks.toString());
// let arr2 = marks.toString();

// let newarr = arr2.concat(veggie)

// //to add elemnt in starting positon
// let  hero = ['marvel','thor','ironman','Krish'];
// // hero.unshift('Shaktiman');
// // console.log(hero);

// // console.log(hero.shift());
// // console.log(hero.slice());
// hero.splice(1,1,"Ola")
// console.log(hero);


// console.log("abcdefg".toUpperCase());
// understanding function
// function myfunction()
// {
//     console.log("hey There");
//     console.log("hey There");
//     console.log("hey There");
//     console.log("hey There");
//     console.log("HEy There");
// }
// myfunction();
// myfunction();

// function fn(msg,Number)
// {
//     console.log(msg+ Number);
// }
// fn("I love JavaScript",100);

// function sum(a,b)
// {  
//     console.log("Now We Return");
//     return a+b;

// }
// console.log(sum(739,393));

// Arrow Function Morden Java Scrpit
// const sum=(a,b)=>{
//     return a+b;
// }
// console.log(sum(34,34));

// const arrmul=(a,b)=>{
//     return a*b;
// }
// console.log(arrmul(56,5));

// const printhello=()=>
// {
//     console.log("HELLO");
// }
// printhello();
// let count = (msg) => {
//     let count1 = 0;
//     // msg.toLowerCase()
//     for (let element of msg) {
//         if (element === 'a' || element === 'e' || element === 'i' || element === 'o' || element === 'u') 
//             { count1++ }
//     }
//     return count1;
// }
// console.log(count("abcdefgh"));

//foreach loop
// let arr = [1,2,3,4,5,6];
// // arr.forEach(function printval(val)
// // {
// //     console.log(val)
// // })
// let arr = [1,2,3,4,5,6];
// arr.forEach((val,idx,arr)=>{
//    // console.log("THis is with arrow function");
//     console.log(val,idx,arr);
// })


// let arr = [1,2,3,4,5,6];
// arr.forEach((val)=>
// {
//     console.log(`Square of ${val} is ${val*val}`);
// })


//map create a new array it return 
// let arr = [1,2,3,4,5,6];

// arr.map((val)=>
// {
//     console.log(`Printing with map function ${val}`);
// })

// let arr = [1,2,3,4,5,6];
// let newarr1 = arr.map((val)=>
// {
//     return val**2;
// }
// )
// console.log(`Original Array ${arr}`);
// console.log(`Sqaure      ${newarr1}`);

// filter metho ka kaam hota he filter krna based on comdition

// it retun boolean

// let arr = [1,2,3,4,5,6];
// let EvenArr = arr.filter((val)=>
// {
//     return val%2!==0;
// })
// console.log(`Value of Original Arr ${arr}`);
// console.log(`Value of Even Array ${EvenArr}`);

// let arr = [1,2,3,4,5,6];
// let result = arr.reduce((res,cur)=>
// {
//     return res+cur; // res stay updated 1st point to iundex 0 and cur moves
// });
// console.log(result);


//finding largest elemnt
// let arr = [1,2,3,10,5,6];
// let result =arr.reduce((res,cur)=>
// {   
//     // if(res<cur)
//     //     res=cur
//     // return res ;
//     // return cur <res ? res : cur;
// })
// console.log(result);

// let arr = [98,77,89,96,65,91,3,90,99];
// let result = arr.filter((val)=>
// {
//     return val>=90;
// })
// console.log(result);

// let number = prompt("Enter Number:")
// let arr = [];
// for(i=0;i<number;i++)
// {
//     arr[i]=i+1;
// }
// console.log(arr);
// let result = arr.reduce((prev,next)=>
// {
//     return prev*next;
// })
// console.log("Factorial",result);

// let result2 = arr.reduce((prev,next)=>
// {
//     return prev+next;
// })
// console.log("Sum ",result2);

// alert("hey")
// window.console.log("Hi there")
//DOM (document obhect model)

// console.log(document);
// console.dir(document.body.childNodes[1]);
// console.log(document.body);
