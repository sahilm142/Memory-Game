/*
 * Create a list that holds all of your cards
 */
let cardList = ['fa-diamond','fa-paper-plane-o','fa-anchor','fa-bolt','fa-cube','fa-anchor','fa-leaf','fa-bicycle'];
let moves = 0;

const deck = document.createElement('ul');
deck.classList.add('deck');

document.body.appendChild(deck);

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
displayCards();

function displayCards(){
    for(let i=0;i<2;i++){
        cardList=shuffle(cardList);
        cardList.forEach(createCard);
    }
}

function createLiElement(){
    const li = document.createElement('li');
    li.classList.add('card');
    return li;
}

function createCard(card){
    const i = document.createElement('i');
    i.classList.add('fa');
    i.classList.add(card);
    const li=createLiElement();
    li.appendChild(i);
    deck.appendChild(li);
}


// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

let openCards=[]
const cards = document.getElementsByClassName('card');
let f=0,s=0;

for(let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function(){
        showCard(i);
        if(openCards.length<2){
            pushToOpenList(i)
        }
        else if(openCards.length===2){
            checkCards();   
        }

    }, false);
}

function checkCards(){
    if(openCards[1]===openCards[0]){
        alert("HH");
    }
    else{
        openCards=[]
    }
}

function pushToOpenList(ind){
    openCards.push(getCardClass(ind));
}

function showCard(ind){
    cards[ind].classList.add('open');
    cards[ind].classList.add('show');
}

function hideCard(ind){
    cards[ind].classList.remove('open');
    cards[ind].classList.remove('show');
}

function getCardClass(ind){
    return cards[ind].firstChild.classList[1];
}