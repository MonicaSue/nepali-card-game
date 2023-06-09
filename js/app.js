/*------------ Constants ------------*/

const cards = [
  { name: 'A', value: 1 }, { name: '02', value: 2 }, { name: '03', value: 3 }, { name: '04', value: 4 }, { name: '05', value: 5 }, { name: '06', value: 6 }, { name: '07', value: 7}, { name: '08', value: 8 }, { name: '09', value: 9 }, { name: '10', value: 10 }, { name: 'J', value: 10}, { name: 'Q', value: 10 }, { name: 'K', value: 10}
]

const licenseCombos = [
  ["dA","dQ","dK","dJ","d10"],
  ["dA","dQ","dK","dJ"],
  ["dA","dQ","dK"],
  ["dQ","dK","dJ","d10","d09"],
  ["dQ","dK","dJ","d10"],
  ["dQ","dK","dJ"],
  ["dQ","dJ","d10","d09","d08"],
  ["dQ","dJ","d10","d09"],
  ["dQ","dJ","d10"],
  ["dJ","d10","d09","d08","d07"],
  ["dJ","d10","d09","d08"],
  ["dJ","d10","d09"],
  ["d10","d09","d08","d07","d06"],
  ["d10","d09","d08","d07"],
  ["d10","d09","d08"],
  ["d09","d08","d07","d06","d05"],
  ["d09","d08","d07","d06"],
  ["d09","d08","d07"],
  ["d08","d07","d06","d05","d04"],
  ["d08","d07","d06","d05"],
  ["d08","d07","d06"],
  ["d07","d06","d05","d04","d03"],
  ["d07","d06","d05","d04"],
  ["d07","d06","d05"],
  ["d06","d05","d04","d03","d02"],
  ["d06","d05","d04","d03"],
  ["d06","d05","d04"],
  ["d05","d04","d03","d02","hA"],
  ["d05","d04","d03","d02"],
  ["d05","d04","d03"],
  ["d04","d03","d02","dA"],
  ["d04","d03","d02"],
  ["hA","hQ","hK","hJ","h10"],
  ["hA","hQ","hK","hJ"],
  ["hA","hQ","hK"],
  ["hQ","hK","hJ","h10","h09"],
  ["hQ","hK","hJ","h10"],
  ["hQ","hK","hJ"],
  ["hQ","hJ","h10","h09","h08"],
  ["hQ","hJ","h10","h09"],
  ["hQ","hJ","h10"],
  ["hJ","h10","h09","h08","h07"],
  ["hJ","h10","h09","h08"],
  ["hJ","h10","h09"],
  ["h10","h09","h08","h07","h06"],
  ["h10","h09","h08","h07"],
  ["h10","h09","h08"],
  ["h09","h08","h07","h06","h05"],
  ["h09","h08","h07","h06"],
  ["h09","h08","h07"],
  ["h08","h07","h06","h05","h04"],
  ["h08","h07","h06","h05"],
  ["h08","h07","h06"],
  ["h07","h06","h05","h04","h03"],
  ["h07","h06","h05","h04"],
  ["h07","h06","h05"],
  ["h06","h05","h04","h03","h02"],
  ["h06","h05","h04","h03"],
  ["h06","h05","h04"],
  ["h05","h04","h03","h02","hA"],
  ["h05","h04","h03","h02"],
  ["h05","h04","h03"],
  ["h04","h03","h02","hA"],
  ["h04","h03","h02"],
  ["cA","cQ","cK","cJ","c10"],
  ["cA","cQ","cK","cJ"],
  ["cA","cQ","cK"],
  ["cQ","cK","cJ","c10","c09"],
  ["cQ","cK","cJ","c10"],
  ["cQ","cK","cJ"],
  ["cQ","cJ","c10","c09","c08"],
  ["cQ","cJ","c10","c09"],
  ["cQ","cJ","c10"],
  ["cJ","c10","c09","c08","c07"],
  ["cJ","c10","c09","c08"],
  ["cJ","c10","c09"],
  ["c10","c09","c08","c07","c06"],
  ["c10","c09","c08","c07"],
  ["c10","c09","c08"],
  ["c09","c08","c07","c06","c05"],
  ["c09","c08","c07","c06"],
  ["c09","c08","c07"],
  ["c08","c07","c06","c05","c04"],
  ["c08","c07","c06","c05"],
  ["c08","c07","c06"],
  ["c07","c06","c05","c04","c03"],
  ["c07","c06","c05","c04"],
  ["c07","c06","c05"],
  ["c06","c05","c04","c03","c02"],
  ["c06","c05","c04","c03"],
  ["c06","c05","c04"],
  ["c05","c04","c03","c02","cA"],
  ["c05","c04","c03","c02"],
  ["c05","c04","c03"],
  ["c04","c03","c02","cA"],
  ["c04","c03","c02"],
  ["sA","sQ","sK","sJ","s10"],
  ["sA","sQ","sK","sJ"],
  ["sA","sQ","sK"],
  ["sQ","sK","sJ","s10","s09"],
  ["sQ","sK","sJ","s10"],
  ["sQ","sK","sJ"],
  ["sQ","sJ","s10","s09","s08"],
  ["sQ","sJ","s10","s09"],
  ["sQ","sJ","s10"],
  ["sJ","s10","s09","s08","s07"],
  ["sJ","s10","s09","s08"],
  ["sJ","s10","s09"],
  ["s10","s09","s08","s07","s06"],
  ["s10","s09","s08","s07"],
  ["s10","s09","s08"],
  ["s09","s08","s07","s06","s05"],
  ["s09","s08","s07","s06"],
  ["s09","s08","s07"],
  ["s08","s07","s06","s05","s04"],
  ["s08","s07","s06","s05"],
  ["s08","s07","s06"],
  ["s07","s06","s05","s04","s03"],
  ["s07","s06","s05","s04"],
  ["s07","s06","s05"],
  ["s06","s05","s04","s03","s02"],
  ["s06","s05","s04","s03"],
  ["s06","s05","s04"],
  ["s05","s04","s03","s02","sA"],
  ["s05","s04","s03","s02"],
  ["s05","s04","s03"],
  ["s04","s03","s02","sA"],
  ["s04","s03","s02"],
  ["dA","hA","cA","sA"],
  ["dA","hA","cA"],
  ["dA","cA","sA"],
  ["dA","hA","sA"],
  ["hA","cA","sA"],
  ["dA","hA"],
  ["dA","cA"],
  ["dA","sA"],
  ["hA","cA"],
  ["hA","sA"],
  ["cA","sA"],
  ["dK","hK","cK","sK"],
  ["dK","hK","cK"],
  ["dK","cK","sK"],
  ["dK","hK","sK"],
  ["hK","cK","sK"],
  ["dK","hK"],
  ["dK","cK"],
  ["dK","sK"],
  ["hK","cK"],
  ["hK","sK"],
  ["cK","sK"],
  ["dQ","hQ","cQ","sQ"],
  ["dQ","hQ","cQ"],
  ["dQ","cQ","sQ"],
  ["dQ","hQ","sQ"],
  ["hQ","cQ","sQ"],
  ["dQ","hQ"],
  ["dQ","cQ"],
  ["dQ","sQ"],
  ["hQ","cQ"],
  ["hQ","sQ"],
  ["cQ","sQ"],
  ["dJ","hJ","cJ","sJ"],
  ["dJ","hJ","cJ"],
  ["dJ","cJ","sJ"],
  ["dJ","hJ","sJ"],
  ["hJ","cJ","sJ"],
  ["dJ","hJ"],
  ["dJ","cJ"],
  ["dJ","sJ"],
  ["hJ","cJ"],
  ["hJ","sJ"],
  ["cJ","sJ"],
  ["d10","h10","c10","s10"],
  ["d10","h10","c10"],
  ["d10","c10","s10"],
  ["d10","h10","s10"],
  ["h10","c10","s10"],
  ["d10","h10"],
  ["d10","c10"],
  ["d10","s10"],
  ["h10","c10"],
  ["h10","s10"],
  ["c10","s10"],
  ["d09","h09","c09","s09"],
  ["d09","h09","c09"],
  ["d09","c09","s09"],
  ["d09","h09","s09"],
  ["h09","c09","s09"],
  ["d09","h09"],
  ["d09","c09"],
  ["d09","s09"],
  ["h09","c09"],
  ["h09","s09"],
  ["c09","s09"],
  ["d08","h08","c08","s08"],
  ["d08","h08","c08"],
  ["d08","c08","s08"],
  ["d08","h08","s08"],
  ["h08","c08","s08"],
  ["d08","h08"],
  ["d08","c08"],
  ["d08","s08"],
  ["h08","c08"],
  ["h08","s08"],
  ["c08","s08"],
  ["d07","h07","c07","s07"],
  ["d07","h07","c07"],
  ["d07","c07","s07"],
  ["d07","h07","s07"],
  ["h07","c07","s07"],
  ["d07","h07"],
  ["d07","c07"],
  ["d07","s07"],
  ["h07","c07"],
  ["h07","s07"],
  ["c07","s07"],
  ["d06","h06","c06","s06"],
  ["d06","h06","c06"],
  ["d06","c06","s06"],
  ["d06","h06","s06"],
  ["h06","c06","s06"],
  ["d06","h06"],
  ["d06","c06"],
  ["d06","s06"],
  ["h06","c06"],
  ["h06","s06"],
  ["c06","s06"],
  ["d05","h05","c05","s05"],
  ["d05","h05","c05"],
  ["d05","c05","s05"],
  ["d05","h05","s05"],
  ["h05","c05","s05"],
  ["d05","h05"],
  ["d05","c05"],
  ["d05","s05"],
  ["h05","c05"],
  ["h05","s05"],
  ["c05","s05"],
  ["d04","h04","c04","s04"],
  ["d04","h04","c04"],
  ["d04","c04","s04"],
  ["d04","h04","s04"],
  ["h04","c04","s04"],
  ["d04","h04"],
  ["d04","c04"],
  ["d04","s04"],
  ["h04","c04"],
  ["h04","s04"],
  ["c04","s04"],
  ["d03","h03","c03","s03"],
  ["d03","h03","c03"],
  ["d03","c03","s03"],
  ["d03","h03","s03"],
  ["h03","c03","s03"],
  ["d03","h03"],
  ["d03","c03"],
  ["d03","s03"],
  ["h03","c03"],
  ["h03","s03"],
  ["c03","s03"],
  ["d02","h02","c02","s02"],
  ["d02","h02","c02"],
  ["d02","c02","s02"],
  ["d02","h02","s02"],
  ["h02","c02","s02"],
  ["d02","h02"],
  ["d02","c02"],
  ["d02","s02"],
  ["h02","c02"],
  ["h02","s02"],
  ["c02","s02"],
]

