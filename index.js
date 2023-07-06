let firstCard = 11
let secondCard = 10
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true

if (sum <= 20) {
    console.log("Hit or Stay? 🤔")
} else if (sum === 21) {
    console.log("Woohoo! Blackjack! 🎉")
    hasBlackJack = true
} else {
    console.log("Bust! 😭")
    isAlive = false
}

console.log(hasBlackJack)
console.log(isAlive)