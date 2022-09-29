const recipient = "James"
const sender = "Om "
// const email = "Hey" + recipient + "! How is it going? Cheers Om" CHANGE TO TEMPLATE STRINGS OR LITERALS
const email = `Hey ${recipient} ! How is it going? Cheers ${sender}`
console.log(email)

 let myLeads = `["www.awesonmelead.document"]`
 myLeads = JSON.parse(myLeads)
 myLeads.push("www.epiclead.com")
 myLeads = JSON.stringify(myLeads)
 console.log(typeof myLeads)// to check the type again.
 //first change to string as local storage only understands string based. Use this code-
 //inorder for the myLeads [] to store in local storage as it only takes string
 // change it to be an array again by = myLeads = JSON.parse(myLeads)
 // You first convert the array to strring by using the back quotes front and back ``
 //add the = JSON .parse(myLeads) to change the string back to array to use the . function as in strings it wont work.
 // then console.log to check
 
 const inputEl = document.getElementById("input-el")
 const inputBtn = document.getElementById("input-btn")
 const ulel =  docuemtn.getElementById("ul-el")
  localStorage.setItem("myName", "The power Maker")// tO store it for website on extensions to be there after refresh.

  const name = localStorage.getItem("myName")
  console.log(name)


//localStorage.clear()  - clears the local storage.
//falsy values
/*false,0,""
but if its a string and value is zero it is truthsy- ("0") as well as an array
null- how a developer signals emptiness,undefined- how Javascript signals emptiness, Nan- not a number
let current viewwes = null
current viewers = ["jane","blah"]
*/
// to check if falsy or truthsy- use Boolean 
//let trueorFalse = Booolean("")

const welcomeEl = document.getElementById("welcome-el")
function greetUser(greeting,name,emoji) {
  welcomeEl.textContent = `${greeting} , ${name} ${emoji}What is this`// using string literal

}
greetUser ("Welcome back ","om","happy face")


/* samples of parameters, argument and return
function add(num1,num2){
  return num1 + num2


}
console.log (add(3,4))
console.log (add(9,102))*/

function getFirst(arr){
  return arr[0]


}
let firstCard = getFirst([10,2,3])// you can also put in an array
console.log(firstCard)
// BELOW ARE PRACTICES
//Settings stage
const player= "Per"
const opponent = "Nick"
const game = "Amazing Fighter"

let points = 0
let hasWon = false
//playing the game
points+= 100
hasWon = true

//Announcing the winner
if(hasWon){
console.log(`${player}got ${points}points and won the ${game} game!`)

} else {
  console.log(`The winner is ${opponent}! ${player }lost the game`)

}

let myCourses = ["Learn CSS Animations","Ui Design","Intro to clean Code " ]

function logItems(arr){ 
  for (let i = 0;i< arr.lenght; i++)

console.log(arr[i])
}
logItems(myCourses)

//SAVING VALUE TO LOCALSTORAGE
localStorage.setItem("myCredits", "100")//  to save in LOCALSTORAGE(title, Data)
// am example of storing complex data= localStorage.setItem("myLeads", JSON.stringify(myLeads)) as JSON only accepts string in its storage
 let  myCredits = localStorage.getItem("myCredits")  // to retrieve it and can be for renderring as well                                  // to retrieve from LOCALSTORAGE- FIRST store it in a variable
 
  console.log(myCredits)