/*------------ Constants ------------*/
const cardValues = {A: 1, 02: 2, 03: 3, 04: 4, 05: 5, 06: 6, 07: 7, 08: 8, 09: 9, 10: 10, J: 10, Q: 10, K: 10}


/*------------ Variables ------------*/
let deck = []
let computerHand = []
let computerDiscard = []
let computerDiscardSelection = [] //temporary array
let computerPickUpSelection = [] //temporary array

let playerHand = []
let playerDiscardSelection = [] //temporary array
let playerPickUpSelection = [] //temporary array
let playerDiscard = []
let cardToRemove, round, turn, winner // understand this concept from lecture


/*---- Cached Element References ----*/
//card elements
const deckEl = document.getElementById('deck')

const computerHandContainerEl = document.getElementById('computer-hand-container')
const computerDiscardContainerEl = document.getElementById('computer-discard-container')

const playerHandContainerEl = document.getElementById('player-hand-container')
const playerDiscardContainerEl = document.getElementById('player-discard-container')


// test deck elements - worked!
// console.log(deckEl, 'deck')
// console.log(computerHandEl, 'computer hand')
// console.log(computerDiscardContainerEl, 'computer discard')
// console.log(playerHandEl, 'player hand')
// console.log(playerDiscardContainerEl, 'player discard')


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
pickUpBtnEl.addEventListener('click', handlePickUp)
compareBtnEl.addEventListener('click', ()=> console.log('clicked', 'compare'))
// resetBtnEl.addEventListener('click', init)

//playerHand-Discard Selection event listener
document.addEventListener('click', handleDiscardSelection)

//player Pick-Up Selection event listener
// document.addEventListener('click', handlePickUpSelection)

//deck event listener
deckEl.addEventListener('click', handleDeckPickUp)


/*------------ Functions ------------*/

init()

// Initialize deck with array of 52 cards 
function init(){
  deck = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]
  discardBtnEl.disabled = true
  pickUpBtnEl.disabled = true
  compareBtnEl.disabled = true
  computerHand = []
  playerHand = []
  turn = 1
  round = 0
  winner = false
  updateMessage()
}

// Deal random hand (5 cards) to each player
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
  discardBtnEl.disabled = false
  round = 1
  updateMessage()
  handVisibility()
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

function hideComputerHand() {
  let computerCard = document.createElement('div')
  computerCard.className = 'card large'
  computerCard.classList.add('back-blue')
  // computerCard.id = `C${idx}`
  computerHandContainerEl.appendChild(computerCard)
}

function renderHiddenComputerHand () {
  computerHandContainerEl.innerHTML = '' // clean state
  computerHand.forEach((computerDealtCard, idx) => {
    hideComputerHand(computerDealtCard, idx)
  })
}

function hidePlayerHand() {
  let playerCard = document.createElement('div')
  playerCard.className = 'card large'
  playerCard.classList.add('back-blue')
  // computerCard.id = `C${idx}`
  playerHandContainerEl.appendChild(playerCard)
}

function renderHiddenPlayerHand () {
  playerHandContainerEl.innerHTML = '' // clean state
  playerHand.forEach((playerDealtCard, idx) => {
    hidePlayerHand(playerDealtCard, idx)
  })
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


//Selecting card(s) to be discarded and rendered in the discard container
//Selecting card in player hand and putting it in a temporary array
function handleDiscardSelection(evt) {
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
}

function renderPlayerDiscard() {
  playerDiscardContainerEl.innerHTML = '' // clean state
  playerDiscard.forEach((playerDiscardCard, idx) => {
    appendPlayerDiscard(playerDiscardCard, idx)
  })
  pickUpBtnEl.disabled = false
  discardBtnEl.disabled = true
  playerDiscardSelection = []
}

function appendPlayerDiscard(playerDiscardCard, idx) {
  let playerDiscard = document.createElement('div')
  playerDiscard.className = 'card large outline'
  playerDiscard.classList.add(playerDiscardCard)
  playerDiscard.id = `PD${idx}`
  playerDiscardContainerEl.appendChild(playerDiscard)
}
// Above code for discard functionality

//Player Pick-Up Functionality
//
function handleDeckPickUp() {
  console.log('deck clicked')
  if (deck.length > 0) {
    if (turn = 1) {
      let randIdx = Math.floor(Math.random() * deck.length)
      let playerPickUpCard = deck.splice(randIdx, 1)[0]
      playerPickUpSelection.push(playerPickUpCard)
    // renderPlayerHand(playerPickUpCard)
    } else { // added this after confirming all of player 1 round 1 works
      let randIdx = Math.floor(Math.random() * deck.length)
      let computerPickUpCard = deck.splice(randIdx, 1)[0]
      computerPickUpSelection.push(computerPickUpCard)
    }  
  }
}

function handlePickUp () {
  if (turn = 1) {
    playerHand.push(playerPickUpSelection)
    renderPlayerHand()
    playerPickUpSelection = []
  } else {//added this after confirming all of player 1 round 1 works
    computerHand.push(computerPickUpSelection)
    renderComputerHand()
    computerPickUpSelection = []

  }
  pickUpBtnEl.disabled = true
  switchPlayerTurn()
  updateMessage()
  handVisibility()
}
//Above code for pick-up functionality

function updateMessage () {
  let turnText = turn === 1 ? `Player 1` : `Player 2`
  if (!winner && round === 0) {
    messageEl.textContent = `Game On! Click Deal`
  } else if (!winner && round > 0) {
    messageEl.textContent = `${turnText}'s turn`
  } else if (winner) {
    messageEl.textContent = `We have a winner!!`
  }
}

function switchPlayerTurn() {
  if (winner === true) {
    return
  } else {
    turn *= -1
  }
}

//NEED TO UPDATE: DELAY THE SWITCH
function handVisibility() {
  if (turn === 1) {
    renderPlayerHand()
    renderHiddenComputerHand()
  } else {
    renderComputerHand()
    renderHiddenPlayerHand()
  }
}



//Compare Hands Functionality 
// function compareHAnds() {

// }


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
