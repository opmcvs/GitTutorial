let countEL =document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0
function increment() {
    count += 1
    countEL.innerText = count
 console.log("The button was click")

}

function save(){
  let countStr = count + '-'
//saveEl.innerText += countStr  but there is a problem with the spacing so see below
saveEl.textContent += countStr
countEL.textContent = 0 
count = 0
  console.log("Saving")  
}

 let welcomeEl = document.getElementById("welcome-el")
 let name1 = 'Om'
 let greeting = 'Howdy cowby '
 welcomeEl.innerText = greeting + name1
 welcomeEl.innerText = welcomeEl.innerText + "Lolipop "
 welcomeEl.innerText += 'Bananas'
 
 

 