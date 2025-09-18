// API do cheeje ko connect krwane ke liye use hota he frontend and backend ko connect karwane ka kaam krta he 
//
// imp topic in interviw including promises
// frontend se kiss na kisi server se fetch kerga
//apilink address yeh promisies se return hoga .cathc  .then

// dynamic way se hum html me wempty structure create krke 
// js ki through 
let ul = document.querySelector('ul')
fetch("https://jsonplaceholder.typicode.com/posts").then(data=>{  //if resolve
   // console.log(data);
   return data.json(); //data ko json me convert krna he
}).then((res)=>
{
    //console.log(res);  
    show(res)
})


function show(res)
{
//console.log(res);
for (let i of res) // res is array
{    //console.log(res);
     let li = document.createElement('li') // elemnt ko create krta ha li is predefine in html
     let h3 = document.createElement('h3')
     li.innerText = i.id
     ul.append(li)
     h3.innerText = i.title
     ul.append(h3)
     let h5 = document.createElement('h5')
     h5.innerText=i.userId
     ul.append(h5)

}

}


// let obj=
// {
//     id:1,
//     name:"Ritik",
//     lastname:'Yadav'
// }
//old way of printing
// let a = obj.name;
// console.log(a);

//NEW UPDATES IN THE JAVASCRIPT
//destructuring
// let {id,name}=obj;
// console.log(id,name);

//intervower
// if(false)
// {
//     let a=8;
    
// }
// console.log(a);
// function outer(){
//     var a=()=>
//     {   var a=9;
//         console.log("hello");
//     }
// }
// outer();
// console.log(a);