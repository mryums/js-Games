let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")
const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#Ai-score")
const rockImg = document.querySelector("#rock")
const paperImg = document.querySelector("#paper")
const scissorsImg = document.querySelector("#scissors")

// random choice 
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"]
    let randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx]
}
 //draw game fn
 const drawGame = () => {
    msg.innerText = "Game was draw Play again "
    msg.style.backgroundColor = "black"
 }

 //show winner msg
 const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore ++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green"
        console.log("you win")
        
    } else {
        compScore ++;
        compScorePara.innerText = compScore
        msg.innerText = `You Lose ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red"
    }
 }

//fn to compare user & comp choice 
const playGame = (userChoice) => {
    //generate computer choice
    const compChoice = genCompChoice();
    if (userChoice === compChoice) {
        //Draw Game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
          //paper, scissors
         userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
         //scissor, rock
         userWin = compChoice === "scissors" ? false : true;   
        } else if (userChoice === "scissors"){
         //rock, paper
         userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice)

    });
})
 //events occur when click on choices
// Rock
rockImg.addEventListener("mousedown", () =>{ 
 rockImg.style.transform = "scale(0.9)"
});   
rockImg.addEventListener("mouseup", () =>{
    rockImg.style.transform = "scale(1)"
}); 

//Paper
paperImg.addEventListener("mousedown", () =>{
 paperImg.style.transform = "scale(0.9)"
});   
paperImg.addEventListener("mouseup", () =>{
 paperImg.style.transform = "scale(1)"
});

//Scissors
scissorsImg.addEventListener("mousedown", () =>{
 scissorsImg.style.transform = "scale(0.9)"
});   
scissorsImg.addEventListener("mouseup", () =>{
  scissorsImg.style.transform = "scale(1)"
});             