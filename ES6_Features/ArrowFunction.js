//TRADITIONAL WAY OF WRITING FUNCTION BEFORE ES6
function greeting(name)
{
    return "Hello "+name;
}
console.log(greeting("Ritik"));


//NEW WAY OF WRITING SAME THING USING STRING TEMPLATE
const greet=(name)=>
{
    return `Hello Mr. ${name} Nice to meet You`
}
console.log(greet("Ritik"));

//another way
const namste=name=>
{
    return `Namaskar Shreeman ${name} apse mileke acche laga `;
}
console.log(namste("Ritik"));

//SINGLE LINE STATMENT OF WRITING THE ARROW FUNCTION
const wishMe=name=>`Hello Sir its our luck to serve you best regard ${name}`
console.log(wishMe("Staff Member\nTaj Hotel\nPvt Ltd"));