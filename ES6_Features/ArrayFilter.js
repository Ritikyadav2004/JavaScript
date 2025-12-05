let arr = [1,2,3,4,5,6,7,8,9,10,12,13,14,15,16,17,18,19,20,21,22,23,24]
let normalArr=arr.filter(item=>
{
    return true;
}
)
console.log(...normalArr); // as we not mentioned any conditon so it print and add in new array all the elemnt 

let evenArray=arr.filter(items=>
{
    if(items%2===0)
    {
        return true;
    }
}
)
console.log("Even numbers are ",...evenArray);


//WORKING WITH JSON FILE 
let obj=[{
    name:"Ritik Yadav",
    age:22,
    exp:2,
    salary:10000000000
},
{
name:"Rishabh Yadav",
    age:18,
    exp:1,
    salary:198728272
},
{
    name:"john",
    age:22,
    exp:2,
    salary:5000
}]

let highProfileEmployee=obj.filter(data=>
{
    if(data.salary>100000)
    {
        return true;
    }
}
)
console.log(...highProfileEmployee);