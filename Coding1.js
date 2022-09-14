let myPoints = 3

function addPoint(){
    myPoints +=7
}
function removePoint(){
    myPoints -= 0
}
addPoint()
let error = document.getElementById("error")
function purchasebtn(){
    
    error.textContent = "Something went wrong, please try again"
   }
 let num1 = 8
 let num2 = 2
 document.getElementById("num1").textContent = num1
 document.getElementById("num2").textContent = num2
 let total = document.getElementById("sum-el")
function addbtn(){
    let result = num1 + num2
total.textContent = "Sum: "+ result
}
function subbtn(){
    let result = num1 - num2
total.textContent = "Sum: "+ result
}
function divbtn(){
    let result = num1 / num2
total.textContent = "Sum: "+ result
}
function mulbtn(){
    let result = num1 * num2
    total.textContent = "Sum: "+ result 
}

let firstCard = 6
let secondCard = 9
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
 
function renderGame(){
    sumEl.textContent = "Sum : " + sum
    cardsEl.textContent = "Cards : " + cards[0]+ " " +cards[1]
    
if(sum < 21){
    message="Do you want to draw another?"
}
else if (sum === 21){
    message="You are a winner"
   hasBlackJack = true

}
else {
    message = "Get off loser"
    isAlive = false
}
messageEl.textContent= message

}
 function runNewCard(){
    
    let card = 6 
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
   
 }
 function startGame(){
    renderGame()
 }

 let messages = ['cool','strong','yes']
  messages.push ('yes you are the kings')
  //messages.pop()- removes the last value in an array
  
  console.log(messages)
  
  for (let i = 0; i<messages.length; i+=1 ){ 

    console.log(messages[i])
     }

   let cardstest1 = [7, 3, 9]  
   for(let i=0; i < cardstest1.length; i++) {

     console.log(cardtest1[i])
   }