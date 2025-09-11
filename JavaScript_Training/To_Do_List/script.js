let inp = document.querySelector('input')
let btn = document.querySelector('button')
let ul = document.querySelector('ul')
let del  = document.querySelector('#id1')
let form = document.querySelector('form1')
btn.addEventListener("click",()=>{
    let data = inp.value;
    // console.log(data);
      let li = document.createElement("li");
      li.innerText=data;
    // li.innerText = data // li utni bar chklega jitni baar clik banega 
      ul.append(li);
      //alert("Task added successfully!")
      li.addEventListener("click",()=>{
        li.remove();
     //   alert("Task removed successfully!")
      })
      del.addEventListener("click",()=>{
        li.remove();
        
      })

      btn.addEventListener("click",(e)=>{
       e.preventDefault();  // page ko reload hone se bachata he 
       let data = { 
             add: form[0].value

         }
         console.log(data);
         localStorage("data",JSON.stringify(data))
})

})

