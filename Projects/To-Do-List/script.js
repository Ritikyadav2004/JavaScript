const listContainer = document.getElementById('list-container');

const inputBox = document.getElementById('input-box');

function addTask()
{
    if(inputBox.value==='')
    { 
        alert("Enter Some data")

    }
    else{

        let li = document.createElement('li');
        li.innerHTML =inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML = '\u00d7'// code for cross symbole
        li.appendChild(span);
    }
    inputBox.value="";
    saveTask();
}

listContainer.addEventListener("click",function(e)
{
    if(e.target.tagName ==="LI")
    {
        e.target.classList.toggle("checked");
        saveTask();
    }

    else if(e.target.tagName ==="SPAN")
    {
        e.target.parentElement.remove();
         saveTask();
    }
})

function saveTask()
{
    localStorage.setItem("data",listContainer.innerHTML)
}


function showtask()
{
    listContainer.innerHTML=localStorage.getItem("data");/// here data is key

}
showtask();