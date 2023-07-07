// let age = 20

// if (age < 21) {
//     "You can not enter the club!"
// } else {
//     "Welcome!"
// }

//-----------------

// let age = 100

// if (age < 100) {
//     console.log("Not eligible.")
// } else if (age === 100) {
//     console.log("Here is your birhtday card from the king!")
// } else {
//     console.log("Not eligble, you've already gotten one!")
// }

// let featuredPosts = ["Check out my Netflix clone",
// "Here's code for my projecet",
// "I've just relaunched my portfolio"]

// let experience = ["CEO at Scrimba",
// "Frontend developer at Xeneta",
// "People Counter for Norstat"]

// console.log(experience[1])
// console.log(experience[2])
// console.log(experience[0])

// let about = ["Bran",
// 24,
// true]

// let cards = [7, 4]

// cards.push(6)
   
// console.log(cards)

// let messages = ["Hey, how's it going?",
// "I'm great, thank you! How about you?",
// "All good. Been working on my portfolio lately."]

// let newMessage = "Same here!"

// messages.push(newMessage)

// messages.pop()

// console.log(messages)

// for ( let count = 10; count < 21; count += 1 ) {

//     console.log(count)

// }

// for (let i = 10; i < 101; i += 10) {
//     console.log(i)
// }

// let messages = ["Hey, how's it going?",
// "I'm great, thank you! How about you?",
// "All good. Been working on my portfolio lately.",
// "Same here!",
// "Nice!"]

// for (let i = 0; i < messages.length; i += 1) {
//     console.log(i)
// }

// let cards = [7, 3, 9]

// for (let i = 0; i < cards.length; i++) {
//     console.log(cards[i])
// }

// let sentence = ["Hello",
// "my",
// "name",
// "is",
// "Brian"]

// let greetingEl = document.getElementById("greeting-el")

// for (let i = 0; i < sentence.length; i++) {
//     greetingEl.textContent += sentence[i] + " "
// }

// let player1Time = 102
// let player2Time = 107

// function getFastestRaceTime() {
//     if (player1Time < player2Time) {
//         return player1Time
//     } else if (player1Time > player2Time) {
//         return player2Time
//     } else {
//         return player1Time
//     }
// }

// let fastestRace = getFastestRaceTime()

// console.log(fastestRace)

// function getTotalRaceTime() {
//     return player1Time + player2Time
// }

// totalTime = getTotalRaceTime()

// console.log(totalTime)

// let randomNumber = Math.random() * 6

// console.log(randomNumber)

// let flooredNumber = Math.floor(3.45632)

// console.log(flooredNumber)



// let randomNumber = rollDice()
// console.log(randomNumber)

// function rollDice() {
//     return Math.floor(Math.random() * 6) + 1
// }

// let hasCompletedCourse = true
// let givesCertificate = true

// function generateCertificate() {
//     console.log("Generating certifcate...")
// }

// if (hasCompletedCourse && givesCertificate) {
//     generateCertificate()
// }

// let hasSolvedChallenge = false
// let hasHintsLeft = false

// function showSolution() {
//     console.log("Showing the solution...")
// }

// if (hasSolvedChallenge === false && hasHintsLeft === false) {
//     showSolution()
// }

// let likesDocumentaries = true
// let likesStartups = false

// function recommendedMovie() {
//     console.log("Hey, check out this new film we think you will like!")
// }

// if (likesDocumentaries || likesStartups) {
//     recommendedMovie()
// }

let course = {
    title: "Learn CSS Grid",
    lessons: 16,
    creator: "Per",
    length: 63,
    level: 2,
    isFree: true,
    tags: ["html", "css"]
}