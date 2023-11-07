/* 1. computer generates a random number(1-100) (Not shown to player)
 On load or have a prompt screen over game board(button to start the game) */ 

let number

function computerAnswer(){
   number = Math.floor((Math.random() * 100) + 1)
   console.log(number)
   return number
}

/* 2. player types in a guess (1 - 100) and clicks the button
(push number to store in an empty array)*/

/* 3. a way to display what numbers have been guessed for player knowledge
 on submit */
let guess
let track = []

function playerGuess(){
   guess = document.getElementById("text").value
   console.log(guess)
   track.push(guess)
   console.log(track)
   document.getElementById("track").innerHTML = track.join(' ',' ' )
   return parseInt(guess)
}


/* 4. on submit computer tells player if they need to guess higher or lower
 alert or display on the container */

function results(){
   if( guess == number){
     return document.getElementById("guess").innerHTML =  ('You Win!')
   } else if( guess < number && guess >= 0){
      return document.getElementById("guess").innerHTML = (`The Number is Higher!`)
   } else if(guess > number && guess <= 100){
      return document.getElementById("guess").innerHTML = (`The Number is Lower!`)
   } else {
      return document.getElementById("guess").innerHTML = (`Please choose 1 - 100!`)
   }
}


/* 5. a way to track number of guesses and display for player knowledge
 On submit, 5 guesses */
guessCount = ["5", "4", "3", "2", "1"]
document.getElementById("count").innerHTML = guessCount.join(" ")

function guessPop(){
   document.getElementById("count").innerHTML = guessCount.pop()
   
}


/* 6. reset text field for new guess */

/* 7. Game over after 5 guesses 
      alert prompt*/
// Game Win

// 8. Reload when finished and start a new game.
//click okay after game over prompt

// 9. polish styling (text sizing, maybe font family change, look at color scheme some more)


//create variables for functions