// DATE 02-09-2025 || LEC-01 || Higher order function || Callback function || setTimeout || setInterval || Closure || IIEF || This keyword || Prototype
//let arr1 =[1,2,3,"hi","by","hey",true,false];
// function getString(arr)
// {
//     let res = [];
//     for(let i of arr) // i index nhi data ko uthayuega
//     {
//         if(typeof i=="string")// strign here keyword
//         {
//             res.push(i)
//         }
//     }
//     return res;
// }


// function getInteger(arr)
// {
//     let res = [];
//     for(let i of arr) // i index nhi data ko uthayuega
//     {
//         if(typeof i=="number")// strign here keyword
//         {
//             res.push(i)
//         }
//     }
//     return res
// }

// function getBoolean(arr)
// {
//     let res = [];
//     for(let i of arr) // i index nhi data ko uthayuega
//     {
//         if(typeof i=="boolean")// strign here keyword
//         {
//             res.push(i)
//         }
//     }
//     return res
// //  }
// // //  comman functionwhicb separte all data type
// function getStringBoolean(arr)
// {
//     return typeof i =="string";
// }

// function getbooleaNnumber(i)
// {
//     return typeof  i=="number";
// }
// function getBooleanTrue(i)
// {
//     return typeof i =="boolean";
// }
// function getfun(arr,fn,) // callback function fn as an name of funcction
// {
//   let res=[];
//   for(let i of arr)
//     if(fn(i))
//     {  
//         // console.log(i);
//         res.push(i)
//     }
//     return res;
// }

// console.log(getfun(arr,getBooleanTrue));
// console.log(getfun(arr,getbooleaNnumber));
// console.fnlog(getfun(arr,getBooleanTrue));

// console.log(arr,getbooleaNnumber)
// console.log(getBoolean(arr));
// console.log(getString(arr));
// console.log(getInteger(arr));

//Global Execution Context
// function outer()
// {
//     let user  ="admin";
//     function inner()
//     {
//         console.log(user);
//     }
//    // return inner(); return and call krne me anetr hota he 
//    return inner();
// }
// let a=outer();
// a();

// setTimeout(()=>{
//     console.log("hello");//utne smay ke baad ek bar chalega 
// },5000)

// setInterval(()=>{
//     console.log("hi");//utne samay ke bad har bar usse run karwata jayega
// },5600)
// function printnumber()
// {
//     for(var i=1;i<=10;i++)
//     {
//         setTimeout(()=>{
//        console.log(i);
//     },1000*i)

// }
// }
// function printnumber1()
// {
//     for(let i=1;i<=10;i++)
//     {
//         setTimeout(()=>{
//        console.log(i);
//     },1000*i)

// }
// }
// console.log(printnumber());
// console.log(printnumber1());
//console.log("This number is printed after 10 second and with setinterval");
// function printnumber2()
// {  let i=1;
//     while(i<=10)
//     {
//         setInterval(()=>{
//             console.log(i);
//             i++;
//         })
//     }
// }
// console.log(printnumber2());

//??HOME WORK HE KI HUME 1 2 3 4 5 6 7 8 9 PRINT KRNA HE BUT WITH THE HELP OF VAR KEYWORD??
// for (var i = 1; i <= 4; i++) {
//   ((j) => {
//     setTimeout(function() {
//       console.log(j);
//     }, j * 1000);
//   })(i);
// }
//IIEF immediat invoked function expression
//closure  A closure is a feature in JavaScript
//where an inner function has access to variables from its outer (enclosing) function, even after the outer function has finished executing
// {
//   var a=10;
//   console.log(a);
// }
// {
//   var a=20;
//   console.log(a);x
// };
//this keyword is predefined keyword if used in global context it will point to window object
//in all sceneario it alwasys point to object which is calling the function

//  DATE 03-09-2025 || LEC-02   || window object || this keyword || Prototype 

