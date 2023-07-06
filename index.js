let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""


if (sum <= 20) {
    message = "Hit or Stay? 🤔"
} else if (sum === 21) {
    hasBlackJack = true
    message = "Woohoo! Blackjack! 🎉"
} else {
    isAlive = false
    message = "Bust! 😭"
}

console.log(message)
