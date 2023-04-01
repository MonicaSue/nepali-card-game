/*------------ Constants ------------*/
const cardValues = {A: 1, 02: 2, 03: 3, 04: 4, 05: 5, 06: 6, 07: 7, 08: 8, 09: 9, 10: 10, J: 10, Q: 10, K: 10}


/*------------ Variables ------------*/
let deck = []
let computerHand = []
let computerDiscard = []
let playerHand = []
let playerDiscardSelection = []
let playerDiscard = []
let cardToRemove, turn, winner // understand this concept from lecture



/*---- Cached Element References ----*/
//card elements
const deckEl = document.getElementById('deck')
const computerHandContainerEl = document.getElementById('computer-hand-container')
const computerDiscardEl = document.getElementById('computer-discard')

const playerHandContainerEl = document.getElementById('player-hand-container')
const playerDiscardContainerEl = document.getElementById('player-discard-container')
// const playerDiscardEl = document.getElementById('player-discard')


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
const pickUpBtnEl = document.getElementById('pick-up-card')


const resetBtnEl = document.getElementById('reset')

//test button elements - worked!
// console.log(compareBtnEl, 'compare btn')
// console.log(resetBtnEl, 'reset btn')
// console.log(pickUpBtnEl, 'pick-up-card')

//message element
const messageEl = document.getElementById("message")

//test message element - worked!
// console.log(messageEl, 'message')

/*--------- Event Listeners ---------*/

dealBtnEl.addEventListener('click', handleDeal)
discardBtnEl.addEventListener('click', handleDiscard)
compareBtnEl.addEventListener('click', ()=> console.log('clicked', 'compare'))

//player event listener
document.addEventListener('click', handleSelection) //{
//   playerHand.forEach((num, idx) => {
//   const target = evt.target.closest(`#P${idx}`)
//   console.log(target)
//   })
// })


resetBtnEl.addEventListener('click', init)

/*------------ Functions ------------*/

init()

// Initialize deck with array of 52 cards 
function init(){
  deck = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]
  compareBtnEl.disabled = true
  computerHand = []
  playerHand = []
  turn = 1
  
}

//// Deal random hand (5 cards) to each player
// Deal button clicked THEN remove card from deck and pushes into player hand array + disables Deal button after
function handleDeal(){
  if (deck.length > 0) {
    for (let index = 0; index < 5; index++) {
      let randIdx = Math.floor(Math.random() * deck.length)
      let playerDealtCard = deck.splice(randIdx, 1)[0]
      playerHand.push(playerDealtCard)
      renderPlayerHand(playerDealtCard)
      }
    }
  if (deck.length > 0) {
    for (let index = 0; index < 5; index++) {
      let randIdx = Math.floor(Math.random() * deck.length)
      let computerDealtCard = deck.splice(randIdx, 1)[0]
      computerHand.push(computerDealtCard)
      renderComputerHand(computerDealtCard)
      }
    } 
  dealBtnEl.disabled = true
}

// Appends the player cards to the player hand container
function appendPlayerCard(playerDealtCard, idx) {
  let playerCard = document.createElement('div')
  playerCard.className = 'card large'
  playerCard.classList.add(playerDealtCard)
  playerCard.id = `P${idx}`
  playerHandContainerEl.appendChild(playerCard)
}

function appendComputerCard(computerDealtCard, idx) {
  let computerCard = document.createElement('div')
  computerCard.className = 'card large'
  computerCard.classList.add(computerDealtCard)
  computerCard.id = `C${idx}`
  computerHandContainerEl.appendChild(computerCard)
}

function renderPlayerHand() {
  playerHandContainerEl.innerHTML = '' // clean state
  playerHand.forEach((playerDealtCard, idx) => {
    appendPlayerCard(playerDealtCard, idx)
  })
}

function renderComputerHand() {
  computerHandContainerEl.innerHTML = '' // clean state
  computerHand.forEach((computerDealtCard, idx) => {
    appendComputerCard(computerDealtCard, idx)
  })
}
// Above code for 5 hand deal -- beginning of each hand`


//Selecting card in player hand and putting it in a temporary array
function handleSelection(evt) {
  playerHand.forEach((num, idx) => {
    const card = evt.target.closest(`#P${idx}`)
    if (card != null) {
      playerDiscardSelection.push(playerHand[parseInt(card.id.slice(1))])
    } 
  })
} 

function handleDiscard() {
  playerDiscardSelection.forEach((card, idx) => {
    playerDiscard.push(card)
    renderPlayerDiscard()
    for (let i = 0; i < playerHand.length; i++) {
      if (playerHand[i] === playerDiscard[idx]) {
        playerHand.splice(i, 1)
      }
      renderPlayerHand()
    }
  })

  // playerHand.splice((playerHand.indexOf(card), 1))
  // renderPlayerHand()
}

function renderPlayerDiscard() {
  playerDiscardContainerEl.innerHTML = '' // clean state
  playerDiscard.forEach((playerDiscardCard, idx) => {
    appendPlayerDiscard(playerDiscardCard, idx)
  })
}

function appendPlayerDiscard(playerDiscardCard, idx) {
  let playerDiscard = document.createElement('div')
  playerDiscard.className = 'card large outline'
  playerDiscard.classList.add(playerDiscardCard)
  playerDiscard.id = `PD${idx}`
  playerDiscardContainerEl.appendChild(playerDiscard)
}


// function highlight 
// target.classList.add('selection')
// target.classList.remove('selection')

//switch player function
// function switchPlayerTurn() {
//   if (winner === true) {
//     return
//   } else {
//     turn *= -1
//   }

// }

// If player hand total is less than or equal to 5, compare hands button becomes available & player may ‘click button’:
// enabling compare button
// function compareEnable() {
//   let playerValue = 0
//   playerHand.forEach(card => {
//     console.log(parseInt(card.slice(1)))
//     playerValue += parseInt(card.slice(1))
//     console.log(playerValue)
//   });
// }
