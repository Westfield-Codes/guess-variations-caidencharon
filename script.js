/* Simple Guess Program */

// define function guessGame
function guessGame() {
  // generate a random integer 1-100
  var answer = Math.floor(Math.random()*100+1);
  // display the integer for testing purposes only
  alert(answer);
  // create guess and set equal to 0 
  var guess = 0;
  // loop while guess is not equal to answer
  while (guess != answer || guess == "q") {
    // set guess equal to asking user to "Guess a number, 1-100"

    // if guess equals answer display "Correct!" 

    // or if guess is greater than answer display "Too high!" 

    // or if guess is less than answer display "Too low!" 

    // else say "Bad input"

  // end the loop
  }
// end the function
}