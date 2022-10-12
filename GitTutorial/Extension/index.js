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
 const ulel =  document.getElementById("ul-el")
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
  welcomeEl.textContent = `${greeting}, ${name} ${emoji} What is this`// using string literal

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
 let  myCredits = localStorage.getItem("myCredits")  // to retrieve it and can be for renderring as well  example of complex =let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))                                // to retrieve from LOCALSTORAGE- FIRST store it in a variable
 
  console.log(myCredits)

  let date = [
     {
      player: "Jane",
      score : 52

     }




  ]

  const logBtn = document.getElementById("log-btn")
logBtn.addEventListener("click", function(){
  logBtn.textContent = (date[0].score)
  
   })
function generateSentence(desc,arr){
  let baseString = `The ${arr.lenght} ${desc} are` 
  for (let i= 0;i,arr.lenght; i++){
    baseString += arr[i] + ","
  }
  return baseString
}
 const sentence = generateSentence("hightest mountains",["Mount Everest","K2"])
 console.log(sentence)

 function getFirstArr(arr){
 return arr[0]
 
 }
 //testing 
 let firstcard= getFirstArr(6,7,8)
 console.log(firstcard)

 function getSecond(arr,part){
 return nokie
 const arr= []

let nokie = `This is really fun ${part} of the equation ${arr}}`
 }

 
let cardZ = getSecond(["ÿahoo","ÿlea"],"Om")
console.log(cardZ)
// another exercise to render out 3 images in html

const imgs= ["img1", "img2", "img3"]
const container = document.getElementById("container")
function renderImg(){
  let imgsDom= ""
  for(let i =0;i <imgs.lenght; i++){
 //container.innerHTML += `<img class= "team-img"src = ${imgs[i]}`// You need with plus so not to clear it out.
 // manipulating the DOM many times would cost you time since in the loop better would be below.
 imgsDom += `<img alt= "Employees" class= "team-img"src = ${imgs[i]}`//alt for accessibility purposes.
}
container.innerHTML = imgsDom



}
//Arrays
// .push  to add in last place 
//.pop to remove in last place
/*
let text = "";
const fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);

document.getElementById("demo").innerHTML = text;
 
function myFunction(item, index) {
  text += index + ": " + item + "<br>"; 
}

another ex.
example.forEach(element) =>{             ELEMENT -current value indexing through
  console.log(element)
})
 


*/
let example1 = ["Dyla", 5, truth]
let example2 = example1
example2.push(11)// both will have 11 added in their array, ELEMENT -current value indexing through
// objects and under them known as property or key like firstName, Age etc.
/*let example1 = {
firstName: "Dyalan",
LastName: "Blah",
address: {
  city:"Austin",
  state: "Texas"
} ,
age: 30, 
cats: ["Milo","Wonder","Power"]
TO PRINT OUT THE KEYS 
console.log(Object.keys(example1))
TO PRINT OUT THE ValuesS 
console.log(Object.values(example1))

}*/

// example let total =0
//let numArray = [10, 20, 30, 34]
//for (let i= 0; i< numArray.lenght;i++){
total += numArray[i]

//console.log(total)- this would be 94
// total += numArray[i]
//}

/*While loops to loop an unknown number of times 
let count = 0
while (true){
  count++

  if(count >= 20){
    break - might need ; here 
  }
}
console.log(count);
*/

/* DO WHILE LOOP
let count = 0;
do {
count ++

if(count ==="Dylan"){
  break
    }
  }
  while(false)

console.log(count)- this would print out 1

*/