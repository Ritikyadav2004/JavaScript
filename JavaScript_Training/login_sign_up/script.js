// data store in local storage
 let formEl=  document.querySelector("#form1")
 formEl.addEventListener("submit",(e)=>{
    e.preventDefault()
    let data={
        name:formEl[0].value,
        email:formEl[1].value,
        pass:formEl[2].value
    }
    console.log(data);
    localStorage.setItem("formData",JSON.stringify(data))})



// let form2=document.querySelector("#form2");
// form2.addEventListener("submit",(e)=>{
//         e.preventDefault()
//         let saveData=localStorage.getItem("userobj");
//         let dataObj=JSON.parse(saveData);
//         //console.log(dataObj)
//         let loginObj={
//             email:form2[0].value,
//             password:form2[1].value
//         }
//         if(dataObj.email===loginObj.email && dataObj.password===loginObj.password)
//         {
//             prompt("Login Successful")
//         }
//         else{
//             prompt("Invalid Credentials")
//         }
// })

  
let form2=  document.querySelector("#form2")
form2.addEventListener("submit",(e)=>{
    e.preventDefault()
   let saveData=    localStorage.getItem("formData")
        let dataObj=  JSON.parse(saveData)
//    console.log(dataObj,"hehehe");
let loginobj={
    email:form2[0].value,
    pass:form2[1].value
}
if(dataObj.email==loginobj.email && dataObj.pass==loginobj.pass){
    prompt("login doneeeee")
}else{
    prompt("errrrrr ")
}
   

})