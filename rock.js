let buttons = document.querySelectorAll("button")
let UserScore = document.getElementById("userScore")
let ComputerScore = document.getElementById("compScore")
let result = document.getElementById("result")

let CompuerS = 0;
let PLayerS = 0;



function ComputerPlay(){
    let Choices = ["rock","paper" ,"scissors"]
    let RandomChoise = Math.floor(Math.random()*Choices.length)
    return  Choices[RandomChoise];
}

function PlayerPlay (UserChoise,ComputerChoise){
    if(UserChoise === ComputerChoise){
        return "The Game was Tie"
    }
    else if(
        (UserChoise  === "rock" && ComputerChoise === "scissors") || (UserChoise==="paper" && ComputerChoise==="rock") || (UserChoise==="scissors" && ComputerChoise==="paper")
    ){
         PLayerS ++;
         UserScore.textContent = PLayerS 
         return "You win ! " + UserChoise + " beats " + ComputerChoise ;

    }
    else{
         CompuerS++;
         ComputerScore.textContent = CompuerS;
         return "You lose ! " + ComputerChoise + " beats " + UserChoise ;
    }
    
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
      let results = PlayerPlay(button.id, ComputerPlay());
      result.textContent = results;
      
    });
  });