
let firstCard = 10
let secondCard = 4
let cards=[firstCard,secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = "message-el"
let messageEL=document.getElementById("message-el")
let sumEl=document.querySelector("#sum-el")
let cardEl=document.querySelector("#card-el")

// 2. Create a startGame() function. Move the conditional
// below (line 11-20) inside the body of the function.
function startGame(){
    renderGame()
}

function renderGame() {
    cardEl.textContent="Cards: "
    for(let i=0;i<cards.length;i+=1){
        cardEl.textContent += cards[i]+" "

    }
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
    console.log("Drawing a new card from the deck!")
    let card=6
    sum += card
    cards.push(card)
    renderGame()

}