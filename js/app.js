/*------------ Constants ------------*/
const cards = [
  { name: 'A', value: 1 }, { name: '02', value: 2 }, { name: '03', value: 3 }, { name: '04', value: 4 }, { name: '05', value: 5 }, { name: '06', value: 6 }, { name: '07', value: 7}, { name: '08', value: 8 }, { name: '09', value: 9 }, { name: '10', value: 10 }, { name: 'J', value: 10}, { name: 'Q', value: 10 }, { name: 'K', value: 10}
]


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
let cardToRemove, step, round, turn, playerPoints, computerPoints, winner // understand this concept from lecture


/*---- Cached Element References ----*/
//card elements
const deckEl = document.getElementById('deck')

const computerHandContainerEl = document.getElementById('computer-hand-container')
const computerDiscardContainerEl = document.getElementById('computer-discard-container')

const playerHandContainerEl = document.getElementById('player-hand-container')
const playerDiscardContainerEl = document.getElementById('player-discard-container')

//button elements
const dealBtnEl = document.getElementById('deal')
const discardBtnEl = document.getElementById('discard')
const pickUpBtnEl = document.getElementById('pick-up-card')
const compareBtnEl = document.getElementById('compare-hands')
const nextRoundBtnEl = document.getElementById('next-round')

// const resetBtnEl = document.getElementById('reset')

//message element
const messageEl = document.getElementById("message")
const roundMessageEl= document.getElementById("round-message")


/*--------- Event Listeners ---------*/

dealBtnEl.addEventListener('click', handleDeal)
discardBtnEl.addEventListener('click', handleDiscard)
pickUpBtnEl.addEventListener('click', handlePickUp)
compareBtnEl.addEventListener('click', handleCompare)
nextRoundBtnEl.addEventListener('click', handleNextRound)
// resetBtnEl.addEventListener('click', init)

//Card Selection event listeners
document.addEventListener('click', handleCardSelection)
deckEl.addEventListener('click', handleDeckPickUp)


/*--------------------- Functions ---------------------*/

/*------------ Game Start & Deal Functions ------------*/

init()

// Initialize deck with array of 52 cards 
function init(){
  deck = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]
  discardBtnEl.disabled = true
  pickUpBtnEl.disabled = true
  compareBtnEl.disabled = true
  nextRoundBtnEl.disabled = true
  computerHand = []
  playerHand = []
  turn = 1
  round = 0
  winner = false
  step = 'New Game'
  playerPoints = 0
  computerPoints = 0
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
  roundCount()
  updateMessage()
  handVisibility()
  gameStep()
}

/*-------------------------- END --------------------------*/

/*------------- Append & Render Hand Functions ------------*/


// Appends the player cards to the player hand container
function appendPlayerCard(playerDealtCard, idx) {
  let playerCard = document.createElement('div')
  playerCard.className = 'card large'
  playerCard.classList.add(playerDealtCard)
  playerCard.id = `P${idx}`
  playerHandContainerEl.appendChild(playerCard)
}

