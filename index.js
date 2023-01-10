let homeScore = document.getElementById("HS")
let guestScore = document.getElementById("GS")
let scoreHome = 0 
let scoreGuest = 0

function h1() {
    scoreHome += 1
    homeScore.innerText = scoreHome
}
function h2() {
    scoreHome += 2
    homeScore.innerText = scoreHome
}
function h3() {
    scoreHome += 3
    homeScore.innerText = scoreHome
}
function g1() {
    scoreGuest += 1
    guestScore.innerText = scoreGuest
}
function g2() {
    scoreGuest += 2
    guestScore.innerText = scoreGuest
}
function g3() {
    scoreGuest += 3
    guestScore.innerText = scoreGuest
}
function reset() {
    homeScore.textContent = 0
    guestScore.textContent = 0
    scoreHome = 0
    scoreGuest = 0
}
function save() {
    let counter = scoreHome + " - " + scoreGuest + " \n"
    saveScore.textContent += counter 
}