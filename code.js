//function for countdownTimer v1 for wk1-2
function Start(){
    console.log("start() function started");
    // created variable currTime set it equal to 10
    var currTime = 10;
    console.log(currTime);
    document.getElementById("countdownStatus").innerHTML = currTime;
    //9
     setTimeout(function(){
          currTime = currTime - 1;
          //what we do after the delay
          document.getElementById("countdownStatus").innerHTML = currTime;
          console.log(currTime);
     }, 1000)
     //8
     setTimeout(function(){
          currTime = currTime - 1;
          //what we do after the delay
          document.getElementById("countdownStatus").innerHTML = currTime;
          console.log(currTime);
      }, 2000)
     //7
     setTimeout(function(){
          currTime = currTime - 1;
          //what we do after the delay
          document.getElementById("countdownStatus").innerHTML = currTime;
          console.log(currTime);
     }, 3000)
     //6
     setTimeout(function(){
          currTime = currTime - 1;
          //what we do after the delay
          document.getElementById("countdownStatus").innerHTML = currTime;
          console.log(currTime);
      }, 4000)
     //5
     setTimeout(function(){
          currTime = currTime - 1;
          //what we do after the delay
          document.getElementById("countdownStatus").innerHTML = currTime;
          console.log(currTime);
     }, 5000)
     //4
     setTimeout(function(){
          currTime = currTime - 1;
          //what we do after the delay
          document.getElementById("countdownStatus").innerHTML = currTime;
          console.log(currTime);
      }, 6000)
     //3
     setTimeout(function(){
          currTime = currTime - 1;
          //what we do after the delay
          document.getElementById("countdownStatus").innerHTML = currTime;
          console.log(currTime);
     }, 7000)
     //2
     setTimeout(function(){
          currTime = currTime - 1;
          //what we do after the delay
          document.getElementById("countdownStatus").innerHTML = currTime;
          console.log(currTime);
      }, 8000)
     //1
     setTimeout(function(){
          currTime = currTime - 1;
          //what we do after the delay
          document.getElementById("countdownStatus").innerHTML = currTime;
          console.log(currTime);
     }, 9000)
     //blastoff
     setTimeout(function(){
          currTime = currTime - 1;
          //what we do after the delay
          document.getElementById("countdownStatus").innerHTML = "Blastoff!!!";
          console.log(currTime);
      }, 10000)
}

function playcraps(){
     console.log("playcraps() started");
     //generate variables: die1, die2, sum
     var die1;
     var die2;
     var sum;

     //roll the dice
     die1 =Math.floor(Math.random() * 6 + 1);
     console.log(die1)
     die2 =Math.floor(Math.random() * 6 + 1);
     console.log(die2)
     //determine the sum of the two dice and save it in sum
     sum = die1 + die2;
     console.log("sum is equal to " + sum);

     //follow the rules of craps and tell the status in crapsStatus
     //first lose
     if(sum == 7 || sum == 11){
          document.getElementById("crapsStatus").innerHTML = "Craps!! You lose!"
     } else if(die1 == die2 && die1%2 == 0){
          document.getElementById("crapsStatus").innerHTML = "Huzzah! You win!"
     } else {
          document.getElementById("crapsStatus").innerHTML = "You did not win or lose. Please play again."
     }

     
     

     
}