const shuffle = new Audio('assets/audio/card-shuffle.mp3')
const ring = new Audio('assets/audio/himalayan-singing-bowls-trimmed.mp3')
const winSong = new Audio('assets/audio/Nepalese Music  Mandala  Traditional Instrumental Music.mp3')

/*------------ Variables ------------*/

let deck = []
let computerHand = []
let computerDiscard = []
let computerDiscardSelection = []
let computerPickUpSelection = []
let playerHand = []
let playerDiscardSelection = []
let playerPickUpSelection = []
let playerDiscard = []
let step, round, turn, winner
let playerLicense, computerLicense, playerTotalPoints, playerRoundPoints, computerTotalPoints, computerRoundPoints
let roundWinnerText, gameWinnerText, timeLeft

/*------- Cached Element References -------*/

const deckEl = document.getElementById('deck')
const countdownEl = document.getElementById('countdown')
const computerHandContainerEl = document.getElementById('computer-hand-container')
const computerDiscardContainerEl = document.getElementById('computer-discard-container')
const playerHandContainerEl = document.getElementById('player-hand-container')
const playerDiscardContainerEl = document.getElementById('player-discard-container')
const dealBtnEl = document.getElementById('deal')
const discardBtnEl = document.getElementById('discard')
const pickUpBtnEl = document.getElementById('pick-up-card')
const compareBtnEl = document.getElementById('compare-hands')
const nextRoundBtnEl = document.getElementById('next-round')
const resetBtnEl = document.getElementById('reset')
const messageEl = document.getElementById("message")
const roundMessageEl = document.getElementById("round-message")
const licenseMessageEl = document.getElementById("license-message")
const playerPointMessageEl = document.getElementById("player-points")
const computerPointMessageEl = document.getElementById("computer-points")

