
// async>> promises chains >> callback hell
// sync programmimg
// So synchronous means the code runs in a particular sequence of instructions given the programme each instruction waits for the previous instruction to complete its execution 
// console.log("one");
// console.log("Two");
// console.log("three"); 
// example of scynrous programmimg 
// CHEEJE EK SEQUNCE ME HO RHI HE
/*async
It Tell  That programme not need to A particular api or a function takes lots of time mean multiple process can be occur simultaneously 
That's a difference between asynchronous programming and synchronous programming
*/

// function hello()
// {
//     console.log("hello");
// }

// setTimeout(hello,2000)

// function AddKaro(a,b)
// {
//     console.log(`Add kiya ${a+b}`);
// }


// function subKaro(a,b)
// {
//     console.log(`Minus kiya ${a-b}`);
// }

// function intoKaro(a,b)
// {
//     console.log(`Multiply kiya ${a*b}`);
// }

// function divideKaro(a,b)
// {
//     try{
//         console.log(`Divide kiya ${a/b}`);
//     }
//     catch(err)
//     {
//         console.log(err);
//     }
// }
// function calculator(a,b,callb)
// {
//     callb(a,b);
// }

// calculator(1,2,AddKaro);
// calculator(1,2,subKaro);
// calculator(1,2,intoKaro);
// calculator(1,0.0,divideKaro);

// function getdata(dataId, getnextdata) {
//     setTimeout(() => {
//         console.log("data", dataId);
//         if (getnextdata) {
//             getnextdata();
//         }
//     }, 1000)
// }

// // call back hell and nested call back in the form of pyramid , or pyramid of doom
// getdata(1, () => {
//     console.log('getting data 2...');
//     getdata(2, () => {
//         console.log('getting data 3...');
//         getdata(3, () => {
//             console.log('getting data 4...');
//             getdata(4)
//         })
//     })
// });//2
// // getdata(2);//2
// // getdata(3);//2


//  Show so to solve the problem of callback hell There is a concept of promises Arise
//Promises Promises for eventual completion of task . it is an object in js. It is a solution to callback hell.
// let promises = new Promise((resolve, reject) => {

// })    SYNTAX

// Promises have three states pending,  fulfil and reject If promises get fulfilled then it is resolved

//So Where promises is used So when we fetch the data using api it returns in the form of promises
// So in that case Other system or programme or were created promises and we are just handling that promises in our js
// let promise = new Promise((resolve,reject)=>
// {
//     console.log("Iam a promies");
//     //resolve("Success")
//     reject("Some Error....")
// });

// function getdata(dataid,getnextdata)
// {
//     return new Promise((resolve,reject)=>  // In javascript we are actually handling
//     //   the promises not creating promises that Promises are automatically created by Apis
//     {

//         setTimeout(() => {
//         console.log("data", dataid);
//         resolve("Success")
//         // reject("Error")
//         if (getnextdata) {
//             getnextdata();
//         }
//     }, 5000)
//     })
// }

//We're not deal with promises resolve or reject but we're dealing after 
// catching the promise like promises.then ueh fiunction fullfill hone ke baad use hota he
//  Promises.catch   else vala part


// let getPromise = ()=>
// {
//     return new Promise((resolve,reject)=>
//     {
//         console.log("Iam Promises");
//         // resolve("Success")
//         reject("404 page not found")
//     })
// }

// let promise = getPromise();
// promise.then(() => {
//     console.log("Promises Fullfilled");
// }).catch((err) => {
//     console.log(err,"\nError agyi"); 
// });


//PROMISE CHAIN 


// // Yeh Wala Kamm  Ka Hota Hai Apna Kamm promiscuous handle Karanika hota Hai
// function asyncFunc() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Some Data 1");
//             resolve("Sucess")
//         }, 4000)
//     })
// }


// // Yehi Wala Kaam Apna Hota Hai

// console.log('Fetching data 1 ...');
// const p = asyncFunc();
// p.then((res)=>
// {
    
//     console.log(res);
// })





// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Some Data 1");
//             resolve("Sucess")
//         }, 4000)
//     })
// }

// console.log('Fetching data 1 ...');
// const p1 = asyncFunc1();
// p1.then((res)=>
// {
    
//     console.log(res);
// })




// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Some Data 2d:\Mynotes\Gravitation.pdf");
//             resolve("Sucess")
//         }, 4000)
//     })
// }

// console.log('Fetching data 2 ...');
// const p2 = asyncFunc2();
// p2.then((res)=>
// {
    
//     console.log(res);
// })



function getdata(dataid)
{
    return new Promise((resolve,reject)=>  // In javascript we are actually handling
    //   the promises not creating promises that Promises are automatically created by Apis
    {

        setTimeout(() => {
        console.log("data", dataid);
        resolve("Success")
        // reject("Error")
       
    }, 1000)
    })
}

// //Promises chain
// let p1 = getdata(1)
// p1.then((res)=>
// {
//     console.log(res);
// });
// getdata(1).then((res)=>
// {
//     console.log(res);
//       getdata(2).then((res1)=>
//     console.log(res1));
// })

// COMPARIOSON  

