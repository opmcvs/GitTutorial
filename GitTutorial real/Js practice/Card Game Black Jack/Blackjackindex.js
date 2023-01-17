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

//practice
let person = {
  name: "master",
  age: 38,
  country: "USA"

}
function logData(){
    console.log(`${person.name} is ${person.age} and lives in ${person.country}`)
}
logData();

//practice
const age = 65;
function getAge(){
if(age < 6 ){
    console.log("Free")
}else if(age >= 6 && age <= 17){
    console.log("child discount")
}else if(age >= 18 && age <=65){
    console.log("full price")
}else {
    console.log("Senior citizen discount")
}
}
 console.log(getAge());

 //practice
 const largeCountries = ["Russia","India","USA","Indonesia","Pakistan"]
 
 function countries(){
 for (let i = 0; i < largeCountries.length; i++){
     
    console.log("This is the largest countries in the world"+"-"+
    largeCountries[i])
 }
}
console.log(countries());






const large = "Om"
let newName = "";
 
 function countries1(){
 for (let i = 0; i < 7; i++){
     newName = large[i];
     
    console.log("This is my name"+"-"+
    newName)
 }
}
console.log(countries1());
//practice
let largeCountries1 = ["Tuvalu","India","USA","Indonesia","Monaco"];

largeCountries1.pop();
largeCountries1.push("Pakistan");
largeCountries1.shift("Tuvalu");
largeCountries1.unshift("China");
console.log(largeCountries1);

//Practice
let date = new Date();
function getDate(){
if(date === "Friday" && date === 13){
    console.log("this is scary")
}else{
    console.log("It's a normal day")
}
}
getDate();

//Practice
/*let hands = ["rock","paper","scissor"];
let stringArray ="" ;
let outPutGame ="";

function randomHand(){
outPutGame = Math.floor(Math.random()*hands.length);
if(outPutGame === 0){
    return stringArray = "rock"
}else if(outPutGame === 1){
     return stringArray = "paper"
}else{
    return stringArray= "scissor"
}
}
randomHand();*/

let hands = ["rock","paper","scissor"];
function getHand(){
    let randomIndex = Math.floor(Math.random()*3)
    return hands[randomIndex]
}
console.log(getHand());




//Pratice
let fruits = ["apple","orange","apple","apple","orange"];

const appleShelf = document.getElementById("apple-shelf");
const orangeShelf = document.getElementById("orange-shelf");

/*function putShelf(fruit){
    for (let i =0; i < fruit.length; i++){
    if(fruit[i] === "apple"){
     appleShelf.textContent += "apple"
    }else{
      orangeShelf.textContent += "orange"  
    }
    }
}*/

//practice forEach same scenario as above
fruits.forEach (sorfruit);

function sorfruit(fruit){
if(fruit === "apple"){
     appleShelf.textContent += "apple"
    }else{
      orangeShelf.textContent += "orange"  
    }
}

// const btnUp= document.getElementById("btn-up");

// let count = 0;

// btnUp.addEventListener("click",function (){
//      count += count;
//    const counter = document.getElementById("counter");  
//      counter.innerText = count;
// }
// )

// Exercise 2
// Set up a <div id="counter">0</div>, a button with the label "Up", and a variable: let count = 0; so that when clicking the button, the number in the div increases by 1. (hint: use count = count + 1;)

// solution.html
// <div id="counter">0</div>
// <button onclick="countUp()">Up</button>
// <script>
//   let count = 0;

//   function countUp() {
//     count = count + 1;
//     let counter = document.getElementById('counter');
//     counter.innerText = count;
//   }
// </script>

// Exercise 3
// Set up the same counter as above, but with another button "Down", that decreases the count by one. (hint: use count = count - 1;)

// solution.html
// <div id="counter">0</div>
// <button onclick="countUp()">Up</button>
// <button onclick="countDown()">Down</button>
// <script>
//   let count = 0;

//   function countUp() {
//     count = count + 1;
//     updateCount();
//   }

//   function countDown() {
//     count = count - 1;
//     updateCount();
//   }

//   // Not necessary, but BONUS POINTS if you separated this
//   // repeated code into a function!
//   function updateCount() {
//     let counter = document.getElementById('counter');
//     counter.innerText = count;
//   }
// </script>


// input id="input" type="text"placeholder="text"/>
//   <div id="div">div is here</div>
//   <button id="btn-e4">press</button>

const input=document.getElementById("input");
const btnTest4 = document.getElementById("btn");

btnTest4.addEventListener("click", function display(){
  let inputValue =  input.value;
  let div = document.createElement ("div");
  div .innerText =inputValue;
  document.body.appendChild(div);
  

})


// Exercise 4
// Create a button that takes what's inside the textbox, puts it in a div and adds the div to the page.

// solution.html
// <input type="text" id="todo-title" />
// <button onclick="displayTitle()">Display Title</button>
// <script>
//   function displayTitle() {
//     let textbox = document.getElementById('todo-title');
//     let title = textbox.value;

//     let div = document.createElement('div');
//     div.innerText = title;
//     document.body.appendChild(div);
//   }
// </script>

























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