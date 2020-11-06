// js

// The deck 
let deck = [
    // diamonds
    'Ace of diamonds',
    '2 of diamonds',
    '3 of diamonds',
    '4 of diamonds',
    '5 of diamonds',
    '6 of diamonds',
    '7 of diamonds',
    '8 of diamonds',
    '9 of diamonds',
    '10 of diamonds',
    'Jack of diamonds',
    'Queen of diamonds',
    'King of diamonds',
    // clubs
    'Ace of clubs',
    '2 of clubs',
    '3 of clubs',
    '4 of clubs',
    '5 of clubs',
    '6 of clubs',
    '7 of clubs',
    '8 of clubs',
    '9 of clubs',
    '10 of clubs',
    'Jack of clubs',
    'Queen of clubs',
    'King of clubs',
    //hearts
    'Ace of hearts',
    '2 of hearts',
    '3 of hearts',
    '4 of hearts',
    '5 of hearts',
    '6 of hearts',
    '7 of hearts',
    '8 of hearts',
    '9 of hearts',
    '10 of hearts',
    'Jack of hearts',
    'Queen of hearts',
    'King of hearts',
    // spades
    'Ace of spades',
    '2 of spades',
    '3 of spades',
    '4 of spades',
    '5 of spades',
    '6 of spades',
    '7 of spades',
    '8 of spades',
    '9 of spades',
    '10 of spades',
    'Jack of spades',
    'Queen of spades',
    'King of spades'
]
let cards = 0;
let playerAmount = 0;
let dealerAmount = 0;
let amount = 0;

// Event listiners
document.getElementById('stay').addEventListener('click', stay);
document.getElementById('Draw').addEventListener('click', DrawACard);

// Functions
function stay() {
}

function DrawACard() {
    let r = Math.random() * deck.length;
    let chosenCard = deck.splice(r, 1)
    document.getElementById('cardsDrawn').innerHTML = playerAmount;
    console.log(chosenCard);
    blackjack(chosenCard);
}

function blackjack(card) {
    if (card = 'Ace of spades' || 'Ace of hearts' || 'Ace of clubs' || 'Ace of diamonds') {
        // one or eleven
    }else if (card = '2 of spades' || '2 of hearts' || '2 of clubs' || '2 of diamonds') {
        amount += 2
        if (amount > 21) {
            bust()
        }
    }else if (card = '3 of spades' || '3 of hearts' || '3 of clubs' || '3 of diamonds') {
        amount += 3
        if (amount > 21) {
            bust()
        }
    }else if (card = '4 of spades' || '4 of hearts' || '4 of clubs' || '4 of diamonds') {
        amount += 4
        if (amount > 21) {
            bust()
        }
    }else if (card = '5 of spades' || '5 of hearts' || '5 of clubs' || '5 of diamonds') {
        amount += 5
        if (amount > 21) {
            bust()
        }
    }else if (card = '6 of spades' || '6 of hearts' || '6 of clubs' || '6 of diamonds') {
        amount += 6
        if (amount > 21) {
            bust()
        }
    }else if (card = '7 of spades' || '7 of hearts' || '7 of clubs' || '7 of diamonds') {
        amount += 7
        if (amount > 21) {
            bust()
        }
    }else if (card = '8 of spades' || '8 of hearts' || '8 of clubs' || '8 of diamonds') {
        amount += 8
        if (amount > 21) {
            bust()
        }
    }else if (card = '9 of spades' || '9 of hearts' || '9 of clubs' || '9 of diamonds') {
        amount += 9
        if (amount > 21) {
            bust()
        }
    }else if (card = '10 of spades' || '10 of hearts' || '10 of clubs' || '10 of diamonds') {
        amount += 10
        if (amount > 21) {
            bust()
        }
    }else if (card = 'Jack of spades' || 'Jack of hearts' || 'Jack of clubs' || 'Jack of diamonds') {
        amount += 10
        if (amount > 21) {
            bust()
        }
    }else if (card = 'Queen of spades' || 'Queen of hearts' || 'Queen of clubs' || 'Queen of diamonds') {
        amount += 10
        if (amount > 21) {
            bust()
        }
    }else if (card = 'King of spades' || 'King of hearts' || 'King of clubs' || 'King of diamonds') {
        amount += 10
        if (amount > 21) {
            bust()
        }
    }
    console.log(amount)
    if (playerAmount == 0) {
        playerAmount = amount;
    }else {
        dealerAmount = amount;
    }
}

function bust() {
    document.getElementById('Outcome').innerHTML = 'You lose'
}