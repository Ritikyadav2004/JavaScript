//Fetch api
// The fetch api provides an interface for patching sending/receiving resource.
// Its uses requests and response object .
// the fetch() method is used to fetch a resource ( data)

// let promise = fetch(URL,option)
const url="https://motivational-spark-api.vercel.app/api/quotes"
//let promise = fetch(url)
// console.log(promise);
const btn= document.querySelector("button")
const h1 = document.querySelector("#data1")
// const getFacts = async()=>
// { 
//     console.log("getting data");
//     let response =await fetch(url)
//     console.log(response) //JSON  formate
//      let data = await response.json();
    
//     h1.innerText=data[1].quote;
//     console.log(data[1].quote)
    // h1.innerHTML = ""; 
    //     for(let i=0;i<10;i++)
    //     {   
    //        // h1.innerText = ""; // Clear first
    //        console.log(i);
    //         h1.innerText += data[i].quote+"\n";
    //         console.log(data[i].quote);
    //     }
    
 
   
   
// }
// btn.addEventListener("click",getFacts)
// getFacts()
function getdata()
{
    fetch(url).then((response)=>
    {   console.log(response);
       return  response.json();
    }).then((data)=>
    {  // console.log(data);
        h1.innerText=data[91].quote;
        console.log(data[91].quote);
    })
}
btn.addEventListener("click",getdata)