/*----------- Event Listeners -----------*/

dealBtnEl.addEventListener('click', handleDeal)
discardBtnEl.addEventListener('click', handleDiscardCheckLicense)
pickUpBtnEl.addEventListener('click', handlePickUp)
compareBtnEl.addEventListener('click', handleCompare)
nextRoundBtnEl.addEventListener('click', handleNextRound)
resetBtnEl.addEventListener('click', init)
document.addEventListener('click', handleCardSelection)
deckEl.addEventListener('click', handleDeckPickUp)

/*----------------------- Functions -----------------------*/

/*------------ Game Start & Deal Functions ------------*/

init()

function init(){
  refillDeck()
  deckEl.classList.remove('selection')
  dealBtnEl.disabled = false
  discardBtnEl.disabled = true
  pickUpBtnEl.disabled = true
  compareBtnEl.disabled = true
  nextRoundBtnEl.disabled = true
  clearPlayersHandContainers()
  clearPlayersDiscardContainer()
  turn = 1
  round = 0
  step = 'New Game'
  playerLicense = false
  computerLicense = false
  winner = false
  playerTotalPoints = 0
  playerRoundPoints = 0
  computerTotalPoints = 0
  computerRoundPoints = 0
  updateMessage()
  updateScoreboard()
}

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
  playerLicense = false
  computerLicense = false
  roundCount()
  gameStep()
  updateMessage()
  updateLicenseMessage()
  handVisibility()
}

