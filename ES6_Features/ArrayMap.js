// It iterate the array for us and we can pass a callback function to perform some operation on the each array item the updated values can be returned by the callback function to create the new array which further automatically pushed into new varaible
console.clear();
let arr=[1,2,3,4,5,6,7,8,9,10]

//HAR ELEMNT PE MAP FUNCTION CALL HOTA HAI AUR JO VALUE RETURN KARTA HAI USSE NAYA ARRAY ME PUSH KR DETA HE 
let mappedArr = arr.map((data,pos)=>
{
   console.log(`Index no is ${pos} and the value is ${data}`);
   return data*2;
})

// console.log(...arr);  // it returns just returns the elemnt in  horizontle line
// console.log(arr); // it returns list of array
// console.log(`Original array us ${arr}\nModefied array us ${mappedArr}`);


// APPYLING MAPP FUNCTION IN ARRAY OF OBJECTS
let user=[
    {
    firstName:"Ritik",
    middleName:"Singh",
    lastName:"Yadav",
    age:22}
,
{
    firstName:"Universe",
    middleName:"Singh",
    lastName:"Yadav",
    age:1000000000000
},
{
    firstName:"Messiah",
    middleName:"Singh",
    lastName:"Yadav",
    age:23
},

]

let userMappedArr=user.map((data,pos)=>
{
    console.log(`Applying Transformation in position ${pos} in field ${data.firstName}`);
    
    return{
        firstName:data.firstName,
        lastName:data.lastName,
        age:data.age
    }
})

console.log(userMappedArr);