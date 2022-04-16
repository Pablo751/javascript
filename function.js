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


function RockPaperScissors(var1,var2) {  
  let counterCPU = 0;
  let counterP1 = 0;
  let finalCount;
  
  if (var1 == "scissors" && var2== "paper") {
    counterP1 =+ 1;
    } else if (var1 == "scissors" && var2 != "paper") {
    counterCPU =+ 1;
      
    } else if (var1 == "paper" && var2 == "rock") {
    counterP1 =+ 1;
    } else if (var1 == "paper" && var2 != "rock") {
    counterCPU =+ 1;

    } else if (var1 == "rock" && var2 == "scissors") {
    counterP1 =+ 1;
    } else if (var1 == "rock" && var2 != "scissors") {
    counterCPU =+ 1;
    } 
  finalCount =  `The counter is player: ${counterP1} and CPU ${counterCPU}`;
  return finalCount
 }

function game() {
 let finalfinal =""; 
 for (let i = 0; i < 5; i++) {
  function RockPaperScissors()
  }
return finalfinal
               }

 
function prueba() {
 let finalfinal =""; 
 for (let i = 0; i < 6; i++) {
  finalfinal += "The number is " + i + "<br>";
  }
return finalfinal
               }
}

console.log(game())