/*------------- Append & Render Hand Functions ------------*/

function appendPlayerCard(playerDealtCard, idx) {
  let playerCard = document.createElement('div')
  playerCard.className = 'card large'
  playerCard.classList.add(playerDealtCard)
  playerCard.id = `P${idx}`
  playerHandContainerEl.appendChild(playerCard)
}

function renderPlayerHand() {
  playerHandContainerEl.innerHTML = ''
  playerHand.forEach((playerDealtCard, idx) => {
    appendPlayerCard(playerDealtCard, idx)
  })
}

function hidePlayerHand() {
  let playerCard = document.createElement('div')
  playerCard.className = 'card large'
  playerCard.classList.add('back-blue', 'animate__animated', 'animate__flipInY')
  playerHandContainerEl.appendChild(playerCard)
}

function renderHiddenPlayerHand () {
  playerHandContainerEl.innerHTML = ''
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
  computerHandContainerEl.innerHTML = ''
  computerHand.forEach((computerDealtCard, idx) => {
    appendComputerCard(computerDealtCard, idx)
  })
}

function hideComputerHand() {
  let computerCard = document.createElement('div')
  computerCard.className = 'card large'
  computerCard.classList.add('back-blue', 'animate__animated', 'animate__flipInY')
  computerHandContainerEl.appendChild(computerCard)
}

function renderHiddenComputerHand () {
  computerHandContainerEl.innerHTML = ''
  computerHand.forEach((computerDealtCard, idx) => {
    hideComputerHand(computerDealtCard, idx)
  })
}

function handVisibility() {
  if (turn === 1) {
    renderPlayerHand()
    renderHiddenComputerHand()
  } else {
    renderComputerHand()
    renderHiddenPlayerHand()
  }
}

/*---------------- Card Selector Function -----------------*/

