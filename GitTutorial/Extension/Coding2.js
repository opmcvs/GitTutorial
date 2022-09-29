let fruit =["apple","orange","apple","orange"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")


function  appleShelfCon (){
    for(let i=0; i<fruit.length; i++){

    if(fruit[i]==="apple"){
      appleShelf.textContent +=" "+ fruit[i]

    }
    else{
        orangeShelf.textContent += " " + fruit[i]
    }
 
console.log(appleShelf)}
}
appleShelfCon ()


/* for use of addEventListener
function saveLead(){
console.log("button clicked")
}*/
// once const is used cannot assign to other variable
//let inputBtn = document.getElementById("input-btn")

//inputBtn.addEventListener("click", function() { 
//  console.log("Button clicked from addevent listener")
//}) 

let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabbtn = document.getElementById("tab-btn")

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
 console.log(leadsFromLocalStorage)
//1. check if leadsFromLocalStorage is truthy
//2. if so, set myLeads to its value and call renderLeads()


if (leadsFromLocalStorage){
  myLeads = leadsFromLocalStorage
  renderLeads(myLeads)
}

const tabs = [
{url:"https://www.linkedin.com/in/per-herald-borgen/"}// an array with a key or object

]
// moved the render function here to make it more usable or refactoring
function renderLeads(leads){
  let listItems = ""
  for(let i = 0; i<leads.length; i++){
  // ulEl.textContent+= myLeads[i] + " " change this to below .innerHTML to print it in HTML
  //listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>"+ myLeads[i] + "</a></li>"
  // to make the save link clickable  ( above is the old way to use multiple elements)
  listItems += `
  <li>
  <a target='_blank' href= '${leads[i]}' >
    ${leads[i]} 
    </a>
  </li> `
  
  
  // to make the save link clickable
  
  
  ulEl.innerHTML = listItems // to render out list items as the .textcontent is limited in its use.
  }









 deleteBtn.addEventListener("dblclick", function(){
console.log("double clicked")
localStorage.clear()
myLeads= []
renderLeads(myLeads)
 })
 
 tabbtn.addEventListener("click",function(){
console.log(tabs[0].url)// using the 1st place in the array
myLeads.push(tabs[0].url) 
})
inputBtn.addEventListener("click", function() { 
 myLeads.push(inputEl.value)// get the value inputed
 inputEl.value= " "  // clears the value
 localStorage.setItem("myLeads", JSON.stringify(myLeads))

 renderLeads(myLeads)
  //console.log(myLeads)
})
/* the render leads was here originally
function renderLeads(){
let listItems = ""
for(let i = 0; i<inputEl.length; i++){
// ulEl.textContent+= myLeads[i] + " " change this to below .innerHTML to print it in HTML
//listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>"+ myLeads[i] + "</a></li>"
// to make the save link clickable  ( above is the old way to use multiple elements)
listItems += `
<li>
<a target='_blank' href= '${myLeads[i]}' >
  ${myLeads[i]} 
  </a>
</li> `


// to make the save link clickable


ulEl.innerHTML = listItems
}*/

//let box = document.getElementById("box")
//box.addEventListener("click", function(){
//console.log("Hey you have clicked the box")

//})

/*const basePrice = 520
const discount = 120
let shippingCost = 12
let shippingTime = "5-12 days"

 shippingCost = 15
 shippingTime = "7-14 days"
  
 const fullPrice = basePrice - discount + shippingCost
 console.log("Total cost: "+ fullPrice +" It will arrive in"+ shippingTime)*/

const container = document.getElementById("container")

container.innerHTML = "<button onclick= 'buy()'>Buy!</button>"
function buy(){
container.innerHTML +="<p> Thank you for buying!</p> "                       
// output is this paragraph will appear below the buy button.
}
// Another option for .inerHTMl
// 1. create the element const li = document.createElement("li")
//2. set text content =        li.textContent = myLeads[i]
//append to ul   =             ulel.append(li)
}
