//eval() // it is used to calaculta the expression in string form
let inp = document.querySelector("input");
let button = document.querySelectorAll("button") // its a array 
console.log(button ) // yes our code work correctly
for(let btn of button)
{
     btn.addEventListener("click",()=>{
     let txt = btn.innerText;
     console.log(txt) // js me pata kr ne ke liye he 

     if(txt=="C")
     {
        inp.value=""
     }
    //  else if(txt=="%")
    //  {
    //     inp.value=inp.value/100;
    //  }
     else if (txt=="=")
            inp.value=eval(inp.value);
      
     else
     {
      inp.value+=txt;
     }
     }
     
   )
}