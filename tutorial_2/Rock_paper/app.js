let button = document.querySelectorAll("button")
//let message = document.querySelector("message")
let message_box = document.getElementById("message");
let compChoice;
let user_score=document.querySelector("#user-score")
let comp_score = document.querySelector("#Comp-score")
let userScore = 0;
let computerScore = 0;
const msg = document.querySelector("#msg")
// genrate computer choice
const getComputerChoice = () => {
    //rock paper scissor
    let option = ["rock", "paper", "scissors"]
    // number genrate krna easy rehta he jo furhter undex ki tor pe use hoga 
    const randomeIndex = Math.floor(Math.random() * 3);
    return option[randomeIndex];// retruning string
}
const showWinner = (userWin) => {
    if (userWin) {
        userScore++
        console.log(`You Win !`)
        console.log(`User Score = ${userScore}`);
        user_score.innerText=userScore;
        msg.innerText = `You Win  Computer Choice Was ${compChoice}`
        message_box.style.backgroundColor="lime"
        
    }

    else {
        computerScore++;
        console.log(`You Lost Computer Choice Was ${compChoice} !`)
        comp_score.innerText=computerScore;
        console.log(`Computer Score = ${computerScore}`);
        msg.innerText = `You Lost Computer Choice was ${compChoice}`
        message_box.style.backgroundColor="#d10808ff"
        msg.style.color = "black";
    }
}
const DrawGame = () => {
    console.log(`Game Was Draw`);
    msg.innerText="Game Was Draw";
    message_box.style.backgroundColor="yellow"
    msg.style.color = "black";

}
const playGame = (userChoice) => {
    console.log(`User choice is ${userChoice}`);
     compChoice = getComputerChoice()
    console.log(`Computer Choice  is ${compChoice}`);
    //  let check=true;
    if (userChoice === compChoice) {
        //DrawGame
        DrawGame();
        return;
        //check=false;
    }
    else {
        userWin = true;
        if (userChoice == "rock") {
            // genrate scissor
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        }
        // user choice scissor
        else {
            userWin = compChoice === "rock" ? false : true;
        }

    }
    // if(check)
    showWinner(userWin);



}
button.forEach((btn) => {
    console.log(btn);
    btn.addEventListener("click", () => {
        const userChoice = btn.getAttribute("id")
        //console.log("Choice was Clicked",userChoice);
        playGame(userChoice)
    });
});