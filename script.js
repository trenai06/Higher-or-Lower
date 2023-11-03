let number = Math.floor((Math.random()* 100) + 1)
// maybe put into a function to call on load. think through another function for calling numbers. 

let guess = []
function playerGuess(guess){
 if(guess < number){
    return (`Higher`)
 } else if(guess > number){
    return(`Lower`)
 } else{
    return('guess 1 - 100, please!!')
 }
}

// 1. computer generates a random number(1-100) (Not shown to player)
/* On load or have a prompt screen over game board */ 

// 2. player types in a guess (1 - 100) and clicks the button
/*(push number to store in an empty array) */

// 3. on submit computer tells player if they need to guess higher or lower
/* alert or display on the container */

// 4. a way to track number of guesses and display for player knowledge
/* On submit, 5 guesses */

// 5. a way to display what numbers have been guessed for player knowledge
/* on submit */

// 6. Game over  win lost, You win win won

// 7. Reload when finished and start a new game.

// 8. polish styling (text sizing, maybe font family change, look at color scheme some more)
