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

//let firstCard = 6 no longer needed once have random array
//let secondCard = 9
let player = {
    name: "Om",
    chip: 3000
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")


playerEl.textContent = player.name + " : $" + player.chip
function getRandomCard(){
    let randomNumber =  Math.floor(Math.random()*13)+ 1  
    
    if(randomNumber >10) {
         return 10
         }
         else if(randomNumber ===1){
            return 11
         }
         else {
           return randomNumber 
         }


    return Math.floor(Math.random()*13)+ 1
    
}


function startGame(){
    isAlive = true // like an on switch to start the function 
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard

    renderGame()
}


function renderGame(){
    sumEl.textContent = "Sum : " + sum
    //cardsEl.textContent = "Cards : " + cards[0]+ " " +cards[1]
    for (let i=0;i<cards.length;i++){
     sumEl.textContent+= cards[i] + " "
    }
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
    if(isAlive=== true && hasBlackJack === false ){
    let card = getRandomCard()
    sum += card
    cards.push(card)
    
    renderGame()
    }
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

     console.log(cardstest1[i])
   }

   let sentence = ["hello ","my ","name ","is ","Om "]
   let greetingEl = document.getElementById("greetings-el")

//for(let i= 0; i<sentence.length ; i++) {

//greetingEl.textContent +=sentence[i] + " "
//console.log(sentence[i])
//}
 //let  randomNumber = Math.random() * 6 //from 0000 to before 1 but with 6 until 6  not over 
 //console.log(randomNumber)
 
 //let  floorNumber = Math.floor() //usually use on positive numbers, to remove the zeros in Math.random
// console.log(floorNumber)
/* function rollDice(){
  let randomNumberx = Math.floor ( Math.random() * 6) +1
return randomNumberx

 }
 console.log(rollDice())
 */
/*let hasCompletedCourse = true
let givesCertificate = true

if (hasCompletedCourse ===true){
    if(givesCertificate === true){
        generateCertificate()
    }
    }
function generateCertificate (){
    console.log("Generating certificate....")
} */
/*let hasSolvedChallenge = false
let hasHinsLeft = false

function showSolution(){
    if (hasSolvedChallenge===true && hasHinsLeft ===true){

    console.log("Showing the solution.....")
    }
}
showSolution()*/

/*et likesDocumentaries = false
let likesStarups = false

if(likesDocumentaries===true || likesStarups ===false){
recommendMovie()
}

function recommendMovie(){
    console.log("Hey, check out this  new film.....")
} */

/* for Arrays
let airbndCastleListing = {
  isitcheap: true,
  oneString: "Hey there",
  arrayHere: ["old","beautiful"]


}
console.log(airbndCastleListing.isitcheap)
console.log(airbndCastleListing.arrayHere[1])
*/

/* for object and function
let person = {
    name: "Om",
    age : 38,
    Country: "USA",
}

function logData(){
let dataName = person.name + " is " +person.age +" years old and lives in " +person.Country
console.log(dataName)
}
logData()
*/

/* for push,pop, shift and unshift
let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

for(let i= 0;i <largeCountries.length; i++){
    largeCountries.shift()
    largeCountries.unshift("China")
    
    largeCountries.pop()
    largeCountries.push("Pakistan")

    console.log("-"+largeCountries[i])
    +
}*/

let dayOfMonth = 31
let weekday = "Friday"


if(dayOfMonth === 13 && weekday === "Friday"){
 console.log("Spooky face")

}
/* For Generating Random Date
function getRandomDate() {
    const maxDate = Date.now();
    const timestamp = Math.floor(Math.random() * maxDate);
    return new Date(timestamp);
}

console.log(getRandomDate()); */


// using random with return 
let hands = ["rock","paper","scissor"]
 
function randomItem (){
    
     let randomKey = Math.floor(Math.random()* hands.length/* or you can use 3 */) +1
     return hands [randomKey]
}

console.log(randomItem ())
