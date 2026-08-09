const number=[1,2,3,4,5,6,7,8,90];
const result=number.filter(num=>num%2==0);
// console.log(result);


const student=[
    {name:'ritik',age:22},
    {name:'madhav',age:21},
    {name:'krishna',age:20},
    {name:'yadav',age:19},
    {name:'ritik kumar',age:18},
    {name:'ritik kumar singh',age:17},
]


const result1=student.filter(stu=>stu.age>20);

const result5=number.filter(num=>{
    return num%2==0 && num>2;
})
console.log(result5);


const students = [
    { name: "Aman", marks: 85, age: 20 },
    { name: "Ravi", marks: 45, age: 21 },
    { name: "Neha", marks: 72, age: 19 },
    { name: "Raj", marks: 90, age: 22 }
];



const result3=students.filter(stu=>{
    return stu.marks>35 && stu.age>20 && stu.name;
})

console.log(result3);
