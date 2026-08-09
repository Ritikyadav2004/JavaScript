const number=[1,2,3,4,5,6,7,8,9,10];


const result=number.map(num=>num);

const  result1=number.map(num=>num*2);

const result2=number.map(num=>num+1);

const arr=['ritik','kumar','singhyadavkumar','ritik kumar singh','ritik kumar singhyadav'];
const result4=arr.map(name=>name.length)

const result5=number.map(num=>{
    if(num%2==0)
    {
        return num*2;
    }
    return num;// esko ek baar remove krke chalana ager kuch nhi mila to map undefined return krta he 
})



// console.log(result);
// console.log(result1);
// console.log(result2);
// console.log(result4);
console.log(result5);
