let canvas = document.querySelector('canvas')
let pen = canvas.getContext("2d")
// pen.fillStyle="red"
// pen.fillRect(50,150,50,50) // yeh x, y height,width
// pen.clearRect(50,140,50,50)
let snakeCells = [[0,0],[50,0],[100,0]]//store the coordinate of snake yeh ek 2d array he or ordinate of 1st snake
let cell = 50; // jaha kaha height width pass krni hogiu uske ke l;iye 
// function ka kam hoga snake ko move krne me 
// function ka kaam hoga naye naye shape draw krne ke liye
function draw () // jo bhi shape drwa honge yahi se honmbe 
{
   for(let i of snakeCells)
   {
    pen.fillStyle="red"
    pen.fillRect(i[0],i[1],cell,cell)
   }
}   
draw()
function update()// eska kaam hoga new coordinate ko genrate krnme ke liye 
{

}
