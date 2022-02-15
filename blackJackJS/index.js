// 1. Create two variables, firstCard and secondCard.

let firstCard ;
let secondCard;
let sum = 0;
let cardsList = []
let isAlive = false;
let hasBlackJack = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerOneName = document.getElementById("player1-name");
let playerOneScore = document.getElementById("player1-points");
let playerTwoName = document.getElementById("player2-name");
let playerTwoScore = document.getElementById("player2-points");
// create a players object.
let playersInfo = [playerOneName, playerOneScore, playerTwoName, playerTwoScore]
let players = { playerOne :["Ramez", 100],
                playerTwo : ["computer",100],
                playersname: function(){
                    for(var player in players){
                        var item = players[player]
                        for( var i = 0 in item){
                            playersInfo[i].textContent = item[i]
                        }
                    }
                }
            }
// players.playersname()*
playerOneName.textContent = "name: " + players.playerOne[0]
playerOneScore.textContent = "points: " + players.playerOne[1]
// playerTwoName.textContent = "name: " + players.playerTwo[0]
// playerTwoScore.textContent = "points: " + players.playerTwo[1]


function getRandomCard(){
    let random = Math.floor((Math.random() * 12) + 1)
    if (random >=10){
        return 10;
    }else if (random === 1){
        return 11;
    }
    return random;
}

function start(){
    isAlive = true;
    firstCard = getRandomCard();
    secondCard = getRandomCard();
    // 2. Create a variable, sum, and set it to the sum of the two cards
    sum = firstCard + secondCard;
    play();
}

function draw(){
    isAlive = false;
    players.playerOne[1] += sum
    playerOneScore.textContent = "points: " + players.playerOne[1]    
    cardsList = []    
    sum = 0;
    play()
}

function play(){
    sumEl.textContent = "Sum: ";
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard + " ";
    for (i = 0; i < cardsList.length; i++ ){
        cardsEl.textContent += cardsList[i] + " ";
        sum += cardsList[i];
    }
    // sum = cardsList[0] + cardsList[1];
    sumEl.textContent += sum;

    if(sum === 21){
        message = "Horay!, you won!";
        hasBlackJack = true;
    }else if(sum > 21){
        message = "Sorry, you lost";
        isAlive = false;
    }else{
        message = "Do you want to draw another card?";
        isAlive = true;
    }
    
    messageEl.textContent = message;
    
} 

function hit(){
    
    if (isAlive === true && hasBlackJack === false){
        let anotherCard = getRandomCard();
        cardsList.push(anotherCard);
        play();
    }
}