//console.log(window);
// id =100;
// let obj1={
//      id:101,
//      name:"hi",
//      sum:function()
//      {
//       console.log("Function:",this.id);
//      }
// }
// obj1.sum();

// // a=5;
// // console.log(this.a);
// // a=5 //globl variable
// let obj={
//   a:10,
//   id:101,
//   name:"hi",
//   sum:()=>{
//     console.log("=>:",this.a); // yaha pe this key word g,lobal object ko represent krt h 
//   }
// }
// //jab => ki jagah sum():function likhe diya to this obj ke variable ko poit kerega 
// obj.sum();


//?'function()' == '=>'?
// --- IGNORE ---

//Prototype  most imp topic simple term it mean hidden property
// let arr=[1,2,3,4,5];
// console.log(typeof(arr));//a indicate elemnt of array
// console.log(arr.toString);// array me searching then its prototype me then object ke prototype me 
// console.log(Array.prototype); eska prototype  object vala hoga 
// console.log(Object.prototype);
// arr.map((a)=>{
//   console.log(a);
// }
// )

// let obj={
//   id:101,
//   name:"Yadav"

// }
// //alert("Hey")
// console.log(obj.age); //undefined kyuki age obj me nhi he data present nhi he 
// console.log(obj.toString());//yeh object ke prototype me hota he

//let arr=[10,20,30,40,50,1];
// arr.map((a,b,c)=>{ // a elemnt ko b index ko c pura array ko point krega
//   console.log(a);
// }
// )
// atteching new key
//  Array.prototype.MyMap=function(callback) //yaha callback ek parametr ki tarah work kerge 
//  {
//   //functonalty of map function
//   //map(it return new array ) filter(map ki tarah kaam krta he but condition based hota he) reduse
//   // map ke ander ek funcion pass hota he 
//   let res=[];
//   for(let i=0;i< this.length;i++)//this.length yaha pe arr ki length ko point krega
//   {
//          res.push(callback(this[i],i,this))//array ki value , array ka index , and array respectively
//          //if(callback(this[i],i,this))
//   }
//   return res;
//  }
// //arr.MyMap("callback function ko pass karana he ")
// let data = arr.MyMap((a,b,c)=>{
// //  console.log(a);// yaha pe humko hiddinen property ko chnage krna hoga then it will work
// return a;
// })
// console.log(data)



//higher order function
// function sum(fn) // bina () mean yeh ek function parametr he and fn() ka matln he yeh ek function call hua je 
// {
//   fn();
// }

// function inner()
// {
//   console.log("Hii");
// }

// sum(inner)
// function outer(fn)
// {
//   console.log("Outer function");
//   fn();
// }
// function inner()
// {
//   for(let i=0;i<5;i++)
//   {
//     console.log("Inner function");
//   }
// }

// outer(inner);

//THIS CAN ALSO BE WRITE AS BELOW\
// function sum(callback){
//   callback(5)

// }


// sum( (a)=>{
//   console.log("hii");


// })
//DATE 04-09-2023 || LEC-03 || polyphyll || Filter  || Asyncronous JavaScript ||  syncronous || callback help

// function sum(callback)
// {
//     console.log("Outer Funcion");
//     callback();
// }
// sum(()=>{
//     for(let i=0;i<5;i++)
//     {
//         console.log("Body inner function");
//     }
// })
// function outer(fn)
// {
//   console.log("Outer function");
//   fn(6);
// }
// outer(a=>{
//   for(let i=0;i<5;i++)
//   {
//     console.log("Inner Functioin",a);
//   }
// })
// in gernel || inbuilt function
//let arr = [1,2,3,4,5,6,7,8,9];
// let result = arr.filter((a,b,c)=>{
//     if(a%2==0)
//         console.log(a);
// })

//creating polyphyll  for fliter function
//this function is created by me'
// let arr = [1,2,3,4,5,6,7,8,9];
// Array.prototype.Myfilter=function(callback)
// {
//     let res=[];
//     for(let i=0;i<this.length;i++)
//     {
//         if(callback(this[i],i,this))
//         {
//             res.push(this[i])
//         }
//     }
//     return res;

