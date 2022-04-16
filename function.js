function computerPlay() {
      const optionsArray = ["rock",
                            "paper",
                            "scissors"
                            ];
      
    let randomItem = optionsArray[Math.floor(Math.random()*optionsArray.length)];
   resultComp = randomItem
   return resultComp
   
    }


function playerPlay() {
  let arrayOptions = ["rock",
                      "paper",
                      "scissors"
                     ];
  let answer;
  let result;
  
  answer = prompt("rock, paper or scissors?");
  if (answer == null || 0 || '') {
    result = "wrong imput"
   } else {
     answer = answer.toLowerCase()} if (arrayOptions.includes(answer) === false) {
     result = "wrong imput";
     } else {
       result = answer
       }
  return result
}


function playRound(playerSelection, computerSelection) {  
  let resultText = ""
  
  if (playerSelection == "scissors" && computerSelection== "paper") {
    resultText *= "You win! " + playerSelection + " beats " + computerSelection;
    } else if (playerSelection == "scissors" && computerSelection != "paper" && computerSelection != "scissors") {
    resultText += "You loose! " + playerSelection + " doesn't beat " + computerSelection;}
    else if (playerSelection == computerSelection) {
    resultText += "Draw, " + playerSelection + " is equal to " + computerSelection;}

    
    else if (playerSelection == "paper" && computerSelection == "rock") {
    resultText += "You win! " + playerSelection + " beats " + computerSelection;
    } else if (playerSelection == "paper" && computerSelection != "rock" && computerSelection != "paper") {
    resultText += "You loose! " + playerSelection + " doesn't beat " + computerSelection;}
    else if (playerSelection == computerSelection) {
    resultText += "Draw, " + playerSelection + " is equal to " + computerSelection;


    } else if (playerSelection == "rock" && computerSelection == "scissors") {
    resultText += "You win! " + playerSelection + " beats " + computerSelection;
    } else if (playerSelection == "rock" && computerSelection != "scissors" && computerSelection != "rock") {
    resultText += "You loose! " + playerSelection + " doesn't beat " + computerSelection;
    } else if (playerSelection == computerSelection) {
    resultText += "Draw, " + playerSelection + " is equal to " + computerSelection;}
    
  else if (playerSelection == "wrong imput") {
  resultText += "Wrong imput, please try again"
    }
 return resultText
 }

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerPlay(), computerPlay()));
