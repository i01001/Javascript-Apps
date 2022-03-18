
let cards =[]
let blackjack = false;
let isalive = false;
let messaged = "";
let sum = 0;
let messagetop = document.getElementById("messagea");
let total = document.getElementById("total");
let cardsline = document.getElementById("cards");
let cardmessage = document.getElementById("cardmessage");

function getrandom(){
    return Math.floor(Math.random()*10)+2;
}


function start(){
    isalive = true;
    let cardone = getrandom();
    let cardtwo = getrandom();
    sum = cardone + cardtwo;
    cards.push(cardone)
    cards.push(cardtwo)
    rendergame()
}

function rendergame(){
    cardsline.textContent = "Cards: ";
    for(i = 0; i < cards.length; i++){
        cardsline.textContent += cards[i] + " ";
    }

    if(sum <= 20){
        messaged = "Do you want to draw another card?"
    }
    
    else if(sum === 21){
        messaged = "Congrats you got blackjack!"
        blackjack = true;
    }
    
    else{
        messaged = "You have lost!"
        isalive = false;
    }
    
    messagetop.textContent = messaged;
    total.textContent = "SUM: " + sum;
}

function newcard(){
    let card3 = getrandom();
    cards.push(card3)
    sum += card3;
    messagetop.textContent = "Drawing a new card from deck";
    rendergame()   
}


console.log(Math.random()*11)

console.log(Math.floor(Math.random()*10)+2)

