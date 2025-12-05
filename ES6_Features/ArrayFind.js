//  IT MATHCES OR SEARCH AND RETURN THE FIRST MATCHED VALUE FROM THE LIST
// find() method
let arr = [1,2,3,4,5,6,7,8,9,10,12,13,14,15,16,17,18,19,20,21,22,23,24]

let elemnt=arr.find(item=>
{
    return item%2==0
}
)

console.log("FIrst Even Elemnt ",elemnt);

// findIndex() method return the index of the matched elemnt 
let evenIndex=arr.findIndex(item=>
{
    return item%2==0
}
)

console.log("Index of First Even Elemnt ",evenIndex);