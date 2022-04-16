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


function playRound(var1, var2) {  
  let resultText = ""
  
  if (playerSelection == "scissors" && computerSelection== "paper") {
    resultText *= "You win! " + var1 + " beats " + var2;
    } else if (playerSelection == "scissors" && computerSelection != "paper" || computerSelection != "scissors") {
    resultText += "You loose! " + var1 + " doesn't beat " + var2;}
    else if (playerSelection == computerSelection) {
    resultText += "Draw, " + var1 + "is equal to " + var2;
    
    }else if (playerSelection == "paper" && computerSelection == "rock") {
    resultText += "You win! " + var1 + " beats " + var2;
    } else if (playerSelection == "paper" && computerSelection != "rock") {
    resultText += "You loose! " + var1 + " doesn't beat " + var2;}
    else if (playerSelection == computerSelection) {
    resultText += "Draw, " + var1 + "is equal to " + var2;


    } else if (playerSelection == "rock" && computerSelection == "scissors") {
    resultText += "You win! " + var1 + " beats " + var2;
    } else if (playerSelection == "rock" && computerSelection != "scissors") {
    resultText += "You loose! " + var1 + " doesn't beat " + var2;
    } else if (playerSelection == computerSelection) {
    resultText += "Draw, " + var1 + "is equal to " + var2;
    }
 return resultText
 }

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
