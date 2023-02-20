

let cards=[]
let sum = 0
let hasBlackJack = false
let isAlive = true
let message = "message-el"
let messageEL=document.getElementById("message-el")
let sumEl=document.querySelector("#sum-el")
let cardEl=document.querySelector("#card-el")
let playerEl=document.querySelector("#player-el")
function getRandomCard(){
    let randomNumber=Math.floor(Math.random()*13)+1
    if(randomNumber>10){
        return 10
    }
    else if(randomNumber === 1){
        return 11
    }
    else {
        return randomNumber
    }   
}
function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    
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
    if((isAlive === true) && (hasBlackJack === false)){
        console.log("Drawing a new card from the deck!")
        let card=getRandomCard()
        sum += card
        cards.push(card)
        renderGame()


    }
    
}