function handleCardSelection(evt) {
  if (turn === 1 && step === 'discard') {
    playerHand.forEach((num, idx) => {
      const card = evt.target.closest(`#P${idx}`)
      if (card != null) {
        if (!playerDiscardSelection.includes(playerHand[parseInt(card.id.slice(1))])) {
          playerDiscardSelection.push(playerHand[parseInt(card.id.slice(1))])
          evt.target.classList.add('selection')
        } else {
          let cardToRemove = playerDiscardSelection.indexOf(playerHand[parseInt(card.id.slice(1))])
          playerDiscardSelection.splice(cardToRemove, 1)
          evt.target.classList.remove('selection')
        }
      } 
    })
  } else if (turn != 1 && step === 'discard'){
    computerHand.forEach((num, idx) => {
      const card = evt.target.closest(`#C${idx}`)
      if (card != null) {
        if (!computerDiscardSelection.includes(computerHand[parseInt(card.id.slice(1))])) {
          computerDiscardSelection.push(computerHand[parseInt(card.id.slice(1))])
          evt.target.classList.add('selection')
        } else {
          let cardToRemove = computerDiscardSelection.indexOf(computerHand[parseInt(card.id.slice(1))])
          playerDiscardSelection.splice(cardToRemove, 1)
          evt.target.classList.remove('selection')
        }
      }
    })
  } else if (turn === 1 && step === 'pick-up' && playerLicense === true) {
    computerDiscard.forEach((num, idx) => {
      const card = evt.target.closest(`#CD${idx}`)
      if (card != null) {
        if (!playerPickUpSelection.includes(computerDiscard[parseInt(card.id.slice(2))])) {
          playerPickUpSelection.push(computerDiscard[parseInt(card.id.slice(2))])
          evt.target.classList.add('selection')
        }
      } 
    })
  } else if (turn != 1 && step === 'pick-up' && computerLicense === true) {
    playerDiscard.forEach((num, idx) => {
      const card = evt.target.closest(`#PD${idx}`)
      if (card != null) {
        if (!computerPickUpSelection.includes(playerDiscard[parseInt(card.id.slice(2))])) {
          computerPickUpSelection.push(playerDiscard[parseInt(card.id.slice(2))])
          evt.target.classList.add('selection')
        }
      }
    })
  } else if (turn === 1 && step === 'pick-up' && playerLicense === false) {
    computerDiscard.forEach((num, idx) => {
      const card = evt.target.closest(`#CD${idx}`)
      if (card != null) {
        card.style.cursor = 'not-allowed'
      } 
    })
  } else if (turn != 1 && step === 'pick-up' && computerLicense === false) {
    playerDiscard.forEach((num, idx) => {
      const card = evt.target.closest(`#PD${idx}`)
      if (card != null) {
        card.style.cursor = 'not-allowed'
      } 
    })
  } 
}

/*------------------- Discard Functions -------------------*/

function handleDiscardCheckLicense() {
  if (turn === 1) {
    if (playerDiscardSelection.length === 1) {
      pushDiscard()
    } else if (playerDiscardSelection.length > 1) {
      let comboBoolean = false
      licenseCombos.forEach(licenseCombo => {
        comboBoolean = licenseCombo.every((card) => playerDiscardSelection.includes(card)) 
        if (comboBoolean === true) {
          pushDiscard()
          playerLicense = true
        }
      })
      if (comboBoolean === false) {
        playerDiscardSelection = []
        renderPlayerHand()
      }
    }
  } else {
    if (computerDiscardSelection.length === 1) {
      pushDiscard()
    } else if (computerDiscardSelection.length > 1) {
      let comboBoolean = false
      licenseCombos.forEach(licenseCombo => {
        comboBoolean = licenseCombo.every((card) => computerDiscardSelection.includes(card)) 
        if (comboBoolean === true) {
          pushDiscard()
          computerLicense = true
      }
      })
      if (comboBoolean === false) {  
        computerDiscardSelection = []
        renderComputerHand()
      }
    }
  }
} 

function pushDiscard() {
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
  updateLicenseMessage()
}

function renderDiscard() {
  if (turn === 1) {
    playerDiscardContainerEl.innerHTML = ''
    playerDiscard.forEach((playerDiscardCard, idx) => {
      appendPlayerDiscard(playerDiscardCard, idx)
    })
    pickUpBtnEl.disabled = false
    discardBtnEl.disabled = true
    playerDiscardSelection = []
  } else {
    computerDiscardContainerEl.innerHTML = ''
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
    playerDiscard.classList.add('animate__animated', 'animate__fadeInUp')
    playerDiscardContainerEl.appendChild(playerDiscard)
  }
}

function appendComputerDiscard(computerDiscardCard, idx) {
  if (turn != 1) {
    let computerDiscard = document.createElement('div')
    computerDiscard.className = 'card large outline'
    computerDiscard.classList.add(computerDiscardCard)
    computerDiscard.id = `CD${idx}`
    computerDiscard.classList.add('animate__animated', 'animate__fadeInDown')
    computerDiscardContainerEl.appendChild(computerDiscard)
  }
}

/*------------------- Pick-Up Functions -------------------*/

