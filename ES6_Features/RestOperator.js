//  YEH SIRF UTNE HEE ARGUMENTS LEGA JITNE ESME PASS HONGE 
const sum=(a,b)=>
{
    return a+b
}
// console.log(sum(1,2,3,4,5));


let yehValiArray=[1,2,3,4,5,6,7,8,9,10]
const sum1=(...args)=>
{   let sum=0;
    for(let i=0;i<args.length;i++)
    {
        sum+=args[i];
    }
    return sum;
}
// console.log(sum1(...yehValiArray));


const arr = (a,b, ...args)=>
{
    console.log(a);
    console.log(b);
    console.log(args);
}
let meArrayHu=[1,2,3,4,5,6,7,8,9,10]
// arr(1,2,...meArrayHu)