/*------------ Constants ------------*/


/*------------ Variables ------------*/
let deck = []
let computerHand = []
let computerDiscard = []
let playerHand = []
let playerDiscard = []
let cardToRemove, turn, winner // understand this concept from lecture


/*---- Cached Element References ----*/
//card elements
const deckEl = document.getElementById('deck')
const computerHandEl = document.getElementById('computer-hand')
const computerDiscardEl = document.getElementById('computer-discard')
const playerHandEl = document.getElementById('player-hand')
const playerDiscardEl = document.getElementById('player-discard')

// test deck elements - worked!
// console.log(deckEl, 'deck')
// console.log(computerHandEl, 'computer hand')
// console.log(computerDiscardEl, 'computer discard')
// console.log(playerHandEl, 'player hand')
// console.log(playerDiscardEl, 'player discard')

//button elements
const dealBtnEl = document.getElementById('deal')
const discardBtnEl = document.getElementById('discard')
const compareBtnEl = document.getElementById('compare-hands')
const resetBtnEl = document.getElementById('reset')

//test button elements - worked!
// console.log(compareBtnEl, 'compare btn')
// console.log(resetBtnEl, 'reset btn')

//message element
const messageEl = document.getElementById("message")

//test message element - worked!
// console.log(messageEl, 'message')

/*--------- Event Listeners ---------*/

dealBtnEl.addEventListener('click', handleDeal)
discardBtnEl.addEventListener('click', ()=> console.log('clicked', 'discard'))
compareBtnEl.addEventListener('click', ()=> console.log('clicked', 'compare'))
resetBtnEl.addEventListener('click', init)

/*------------ Functions ------------*/

init()

// Initialize deck 1 with array of 52 cards 
function init(){
  deck = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]
}

function handleDeal(){
  if (deck.length > 0) {
    let randIdx = Math.floor(Math.random() * deck.length)
    let cardPickedPlayer = deck.splice(randIdx, 1)[0]
    playerHand.push(cardPickedPlayer)
    render(cardPickedPlayer)
  }
}




function render(cardPickedPlayer) {
  if (playerHand.length === 1) {
    playerHandEl.classList.remove('outline')
  }
  playerHandEl.classList.add(cardPickedPlayer)
  }

// Deal random hand (5 cards) to each player
// If player hand total is less than or equal to 5, compare hands button becomes available & player may ‘click button’:
// If the player's hand total is less than the opponent's hand value, the player wins!
// Player will have a score value of 0 in this round to be added to total game score
// Opponent will have a score value of total hand value to be added to total game score 
// Else if opponent’s hand total is less than the player's hand total, the opponent wins!
// Opponent will have a score value of 0 in this round to be added to total game score
// Player will have a score value of 25 + total hand value in this round to be added to total game score 
// Check if players' total game score is greater than or equal to 100
// If player's game score is true, game is over & the opponent wins, or vice-versa
// Reset game functionality
// Else new round is Rendered, return to step 1
// Else player will select the card(s) to remove from their hand and ‘click the discard button' 
// If multiple cards are discarded, the player unlocks "license" 
// Player will pick up one card from the communal deck or if the player obtained "license", they can select 1 card from the opponent's last turn discard pile and place it in their hand
// Next player's turn, return to step 2
