let canvas = document.querySelector('canvas')
let pen = canvas.getContext("2d")
// pen.fillStyle="red"
// pen.fillRect(50,150,50,50) // yeh x, y height,width
// pen.clearRect(50,140,50,50)
// let snakeCells = [[0,0],[50,0],[100,0],[150,0]]//store the coordinate of snake yeh ek 2d array he or ordinate of 1st snake
let snakeCells = [[0, 0]]
   let cell = 50; // jaha kaha height width pass krni hogiu uske ke l;iye 
// function ka kam hoga snake ko move krne me 
// function ka kaam hoga naye naye shape draw krne ke liye
let direction = "right";
let gameOver= false; // true hogi jab width me pohoch jaygea
let score = 0;

let speed=200;
let random = genrarteRandome()
let id = setInterval(() => {
   draw()
   update()
},speed)

document.addEventListener("keydown", (e) => {  //yeh pure canwas me run hogi
   // console.log("hello",e);

   if (e.key == "ArrowUp") {
      direction = "up"
   }
   else if (e.key == "ArrowDown") // ArrowDown predfined hota 
   {
      direction = "down";
   }
   else if (e.key == "ArrowLeft") {
      direction = "Left"
   }
   else {
      direction = "right"
   }
})
function draw() // jo bhi shape drwa honge yahi se honmbe 
{  
   pen.font="40px Arial";
   pen.fillStyle="blue"
   pen.fillText(`Score : ${score}`,50,50)
   if(gameOver==true)
   {  // yeh setIntervale ko rokega 
      clearInterval(id)//The clearInterval() method of the Window interface cancels a timed, repeating action which was previously established by a call to setInterval().
      pen.fillText("Game Over 😒🫥😮",450,250)
      return;
   }
   pen.clearRect(0, 0, 1095, 530) // pura canvas clear krdega
   for (let i of snakeCells) {
      pen.fillStyle = "red"
      pen.fillRect(i[0], i[1], cell, cell)//x,y,height,width
   }
   //pen.fillStyle = "yellow"
   if(score>3)
   speed=100;
   if(score%2==0)
   {
      pen.fillStyle = "Orange"
   }
   else if(score%3==0)
   {
      pen.fillStyle = "yellow"
   }
   else if (score%5==0) {
      pen.fillStyle = "magenta"
   }
   else{
       pen.fillStyle = "gold"
   } 
   
   pen.fillRect(random[0],random[1],cell,cell)// cordinatte and sizde
}
draw()
function update()// eska kaam hoga new coordinate ko genrate krnme ke liye 
{
   let headX = snakeCells[snakeCells.length - 1][0]   // x ki value mil jaygei 2d array ki last value
   let headY = snakeCells[snakeCells.length - 1][1]   //y ki value mil jaygei  2d array ki last value

   // let newX = headX + cell  // x ki value me 50 add krdiya
   // let newY = headY
   let newX, newY;
   if(direction=="right")
   {
      newX = headX + cell;
      newY = headY;
      if(newX>1095){
         gameOver=true; // agar width se bahar chala gya to game over
         // alert("game over")
      }
   }
   else if(direction=="Left")
   {
      newX = headX- cell
      newY= headY
      if(newX<0)
      {
         gameOver=true;
         // alert("game over")
      }
   }
   else if(direction=="up")
   {
      newX = headX;
      newY=headY-cell;
      if(newY<0)
      {
         gameOver=true;
         // alert("game over")
      }
   }
   else{
      newX = headX;
      newY = headY + cell;
      if(newY>530)
      {
         gameOver=true;
         // alert("game over")
      }
   }
   
   if(newX==random[0] && newY==random[1])// agar snake ka head aur food ka coordinate same ho gya to
   {  score+=1;
      random=genrarteRandome() // new
   }
//YEH PART If the snake eats food, you skip shift(), so the snake grows.
//If not, you remove the tail, so the length stays the same and the snake moves.
   else
   {
      snakeCells.shift() // first wale cell ko remove krdega
   }
   for(let cell of snakeCells)
   {
      if(cell[0]===newX && cell[1]===newY)
      {
         gameOver=true;
         return;
      }
   }
   snakeCells.push([newX, newY])// yteh new coordinate ko add krdega
     // first wale cell ko remove krdega
}

function genrarteRandome()
{
   //console.log(Math.round(Math.random()*(1095/cell))*cell);
   // do{
   // let x = Math.floor(Math.random() * ((1095-50) / cell)) * cell;
   // let y = Math.floor(Math.random() * ((530-50)/ cell)) * cell;
   // let isOnSnake  = snakeCells.some(cell=>cell[0]===x && cell[1]===y);
   // }while(isOnSnake);
   let x = Math.floor(Math.random() * ((1095-50) / cell)) * cell;
   let y = Math.floor(Math.random() * ((530-50)/ cell)) * cell;
   return [x,y];
}
