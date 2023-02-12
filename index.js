let homeScore = 0
let guestScore = 0
let homeScoreCard = document.getElementById("home-score")
let guestScoreCard = document.getElementById("guest-score")


function homeFreeThrow(){
    homeScoreCard.textContent = homeScore += 1
}
function homeTwoPointer(){
    homeScoreCard.textContent = homeScore += 2
}
function homeThreePointer() {
    homeScoreCard.textContent = homeScore += 3
}
function guestFreeThrow(){ 
    guestScoreCard.textContent = homeScore += 1
}
function guestTwoPointer(){
    guestScoreCard.textContent = homeScore += 2
}
function guestThreePointer() {
    guestScoreCard.textContent = homeScore += 3
}