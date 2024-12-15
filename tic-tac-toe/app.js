let cells = document.querySelectorAll(".cell");
let startButton = document.querySelector("#startbutton");
let resetButton = document.querySelector("#resetbutton");
 let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; // player O
let count = 0; //To Track Draw


const winPatterns =[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]; 

//Function to reset game
const resetGame = () => {
    turnO = true;
    count = 0;
    enableCells(); //Re-enable and clear all cells
    msgContainer.classList.add("hide"); // Hide the message container
}

//Function to add event listener to each cell
cells.forEach((cell) => {
    cell.addEventListener("click",() => {
        //player O
        if(turnO){
        cell.innerText ="O";
        turnO = false;
        //player X
        } else {
            cell.innerText ="X";
            turnO = true;
        }
        cell.disabled = true; // Disable cell after it is clicked
        count++; // Increment move count

        let isWinner = checkWinner(); // Check for winner

        if(count === 9 && ! isWinner){ //if all cells are filled and no winner 
            gameDraw();
        }
    });
    
});

const gameDraw = () => {
    msg.innerText = `Game was Draw`;
    msgContainer.classList.remove("hide");
    disableCells();
};

const disableCells = () => {
    for(let cell of cells){
        cell.disabled = true;
    }
};

const enableCells = () => {
    for(let cell of cells){
        cell.disabled = false;
        cell.innerText = "" // Clears the content of all cells
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide"); // Show the winner message
    disableCells(); // Disable cells after the game is over
};

// Check if there's a winner
const checkWinner = () => {
    for(let pattern of winPatterns){
        
        let a = cells[pattern[0]].innerText;
        let b = cells[pattern[1]].innerText;
        let c = cells[pattern[2]].innerText;
   if(a !== "" && b !== "" && c !== ""){ //cell shouldn't be equal to empty
    if(a === b && b == c){ // Check if 3 cells match
        showWinner(a);
        return true;
    }
   }
 }
};

// Attach event listeners to start/reset buttons
startButton.addEventListener("click", resetGame);
resetButton.addEventListener("click", resetGame);


