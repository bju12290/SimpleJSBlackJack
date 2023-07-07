let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
    name: "Brian",
    balance: "$145.44"
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name

let chipsEl = document.getElementById("chips-el")
chipsEl.textContent = player.balance

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1
    if (randomCard === 1) {
        return 11
    }
    else if (randomCard > 10) {
        return 10
    }
    else {
        return randomCard
    }
}

function startGame() {
    isAlive = true
    hasBlackJack = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: "
        for (let i = 0; i < cards.length; i++) {
            cardsEl.textContent += cards[i] + " "
        }
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

function newCard() {
    if (isAlive && hasBlackJack === false) {
        console.log("Drawing a new card")
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}



