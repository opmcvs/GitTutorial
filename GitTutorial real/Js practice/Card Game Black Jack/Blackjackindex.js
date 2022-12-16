// 21 wins or as close as possible above your out.
//Ace = 11 and king = 10
//querySelector.for class #for Id;
let firstCard = 10;
let secondCard = 4;
const cards = [firstCard,secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let newCard = 6;
const startBtn = document.getElementById("start-btn");
const messageEl = document.getElementById("message-el");
const sumEl = document.getElementById("sum-el");
const cardsEl = document.querySelector("#cards-el");

const newcardBtn=document.getElementById("newcard-btn");
 
//ALWAYS KEEP IN MIND THE LESS FACTOR 
function startGame(){
    renderGame();
}

    message = ("You're out of the game");
    isAlive = false;
startBtn.addEventListener("click",  renderGame);
function renderGame() {
cardsEl.textContent = `Cards: ${cards[0]} & ${cards[1]}`;   
//cardsEl.textContent+= `${firstCard} & ${secondCard}`;
// if you won't do this it will repeat the value in the 
//newCard funcion 
//sumEl.textContent+=sum;
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
    
    sum += newCard;
    cards.push(newCard);
    renderGame();
    console.log("newCard");
})
   let namet = "look" ;
for (let i= 0; i<11;i+=1){
    
    console.log(namet);
}

for (let i =10;i<101;i+10){

}
console.log(i);