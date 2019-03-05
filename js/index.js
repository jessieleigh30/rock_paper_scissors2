var userChoice; //prompt("Welcome! Please click rock, paper or scissors.");
//var win = { rock:"scissors", scissors: "paper", paper:"rock"};
var choice = ["rock", "paper", "scissors"];
var computerResult;
var result;
var clear;





var rock = document.body.querySelector(".rock");
rock.addEventListener("click", function(){
  userChoice = "rock";
  // alert("you picked rock")
  computerChoice();
});
var paper = document.body.querySelector(".paper");
paper.addEventListener("click", function(){
  userChoice = "paper";
  computerChoice();
  
}); 
var scissors = document.body.querySelector(".scissors");
scissors.addEventListener("click", function(){
  userChoice = "scissors";
  computerChoice();
  // call computer choice computerChoice()
}); 

function computerChoice(){
  computerResult = choice[Math.floor(Math.random()*choice.length)];
  console.log(computerResult, userChoice);
  compare();
};
  
function compare(){
  switch(computerResult) {
    case "rock":
      if(userChoice === computerResult) {
        result = "It's a Tie!"
       } else if(userChoice === "scissors"){
        result = "You Lose!"
       
      } else {
        result = "You Win."
      
      }
      break;
    case "scissors":
      if(userChoice === computerResult){
        result = "It's a Tie!"
      } else if(userChoice === "rock"){
        result = "You Win!"
      } else {
        result = "You Lose."
      }
      break;
      case "paper":
        if(userChoice === computerResult){
          result = "It's a Tie!"
        } else if(userChoice === "rock"){
          result = "You Lose."
        } else {
          result = "You Win!"
        }
        break;
      }
      // displayComputerChoice ()
      displayResult()
      // setTimeout( displayResult, 2000 )
      // clearAnswer()
  };



function displayResult() {
  const gameResult = () => {
   var resultContainer = document.body.querySelector("#result")
   resultContainer.innerHTML = result }

   setTimeout(gameResult, 2000)
  //  clearAnswer()

   const userResult = () => {
    var userChoiceContainer = document.body.querySelector("#userChoice")
    userChoiceContainer.innerHTML = `You chose ${userChoice}.`}

    setTimeout(userResult, 0)

   const compResult = () => {
   var choiceContainer = document.body.querySelector("#choice")
   choiceContainer.innerHTML = `Computer chose ${computerResult}.`}

   setTimeout(compResult, 1000)
   

  }
    // function clearAnswer() {
    //    document.getElementById("clear").innerHTML = "Take Another Turn";
    //  }

  


  
  
 