function renderPlayerHand() {
  playerHandContainerEl.innerHTML = '' // clean state
  playerHand.forEach((playerDealtCard, idx) => {
    appendPlayerCard(playerDealtCard, idx)
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

function appendComputerCard(computerDealtCard, idx) {
  let computerCard = document.createElement('div')
  computerCard.className = 'card large'
  computerCard.classList.add(computerDealtCard)
  computerCard.id = `C${idx}`
  computerHandContainerEl.appendChild(computerCard)
}

function renderComputerHand() {
  computerHandContainerEl.innerHTML = '' // clean state
  computerHand.forEach((computerDealtCard, idx) => {
    appendComputerCard(computerDealtCard, idx)
  })
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

/*-------------------------- END --------------------------*/

/*---------------- Card Selector Function -----------------*/

function handleCardSelection(evt) {
  if (turn === 1 && step === 'discard') {
    playerHand.forEach((num, idx) => {
      const card = evt.target.closest(`#P${idx}`)
      if (card != null) {
        playerDiscardSelection.push(playerHand[parseInt(card.id.slice(1))])
      } 
    })
  } else if (turn != 1 && step === 'discard'){
    computerHand.forEach((num, idx) => {
      const card = evt.target.closest(`#C${idx}`)
      if (card != null) {
        computerDiscardSelection.push(computerHand[parseInt(card.id.slice(1))])
      }
    })
    // trying to see if I can add the discard pick up functionality
  } else if (turn === 1 && step === 'pick-up') {
    computerDiscard.forEach((num, idx) => {
      const card = evt.target.closest(`#CD${idx}`)
      if (card != null) {
        playerPickUpSelection.push(computerDiscard[parseInt(card.id.slice(2))])
      } 
    })
  } else if (turn != 1 && step === 'pick-up') {
    playerDiscard.forEach((num, idx) => {
      const card = evt.target.closest(`#PD${idx}`)
      if (card != null) {
        computerPickUpSelection.push(playerDiscard[parseInt(card.id.slice(2))])
      }
    })
  } 
}

/*-------------------------- END --------------------------*/

/*------------------- Discard Functions -------------------*/

function handleDiscard() {
  if (turn === 1) {
    playerDiscardSelection.forEach((card, idx) => {
      playerDiscard.push(card)
      renderDiscard()
      for (let i = 0; i < playerHand.length; i++) {
        if (playerHand[i] === playerDiscard[idx]) {
          playerHand.splice(i, 1)
        }
        renderPlayerHand()
      }
    })
  } else {
    computerDiscardSelection.forEach((card, idx) => {
      computerDiscard.push(card)
      renderDiscard()
      for (let i = 0; i < computerHand.length; i++) {
        if (computerHand[i] === computerDiscard[idx]) {
          computerHand.splice(i, 1)
        }
        renderComputerHand()
      }
    })
  }
  gameStep()
  compareBtnEl.disabled = true
}

function renderDiscard() {
  if (turn === 1) {
    playerDiscardContainerEl.innerHTML = '' // clean state
    playerDiscard.forEach((playerDiscardCard, idx) => {
      appendPlayerDiscard(playerDiscardCard, idx)
    })
    pickUpBtnEl.disabled = false
    discardBtnEl.disabled = true
    playerDiscardSelection = []
  } else {
    computerDiscardContainerEl.innerHTML = '' // clean state
    computerDiscard.forEach((computerDiscardCard, idx) => {
      appendComputerDiscard(computerDiscardCard, idx)
    })
    pickUpBtnEl.disabled = false
    discardBtnEl.disabled = true
    computerDiscardSelection = []
  }
}

function appendPlayerDiscard(playerDiscardCard, idx) {
  if (turn === 1) {
    let playerDiscard = document.createElement('div')
    playerDiscard.className = 'card large outline'
    playerDiscard.classList.add(playerDiscardCard)
    playerDiscard.id = `PD${idx}`
    playerDiscardContainerEl.appendChild(playerDiscard)
  }
}

function appendComputerDiscard(computerDiscardCard, idx) {
  if (turn != 1) {
    let computerDiscard = document.createElement('div')
    computerDiscard.className = 'card large outline'
    computerDiscard.classList.add(computerDiscardCard)
    computerDiscard.id = `CD${idx}`
    computerDiscardContainerEl.appendChild(computerDiscard)
  }
}

/*-------------------------- END --------------------------*/

/*------------------- Pick-Up Functions -------------------*/

function handleDeckPickUp() {
  if (deck.length > 0) {
    if (turn === 1) {
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
  if (turn === 1) {
    playerHand.push(playerPickUpSelection[0])
    renderPlayerHand()
    playerPickUpSelection = []
  } else {//added this after confirming all of player 1 round 1 works
    computerHand.push(computerPickUpSelection[0])
    renderComputerHand()
    computerPickUpSelection = []
    }
  pickUpBtnEl.disabled = true
  discardBtnEl.disabled = false
  clearDiscardContainer()
  switchPlayerTurn()
  updateMessage()
  handVisibility()
  compareEnable()
  gameStep()
}

/*-------------------------- END --------------------------*/

/*---------------- Compare Hands Functions ----------------*/

function compareEnable() {
  if (turn === 1) {
    let playerTotal = 0
    playerHand.forEach(playerCard => {
      let playerCardName = playerCard.slice(1)
      cards.forEach(card => {
        if (card.name === playerCardName) {
          playerTotal += card.value
        }
      })
    })
    if (playerTotal <= 5) {
      compareBtnEl.disabled = false
    } 
  } else {
    let computerTotal = 0
    computerHand.forEach(computerCard => {
      let computerCardName = computerCard.slice(1)
      cards.forEach(card => {
        if (card.name === computerCardName) {
          computerTotal += card.value
        }
      })
    })
    if (computerTotal <= 5) {
      compareBtnEl.disabled = false
    }
  }
}

//NEED TO CALL POINTS / WINNING FUNCTIONALITY IN THE COMPARE HAND FUNCTION
function handleCompare() {
  clearDiscardContainer()
  renderPlayerHand()
  renderComputerHand()
  discardBtnEl.disabled = true
  compareBtnEl.disabled = true
  nextRoundBtnEl.disabled = false
}

/*-------------------------- END --------------------------*/

/*------------- Points / Winning Functionality ------------*/

// function 

/*-------------------------- END --------------------------*/

/*--------------- Next Round Functionality ----------------*/

function handleNextRound() {
  compareBtnEl.disabled = true
  clearPlayersHandContainers()
  switchPlayerTurn()
  updateMessage()
  dealBtnEl.disabled = false
  nextRoundBtnEl.disabled = true
}

/*-------------------------- END --------------------------*/

/*-------------------- Other Functions --------------------*/

//NEED TO UPDATE: DELAYED SWITCH
function handVisibility() {
  if (turn === 1) {
    renderPlayerHand()
    renderHiddenComputerHand()
  } else {
    renderComputerHand()
    renderHiddenPlayerHand()
  }
}

function updateMessage () {
  let turnText = turn === 1 ? `Player 1` : `Player 2`
  if (!winner && round === 0) {
    messageEl.textContent = `Game On! Click Deal`
    roundMessageEl.textContent = `Round ${round}`
  } else if (!winner && round > 0) {
    messageEl.textContent = `${turnText}'s Turn`
    roundMessageEl.textContent = `Round ${round}`
  } else if (winner) {
    messageEl.textContent = `We have a winner!!`
    roundMessageEl.textContent = `Round ${round}`
  }
}

function switchPlayerTurn() {
  if (winner === true) {
    return
  } else {
    turn *= -1
  }
}

function roundCount() {
  round ++
}

function gameStep() {
  if (discardBtnEl.disabled === false) {
    step = 'discard'
  } else if (pickUpBtnEl.disabled === false) {
    step ='pick-up'
  }
}

function clearDiscardContainer() {
  if (turn === 1) {
    computerDiscardContainerEl.innerHTML = ''
    computerDiscard = []
  } else {
    playerDiscardContainerEl.innerHTML = ''
    playerDiscard = []
  }
}

function clearPlayersHandContainers() {
  playerHandContainerEl.innerHTML = ''
  playerHand = []
  computerHandContainerEl.innerHTML = ''
  computerHand = []
}

/*-------------------------- END --------------------------*/





// function highlight 
// target.classList.add('selection')
// target.classList.remove('selection')

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
