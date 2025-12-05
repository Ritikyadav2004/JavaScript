//IT TALE TWO ARGUMENTS ONE ACCUMALATOR AND OTHER ITRATOR
let arr=[1,2,3,4,5,6,7,8,9,10];
let sum= arr.reduce((acc,data)=>
{
    return acc+data;
},0)
console.log(sum);


let pdt = arr.reduce((acc,data,i)=>{
    console.log(`Elemnt is at ${i} position whose data value is ${data}`);
    return acc*data
},1)
console.log(pdt);


//WORKING WITH OBJECT OR JSON FORMAT 
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
}]


let sorted = obj.reduce((acc,data)=>
    {
        console.log(`Employee Name : ${data.name}`);
        return acc+data.salary
    },0)

    console.log(`Totol company expense on these emplyee is ${sorted}`);