//promise chaininh
// console.log('getting data 1...');
// getdata(1).then((res)=>
// {
//    // console.log(res);
//    console.log('getting data 2...');
//     return getdata(2)
// }).then((res)=>
// {console.log('getting data 3...');
//     return getdata(3)
// }).then((res)=>
// {console.log('getting data 4...');
//     return getdata(4);
// }).then((res)=>
// {console.log('getting data 5...');
//     return getdata(5);
// }).then((res)=>
// {console.log('getting data 6...');
//     return getdata(6);
    
// }).then((res)=>
// {
//     console.log(res);
// })


//Call bAck hell
//function getdata(dataId, getnextdata) {
//     setTimeout(() => {
//         console.log("data", dataId);
//         if (getnextdata) {
//             getnextdata();
//         }
//     }, 1000)
// }

// // call back hell and nested call back in the form of pyramid , or pyramid of doom
// getdata(1, () => {
//     console.log('getting data 2...');
//     getdata(2, () => {
//         console.log('getting data 3...');
//         getdata(3, () => {
//             console.log('getting data 4...');
//             getdata(4)
//         })
//     })
// });//2

//SUMMERY OF ASYNC AWAIT
// async function getAllData()
// {  console.log("getting data 1...");
//    await getdata(1);
//    console.log("getting data 2...");
//    await getdata(2);
//    console.log("getting data 3...");
//    await getdata(3);
//    console.log("getting data 4...");
//    await getdata(4) ;
//    console.log("getting data 5...");
//    await getdata(5);
//    console.log("getting data 6...");
//    await getdata(6);
//    console.log("getting data 7...");
//    await getdata(7);
//    console.log("getting data 8...");
//    await getdata(8) ;   
// }





//ASYNC AWAITthey are the keywaord in js that make our  its work s to easy asycngounus java scroip
//ASYNC function always returns a promise ,Await pause the execution of its surroundings ASYNC function until the promise is settled
// async function name() {
    
// }
// yeh complusry to retun promise

// async function hello() {
//     console.log("hello");
// }
// jab tak hamara promise hamare pass settled nhi ho jata await wait kerga 
// await sirf async function ke ander hee use kr satke he 

// function api()
// {
//     return new Promise((resolve,reject)=>
//     {
//         setTimeout(()=>
//         {
//                console.log("Receieved");
//                resolve(200);
//         },2000)
//     })
// }

// function api()
// {
//     return new Promise((resolve, reject)=>
//     {
//         setTimeout(()=>
//         {
//           console.log("Weather data");
//           resolve(200);
//         },2000)
//     })
// }

// // await api();
// async function getWeatherData() {
//     await api(); // 1st call
//     await api();//2nd call 
// }

// creating post feature for instagram
// function selectPhoto()
// {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         console.log("Photo Selected");
//         resolve(200);
//     }, 2000);
//     })
// }

// function editPhoto()
// {
//    return new Promise((resolve, reject) => {
//     setTimeout(()=>
// {
//      console.log("Editing Sucessful");
//      resolve(200);
// },2000)
//    })
// }

// function addMusic()
// {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>
//     {
//         console.log("Music Added Succesfull");
//         resolve(200)

//     },2000)
//     })
// }

// function writeCaption()
// {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>
//     {
//         console.log("Capitoned added");
//     },2000)
//     resolve(2);
//     })
// }

// function post()
// {
//    return new Promise((resolve, reject) => {
//     setTimeout(()=>
// {
//      console.log("Post Successfull !");
// },2000)
// resolve(2)
//    })
// }

// async function instaPost()  {
//     await selectPhoto();
//     await editPhoto();
//     await  addMusic();
//     await  writeCaption();
//     await   post();
    
// }




// function getdata(dataid)
// {
//     return new Promise((resolve,reject)=>  // In javascript we are actually handling
//     //   the promises not creating promises that Promises are automatically created by Apis
//     {

//         setTimeout(() => {
//         console.log("data", dataid);
//         resolve("Success")
//         // reject("Error")
       
//     }, 1000)
//     })
// }
// //Async - await
// async function getAllData()
// {  console.log("getting data 1...");
//    await getdata(1);
//    console.log("getting data 2...");
//    await getdata(2);
//    console.log("getting data 3...");
//    await getdata(3);
//    console.log("getting data 4...");
//    await getdata(4) ;
//    console.log("getting data 5...");
//    await getdata(5);
//    console.log("getting data 6...");
//    await getdata(6);
//    console.log("getting data 7...");
//    await getdata(7);
//    console.log("getting data 8...");
//    await getdata(8) ;   
// }


// IFFE (FUNCTION) yeh sirf ek hee bar call ho sakta he in api call(Immediately invoke function expression)
//SYNTAX
//1st way
// (fun()
// {

// })();

//2nd way
(()=>
{

})();

//3rd way
// (async ()=>
// {

// })();

// IIFE function
(async function getAllData()
{  console.log("getting data 1...");
   await getdata(1);
   console.log("getting data 2...");
   await getdata(2);
   console.log("getting data 3...");
   await getdata(3);
   console.log("getting data 4...");
   await getdata(4) ;
   console.log("getting data 5...");
   await getdata(5);
   console.log("getting data 6...");
   await getdata(6);
   console.log("getting data 7...");
   await getdata(7);
   console.log("getting data 8...");
   await getdata(8) ;   
})();