function handleDeckPickUp() {
  deckEl.classList.add('selection')
  if (deck.length > 0) {
    if (turn === 1) {
      let randIdx = Math.floor(Math.random() * deck.length)
      let playerPickUpCard = deck.splice(randIdx, 1)[0]
      playerPickUpSelection.push(playerPickUpCard)
    } else {
      let randIdx = Math.floor(Math.random() * deck.length)
      let computerPickUpCard = deck.splice(randIdx, 1)[0]
      computerPickUpSelection.push(computerPickUpCard)
    }  
  }
}

function handlePickUp () {
  displayCountdown()
  if (turn === 1) {
    playerHand.push(playerPickUpSelection[0])
    renderPlayerHand()
    playerPickUpSelection = []
  } else {
    computerHand.push(computerPickUpSelection[0])
    renderComputerHand()
    computerPickUpSelection = []
  }
  deckEl.classList.remove('selection')
  pickUpBtnEl.disabled = true
  discardBtnEl.disabled = false
  clearDiscardContainer()
  setTimeout(render, 6000)
}

function render() {
  gameStep()
  switchPlayerTurn()
  updateMessage()
  updateLicenseMessage()
  handVisibility()
  compareEnable()
}

/*---------- Compare Hands & Next Round Functions ---------*/

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

function handleCompare() {
  ring.volume = .10
  ring.play()
  updateLicenseMessage()
  clearDiscardContainer()
  renderPlayerHand()
  renderComputerHand()
  discardBtnEl.disabled = true
  compareBtnEl.disabled = true
  nextRoundBtnEl.disabled = false
  gameStep()
  roundPoints()
  gamePoints()
  determineRoundWinner()
  checkGameWinner()
  updateMessage()
  updateScoreboard()
}

function handleNextRound() {
  shuffle.volume = .10
  shuffle.play()
  compareBtnEl.disabled = true
  clearPlayersHandContainers()
  refillDeck()  
  switchPlayerTurn()
  updateMessage()
  dealBtnEl.disabled = false
  nextRoundBtnEl.disabled = true
    let playerTotal = 0
    playerHand.forEach(playerCard => {
      let playerCardName = playerCard.slice(1)
      cards.forEach(card => {
        if (card.name === playerCardName) {
          playerTotal += card.value
        }
      })
    })
  let computerTotal = 0
    computerHand.forEach(computerCard => {
      let computerCardName = computerCard.slice(1)
      cards.forEach(card => {
        if (card.name === computerCardName) {
          computerTotal += card.value
        }
      })
    })
}

/*------------- Points / Winning Functionality ------------*/

function gamePoints() {
  let playerTotal = 0
    playerHand.forEach(playerCard => {
      let playerCardName = playerCard.slice(1)
      cards.forEach(card => {
        if (card.name === playerCardName) {
          playerTotal += card.value
        }
      })
    })
  let computerTotal = 0
    computerHand.forEach(computerCard => {
      let computerCardName = computerCard.slice(1)
      cards.forEach(card => {
        if (card.name === computerCardName) {
          computerTotal += card.value
        }
      })
    })
  if (playerTotal < computerTotal) {
    playerTotalPoints += 0
    computerTotalPoints += computerTotal
  } else if (computerTotal < playerTotal) {
    computerTotalPoints += 0
    playerTotalPoints += playerTotal
  } else if (turn === 1 && playerTotal >= computerTotal) {
    playerTotalPoints += 25 + playerTotal
    computerTotalPoints += 0
  } else if (turn != 1 && computerTotal >= playerTotal) {
    computerTotalPoints += 25 + playerTotal
  }
}

function roundPoints() {
  let playerHandValue = 0
  playerHand.forEach(playerCard => {
    let playerCardName = playerCard.slice(1)
    cards.forEach(card => {
      if (card.name === playerCardName) {
        playerHandValue += card.value
      }
    })
  })
  let computerHandValue = 0
  computerHand.forEach(computerCard => {
    let computerCardName = computerCard.slice(1)
    cards.forEach(card => {
      if (card.name === computerCardName) {
        computerHandValue += card.value
      }
    })
  })
  if (playerHandValue < computerHandValue) {
    playerRoundPoints = 0
    computerRoundPoints = computerHandValue
  } else if (computerHandValue < playerHandValue) {
    computerRoundPoints = 0
    playerRoundPoints = playerHandValue
  } else if (turn === 1 && playerHandValue >= computerHandValue) {
    playerRoundPoints = 25 + playerHandValue
    computerRoundPoints = 0
  } else if (turn != 1 && computerHandValue >= playerHandValue) {
    computerRoundPoints = 25 + computerHandValue
    playerRoundPoints = 0
  }
}