// }
// let data =arr.Myfilter((a,b,c)=>{
//     return (a>4);

// })


// console.log(data);

// console.log(data);

// Understanding of Asynchronus JavaScript
// setTimeout(()=>
// {
//     console.log("HI");
// },1000)
// console.log("HEllO")
//esme se koi bhi part js ka nhi he '


// CALL BACK HELP
// step3 = caption       2s
// step4 = post         1s

// first way of printing orderly
//step1 = select photo 4s
// function step1(fn){
//     setTimeout(()=>
//     {
//         console.log("Select Photo");
//         fn();
//     }
//     ),4000;
// }

// // step2 = Apply filter 3s
// function step2(fn){

//     setTimeout(() => {
//         console.log("Filter");
//         fn();
//     }, 3000);

// }
// //()=> funciton he 
// //step3 caption 2s
// function step3(fn){

//     setTimeout(() => {
//         console.log("caption");
//         fn();
//     }, 2000);

// }

// //step4 post 1s
// function step4(fn){

//     setTimeout(() => {
//         console.log("post");
//         fn();   
//     }, 1000);

// }
// function step5(){
//     setTimeout(() => {
//         console.log("Comment");

//     }, 500);

// }   

// // problem yeh he ki  step1 ka order matter krta he 
// //step1()
// // step2();
// // step3();
// // step4();

// step1(()=>{
//     step2(()=>{
//         step3(()=>{
//             step4(()=>{
//                 step5();
//             })
//         })
//     })})

// 08-09||2024 Promises in javascript 
// let myPromise = new Promise((resolve,reject)=>
// {
//     let  success=false;
//     if(success)
//     {
//         resolve("Promise is resolved")
//     }
//     else if (!success)
//     {
//        // reject(new Error("operation failed"))
//     }
//     else{}

// })
// //console.log(mypromise);


// // myPromise.then(
// //   (value) => {
// //     console.log("Success:", value);
// //   },
// //   (error) => {
// //     console.error("Failure:", error);
// //   }
// // );

// // myPromise
// // .then((value)=>
// // {
// //     console.log("Success:", value);
// // })
// // .catch((error)=>
// // {
// //     console.log("Failure",error);
// // })

// myPromise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.error(error);
//   })
//   .finally(() => {
//     console.log("Promise is settled.");
//   });
//   console.log(myPromise);

// let promise = new Promise((res, rej) => {
//     // res();
//     rej();
// })
// what is promise --> koi bhi asynchrous(futre me hone vale task exaple posting in intagram feature) ko solve krn e ke liyev
//.then resolve me chlega 
// . catch rejected


// promise
//     .then(() => {
//         console.log("hi there");
//     })
//     .catch(() => {
//         console.log("Rejected");
//     })

let step1 = function () {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res()
            console.log("select photo");
        }, 4000)
    })
}

let step2 = function () {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res();
            console.log("Caption");
        }, 3000)
    })
}

let step3 = function () {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res();
            console.log("Post");
        }, 2000);
    })
}

let step4 = function () {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res();
            console.log("comment");
        }, 1000);
    })
}

let step5 = function () {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res();
            console.log("Rediting");
        }, 1000);
    })
}

// 2nd way of printing
step1().then(() => {
    step2().then(() => {
        step3().then(() => {
            step4().then(() =>
        {
                step5().then(()=>{})
        })
    })
});
})


// synchronus method time dependent work happen here
// function call() {
//     step1()//4 second
//     step2()//3 second // call first
// }

// // third way of printing solve the problem of .then() .cathc()
// //async await always work in pair
// 3rd way of printing 
async function call() {
    await step1();
    await step2();
    await step3();
    await step4();
    await step5();
}
// call();
// neeche wala kyu aese print kr raha he 
let  promise = new Promise(()=>
{
    console.log("Message inside promises")
})
console.log("Message");