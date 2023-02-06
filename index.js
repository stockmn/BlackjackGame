
let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = "message-el"
let messageEL=document.getElementById("message-el")
let sumEl=document.querySelector("#sum-el")
let cardEl=document.querySelector("#card-el")

// 2. Create a startGame() function. Move the conditional
// below (line 11-20) inside the body of the function.

function startGame() {
    cardEl.textContent="Cards: "+firstCard +" "+secondCard
    sumEl.textContent="Sum: "+sum
    if (sum <= 20) {
        message = "Do you want to draw a new card? "
    } else if (sum === 21) {
        message = "You've got Blackjack! "
        hasBlackJack = true
    } else {
        message = "You're out of the game! "
        isAlive = false
    }
    messageEL.textContent=message
    console.log(message)    
}
function newCard(){
    console.log("Hello Bonface Maina")
    let card=6
    sum += card
    startGame()

}