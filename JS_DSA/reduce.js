const number=[1,2,3,4,5,6,7,8,9,10];

const result=number.reduce((total,num)=>{
    return total+num;
})

const result1=number.reduce((total,num)=>{
    return total*num;
})


const largestNum=number.reduce((largest,num)=>{
    return num>largest ? num:largest;
})

// console.log(result);
// console.log(result1);

console.log(largestNum);