function determineRoundWinner() {
  if (playerRoundPoints < computerRoundPoints) {
    roundWinnerText = 'Player 1'
  } else {
    roundWinnerText = 'Player 2'
  }
}

function checkGameWinner() {
  if (playerTotalPoints >= 100) {
    winner = true
    confetti.start(3000)
    winSong.volume = .10
    winSong.play()
    gameWinnerText = 'Player 2'
    nextRoundBtnEl.disabled = true
  } else if (computerTotalPoints >= 100) {
    winner = true
    confetti.start(3000)
    winSong.volume = .10
    winSong.play()
    gameWinnerText = 'Player 1'
    nextRoundBtnEl.disabled = true
  }
}

function updateScoreboard() {
  playerPointMessageEl.textContent = `${playerTotalPoints}`
  computerPointMessageEl.textContent = `${computerTotalPoints}`
}

/*----------------- License Functionality -----------------*/

function updateLicenseMessage() {
  if (turn === 1 && playerLicense === true && step === 'pick-up') {
    licenseMessageEl.textContent = `Player 1 Has License: Pick Up 1 Card from Deck or Opponent's Discard Pile`
  } else if (turn === 1 && playerLicense === false) {
    licenseMessageEl.textContent = ''
  } else if (turn != 1 && computerLicense === true && step === 'pick-up') {
    licenseMessageEl.textContent = `Player 2 Has License: Pick Up 1 Card from Deck or Opponent's Discard Pile`
  } else if (turn != 1 && computerLicense === false) {
    licenseMessageEl.textContent = ''
  } else {
    licenseMessageEl.textContent = ''
  }
}

/*----------------- Animations & Timers -------------------*/

function displayCountdown() {
  timeLeft = 5
  let timer = setInterval(function() {
    countdownEl.textContent = `Switching Players in ${timeLeft}`
    timeLeft -= 1
    if (timeLeft <0) {
      countdownEl.textContent = ''
      clearInterval(timer)
    }
  }, 1000)
}

/*-------------------- Other Functions --------------------*/

function refillDeck() {
  deck = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]
}

function updateMessage() {
  let turnText = turn === 1 ? `Player 1` : `Player 2`
  if (!winner && round === 0) {
    messageEl.textContent = `Game On! Click Deal!`
    roundMessageEl.textContent = ``
  } else if (!winner && round > 0 && step != 'round-end') {
    messageEl.textContent = `${turnText}'s Turn`
    roundMessageEl.textContent = `Round ${round}`
  } else if (!winner && round > 0 && step === 'round-end') {
    messageEl.textContent = `${roundWinnerText} Wins`
    roundMessageEl.textContent = `Round ${round}`
  } else if (winner) {
    messageEl.textContent = `${gameWinnerText} is the WINNER!!`
    roundMessageEl.textContent = `Game Over on Round ${round}`
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
  if (round === 0) {
    step = 'New Game'
  } else if (discardBtnEl.disabled === false && compareBtnEl.disabled === true) {
    step = 'discard'
  } else if (discardBtnEl.disabled === false && compareBtnEl.disabled === false) {
    step = 'compare-hands'
  } else if (pickUpBtnEl.disabled === false & nextRoundBtnEl.disabled === true) {
    step = 'pick-up'
  } else if (nextRoundBtnEl.disabled === false) {
    step = 'round-end'
  }
}

function clearPlayersHandContainers() {
  playerHandContainerEl.innerHTML = ''
  playerHand = []
  computerHandContainerEl.innerHTML = ''
  computerHand = []
}

//this is for game reset
function clearPlayersDiscardContainer() {
  computerDiscardContainerEl.innerHTML = ''
  computerDiscard = []
  playerDiscardContainerEl.innerHTML = ''
  playerDiscard = []
}

//this is for in game discard container clearing
function clearDiscardContainer() {
  if (turn === 1) {
    computerDiscardContainerEl.innerHTML = ''
    computerDiscard = []
  } else {
    playerDiscardContainerEl.innerHTML = ''
    playerDiscard = []
  }
}

/*-------------------------- END --------------------------*/