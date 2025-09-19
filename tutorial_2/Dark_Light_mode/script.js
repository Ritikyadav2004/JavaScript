let btn = document.querySelector("button")
let currentMode = "light"; //
let body = document.querySelector("body")
btn.addEventListener("click",()=>
{
    //console.log("You are trying to change mode");
    if(currentMode==="light")
    {
        currentMode="dark"
        console.log(currentMode);
        //document.querySelector("body").style.backgroundColor= "black"
        body.classList.add("dark")
        body.classList.remove("light")
    }
    else{
        currentMode="light"
        console.log(currentMode);
        //document.querySelector("body").style.backgroundColor="white"
         body.classList.add("light")
          body.classList.remove("black")
    }
})