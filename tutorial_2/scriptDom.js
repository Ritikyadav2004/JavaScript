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

let divs = document.querySelectorAll(".box")
divs.innerHTML="hey there"
divs[0].innerText="Me hu box 0";
divs[1].innerText="Me hu box 1";
divs[2].innerText="Me hu box 2";   // manual way of doing this 
let idx=0;
for(div of divs)
{
    console.log(div.innerText=`New Unique Value ${idx} `);
    idx++;
}
    