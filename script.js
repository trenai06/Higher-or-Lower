let number

function computerAnswer(){
   number = Math.floor((Math.random() * 100) + 1)
   console.log(number)
   return number
}


let guess
let track = []


function results(){
   guess = document.getElementById("text").value
   if( guess == number){
      document.getElementById("guess").innerHTML =  ('You Win!')
      alert ('You Win');
      window.location.reload()
     return 
   } else if( guess < number && guess >= 0){
       document.getElementById("guess").innerHTML = (`The Number is Higher!`)
       track.push(guess)
       document.getElementById("track").innerHTML = track.join(' ',' ' )
       guessPop()
      return 
   } else if(guess > number && guess <= 100){
       document.getElementById("guess").innerHTML = (`The Number is Lower!`)
       track.push(guess)
       document.getElementById("track").innerHTML = track.join(' ',' ' )
       guessPop()
       return
   } else {
       document.getElementById("guess").innerHTML = (`Please choose 1 - 100!`)
      return
   }
}

guessCount = ["1", "2", "3", "4"]


function guessPop(){
   document.getElementById("count").innerHTML = guessCount.pop()
   
}



function gameOver(){
   if(track.length == 5){
      alert (`Game Over. Want to try again??`);
      window.location.reload()
      }
   }


