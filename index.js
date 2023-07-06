let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame() {
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
    if (sum <= 20) {
        message = "Hit or Stay?"
    } else if (sum === 21) {
        hasBlackJack = true
        message = "Blackjack!"
    } else {
        isAlive = false
        message = "Bust!"
    }
    messageEl.textContent = message
}



