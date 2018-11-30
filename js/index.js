var userChoice;
var win = { rock:"scissors", scissors: "paper", paper:"rock"};
var choice = ["rock", "paper", "scissors"];
var computerChoice = choice[Math.floor(Math.random()*choice.length)];
console.log(computerChoice)

var rock = document.body.querySelector(".rock");
  rock.addEventListener("click", function(){
    userChoice = "rock";
    alert('you selected rock')
  }) 
  var paper = document.body.querySelector(".paper");
  rock.addEventListener("click", function(){
    userChoice = "paper";
    
  }) 
  var scissors = document.body.querySelector(".scissors");
  rock.addEventListener("click", function(){
    userChoice = "scissors";
   
    // call computer choice computerChoice()
  }) 

 var compare function(computerChoice, userChoice) 
   if(userChoice==="rock"){
      if(computerChoice==="scissors"){
          return "rock wins";
             }
        else{
          return "paper wins";
    }
   }
  
 
// var img = document.getElementById(img);

// img.addEventListener("click", pickAnswer);

//function pickAnswer(){
  //Document.body CODE HERE = choice[Math.floor(Math.random()*choice.length)];
//}