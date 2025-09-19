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

// accesing with class name . 
// let elemnt  = document.querySelector(".myclass"); // 1st element return 
// console.log("single elemnt");
// console.dir(elemnt);


// let elemntall  = document.querySelectorAll(".myclass"); // 1st element return 
// console.log('All Element');
// console.dir(elemntall);

// // accessing with id name #

// let elemnt  = document.querySelector("p"); // 1st element return 
// // console.log('Single elemnt');
// // console.dir(elemnt);
// console.log(elemnt.tagName); // return tahe name 


// .tag name return tpe of tag ysed in html 

// // accessing with id name koi sens nhi bananta as single elemnt
// let elemntall  = document.querySelectorAll("#myid"); // 1st element return 
// console.dir('All element',elemntall);

// un derstanding dom tree
// text Node
// comment Node
// elemnet node used bwide
// console.dir(document.body.firstChild);
// console.log(document.querySelector("div").firstChild);
// console.log(document.querySelector("div").children);


//innertext propert
// ager dive ka inner text dekhe to uske ander like dive ke ander ka text bhi ayega 
// -->'Fruit\nmango\norgane\nlitchi'  '\' means next line
// let div = document.querySelector("div")
// // console.log(div);
// console.dir(div);


// //innerHTML it print plaintext || html content ko diapley krta he 
// // innertext only return text and inner html also return html tag

// let heading  = document.querySelector("h1");


//text conrent return all text and alos work with style display none

// let h2 = document.querySelector("h2")
// h2.append("From Apna College")
// console.dir(h2.innerText);

// h2.innerText=h2.innerText+"From Ritik Yadav"1

// let divs = document.querySelectorAll(".box")
// divs.innerHTML="hey there"
// divs[0].innerText="Me hu box 0";
// divs[1].innerText="Me hu box 1";
// divs[2].innerText="Me hu box 2";   // manual way of doing this 
// let idx=0;
// for(div of divs)
// {
//     console.log(div.innerText=`New Unique Value ${idx} `);
//     idx++;
// }


//getattribut method
// let div = document.querySelector("div")
// console.log(div);

// let name = div.getAttribute("name")
// console.log(name);

// let para = document.querySelector("p")
// // console.log(para.getAttribute("class"));
// console.log(para.setAttribute("class","newclass"));

//CHNAGINE OR PLAYING WITH BOX USING JAVASCRIPT
// let div = document.querySelector("div")
// div.style.backgroundColor="purple"
// div.style.fontSize="28px"
// div.innerText="hello"
// div.style.visibility = "hidden";

//INSERT ELEMNT FIRSRT WE HAVE TO CREATE ELEMENT THEN STORE IT
// let newBtn=document.createElement("button")
// // console.log(newBtn.innerText="CLICK ME ");
// newBtn.innerText="click me "

// // let div = document.querySelector("div")
// // // div.append(newBtn)
// // // div.prepend(newBtn)
// // div.before(newBtn)
// //div.after(newBtn)

// let p = document.querySelector("p")
// // p.append(newBtn)
// p.after(newBtn)
// craeting new elemnt 
// let newHeading = document.createElement("h1")
// newHeading.innerHTML = "<i> hi iam new  </i>";

// document.querySelector("body").prepend(newHeading)

// let para =document.querySelector("p")
// para.remove();
// newHeading.remove();

//craete a button iof red backhround and white color
// let button = document.createElement("button");
// button.innerText="click me"
// button.style.backgroundColor="red";
// button.style.color="while"
// console.log(button);
// let body = document.querySelector("body");
// body.prepend(button)

//ceate a p and give it cass ans some stlying q2

// let para =document.querySelector("p");


//browser
// para.classList.add("new")
// undefined
// para.classList
// DOMTokenList(2) ['content', 'new', value: 'content new']0: "content"1: "new"length: 2value: "content new"[[Prototype]]: DOMTokenList
// para.classList.remove("new')
// ///VM2331:1 Uncaught SyntaxError: Invalid or unexpected tokenUnderstand this error
// para.classList.remove("new")
let btn1 = document.querySelector("#btn1")

// btn1.onclick = (e) => {
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX,e.clientY);
    
//     // console.log("Btn 1 was print");
//     // let a = 24;
//     // a++;
//     // console.log(a);
// }
btn1.addEventListener("click",()=>{
    console.log("button was  handler 1");
})
btn1.addEventListener("click",()=>{
    console.log("button was  handler 2");
})
const handler_3 =()=>{
    console.log("button was  handler 3");
}
btn1.addEventListener("click",handler_3);
btn1.addEventListener("click",()=>{
    console.log("button was  handler 4");
})
btn1.addEventListener("click",()=>{
    console.log("button was  handler 5");
})

btn1.removeEventListener("click",(handler_3));
//let div = document.querySelector("div")
// div.onmouseover = (e) => {
//     console.log('You Are in the div');
//         console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX,e.clientY);i
// }

// div.addEventListener("onclick",(e)=>
// {
//     console.log(e.type);
//     console.log(e.target);
// })
//Priority javascript quality 
/*EVent Object :- Event object hamari is special object to the 
Jiske Pass event K Barima Sari Sari details casey details kevo
 event kiss type event hem yahoo Mouse Ka Event Hai yao Pointer
  Kai event yao Keyboard Ka Evente Ka event target gag yanika 
  event hamare button occure akar ki aai yeah input element occure
   Akar Kiya Kya Huska Target Hamari screen*/
//  Node.event=(e)=>{
//     //handle heer
//  }  
