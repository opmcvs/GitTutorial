// 21 wins or as close as possible above your out.
//Ace = 11 and king = 10
//querySelector.for class #for Id;


let cards =[];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message ="";

let player ={
    name:"Luke",
    chips: 175
}

const messageEl =document.getElementById("message-el");
const sumEl = document.getElementById("sum-el");
const cardsEl =document.getElementById("cards-el");
const startBtn = document.getElementById("start-btn")
const newCardBtn  = document.getElementById("newcard-btn");

const playerEl = document.getElementById("player-el");
playerEl.textContent = `${player.name}  : $  ${player.chips}`



function getRandomCard(){
let randomNumber = Math.floor(Math.random()*13)+1;
if (randomNumber >10){
    return 10
} else if (randomNumber === 1){
    return 11
} else{
    return randomNumber
}
}


startBtn.addEventListener("click",function startGame(){
 isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard,secondCard];
    sum = firstCard + secondCard;
    renderGame()

})

    function renderGame(){
    cardsEl.textContent = "Cards:" ;
    for (let i=0; i< cards.length; i++){
        cardsEl.textContent += cards[i]+ " "
     }
     sumEl.textContent = "Sum:" + sum
     if (sum <= 20){
        message = "Do you want to draw a new card ?"
     }else if (sum === 21){
     message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


newCardBtn.addEventListener("click", function newCard(){
   if(hasBlackJack === false && isAlive === true){
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
   }
})





















































/*let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
//let newCard = getRandomCard();
const startBtn = document.getElementById("start-btn");
const messageEl = document.getElementById("message-el");
const sumEl = document.getElementById("sum-el");
const cardsEl = document.querySelector("#cards-el");
const newcardBtn=document.getElementById("newcard-btn");



function getRandomCard(){
    let resultRandom = Math.floor(Math.random()*13)+1;
    if(resultRandom > 10){
        return 10
    }else if (resultRandom ===1 ){
        return 11
    }else{
        return resultRandom
     }
    }

function startGame(){
    isAlive=true;
    let firstCard = getRandomCard();
    let secondCard= getRandomCard();
     cards= [firstCard,secondCard];
     sum = firstCard + secondCard;
    renderGame();
}
    
startBtn.addEventListener("click",  renderGame);
function renderGame() {
cardsEl.textContent = `Cards: `;   
//cardsEl.textContent= `${firstCard} & ${secondCard}`;
// if you won't do this it will repeat the value in the 
//newCard funcion 
//sumEl.textContent+=sum;
//${cards[0]} & ${cards[1]

for (let i=0; i<cards.length;i++){
    cardsEl.textContent += cards[i] + " "
}

sumEl.textContent= "Sum:"+ sum;

if (sum<=20){
    message = ("Do you want to draw a new card")
}else if(sum === 21){
    message = ("You won")
    hasBlackJack = true  
}else {
    message = ("You're out of the game");
    isAlive = false;
}

messageEl.textContent = message;
}

newcardBtn.addEventListener("click",()=>{
    let newCard = getRandomCard();
    sum += newCard;
    cards.push(newCard);
    renderGame();
    console.log("newCard");
})*/
 /*  const namet = "power" ;
   const nametTest ="";

for (let i= 0; i<11;i++){
    
    nametTest = namet + i  ;
    
    console.log(nametTest);
}*/

for (let i =10;i<101;i+=10){
console.log(i);
}

const messages2 = ["what","where", "How"]
let texttest ="";
for(i=0;i<messages2.length;i++){
    texttest=messages2[i];
   console.log(texttest) ;
}

const cardsTest =[7,3,9];
let resultCard ="";

for (let i=0; i<cardsTest.length;i++){
     resultCard =  cardsTest[i];
    console.log(resultCard);
}

const sentence = ["Hello","my","name","is","Om"];
const greetingEl = document.querySelector(".greeting-el");


for(let i=0; i<sentence.length;i++){
   
    greetingEl.textContent += "      "+ sentence[i];
}


const p1 = 103;
const p2 = 108;

function getFastestRaceTime(){
return p1 + p2;

}
const fastestRace = getFastestRaceTime();
console.log(fastestRace);


const randomNumber = Math.floor(Math.random()*6)+1;
console.log(randomNumber);

function rollDice(){
    return Math.floor(Math.random()*6)+1;

    
}
console.log(rollDice());

let hasSolvedChallenge = false;
let hasHintsLeft =false;
 


function showSolution (){
    if(hasSolvedChallenge === false && hasHintsLeft ===false){
     console.log("Showing the solution......")
    }
}
showSolution();

let likeDocumentaries = true;
let likeStarUps = false;

if(likeDocumentaries === true || likeStarUps === false){
   recommendMovie();
}

function recommendMovie(){
    console.log("Hey, check out this new film");
}

const castlesRent = {
   IsItCheap : true,
   castleName : "Argonets",
   HowMuch: 789,
   locations:["USA","Britain" ]

}

console.log(castlesRent.castleName);
console.log(castlesRent.locations[0]);