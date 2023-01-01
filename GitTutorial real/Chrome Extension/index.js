let myLeads = [];
/*let myLeads = `["www.omtest.com"]`;
//1.turn the myLeads string into array.
myLeads = JSON.parse(myLeads);
//2.push a new value to the array.
myLeads.push("www.lead2.com");
//3. Turn the array inot a string again
myLeads = JSON.stringify(myLeads);
//4.console.log the string using  typeof to verify
console.log(typeof myLeads);*/
const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");


//get the leads form the local storage
const leadsFromLocalStorage =JSON.parse(localStorage.getItem("myLeads")) ;
console.log(leadsFromLocalStorage);

if (leadsFromLocalStorage){
myLeads = leadsFromLocalStorage;
render(myLeads);
}

tabBtn.addEventListener("click",function(){

  //chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
chrome.tabs.query({active:true, currentWindow:true},function(tabs){
//console.log(tabs[0].url);
 // tabBtn.innerHTML = tabs;
 myLeads.push(tabs[0].url);
 localStorage.setItem("myLeads",JSON.stringify(myLeads));
 render(myLeads);
})
  
})

function render(leads){
let listItems = "";
for (let i = 0; i < leads.length; i++){
//ulEl.innerHTML += "<li> " + myLeads[i] +"</li>";
// when you add <ul> to <li> like <ul><li> creates more space
    
// the other way instead of innerHTML is .createElement("li")
//const li = document.createElement("li");
//li.textContent = myLeads[i];
//ulEl.append(li);
  listItems  += `
  <li> 
  <a target='_blank' href='${leads[i]}'> ${leads[i]} 
  </a> 
  </li>`
  // without the + sign in listItems += to avoid the repetition 
  console.log(listItems);
}
//out side of for loop because DOM manipulation comes with a cost.
ulEl.innerHTML = listItems;
}

deleteBtn.addEventListener("dblclick",function(){
localStorage.clear();
myLeads = [];
render(myLeads);

})





inputBtn.addEventListener("click",function (){
   myLeads.push(inputEl.value );
  //ulEl.textContent = "";  
  //resets the input value
  
//save the myLeads array to local storage
//localStroage.setItem("myLeads",JSON.stringify(myLeads));
inputEl.value = "";
localStorage.setItem("myLeads",JSON.stringify(myLeads));
render(myLeads)
   //inputBtn.value = myLeads.push();
   //to verify that it works the local storage
   //console.log(localStorage.getItem("myLeads"));
 console.log(myLeads);
   })





//Truthy 
//const credits = 0
//if ("yolo")// this considered true because its a string 
//[0]= is true because its an array

//Falsy
 //const credits = 0
//if (0)   //o is considered falsy

//if ("")//empty string
//the following are falsy values
//false, 0, "",null-how developer signalize emptiness,
//undefined-how Javascript signalizes emptiness or declared but no value , Nan
   
//To check if truthy or falsy
//Boolean("data here")













// Inserting a Node object
//const parent = document.createElement('div');
//const child = document.createElement('p');
//parent.append(child);

// This appends the child element to the div element
// The div would then look like this <div><p></p></div>

// Inserting a DOMString
//const parent = document.createElement('div');
//.append('Appending Text');
// The div would then look like this <div>Appending Text</div>















//practice
const looks = ["power", "lool", "what"];
//let loopUp = looks.map((look) => {
 //return look + "is this it sauromon";
//})
//console.log(looks);

looks.forEach(lookpar) 

function lookpar (look){
    let itemlook =  look +" "+ "is this it sauromon"
  console.log(itemlook );
   
}
lookpar();

//Practice
//const containerEl = document.getElementById("container-el").
//innerHTML = `<button>Buy!</button>`;
// or containerEl.innerHTML = `<button>Buy!</button>`;

//practice
/*const containerEl = document.getElementById("container-el")
//innerHTML = `<button ${onclick = 'buy()'}>Buy!</button>`;
containerEl.innerHTML = "<button onclick='buy()'>Buy!</button>";

function buy(){
    containerEl.innerHTML += "<p>thank you</P>"
}*/


const containerEl = document.getElementById("container-el")
containerEl.innerHTML = `<button onclick ='buy()'>Buy!</button>`;

function buy(){
    containerEl.innerHTML += '<p>thank you !</P>';
}


//practice template strings or literals
// big benefit is break code into multiple lines.
// a \ to escape template strings even $
// to output in online use \
const recipient = "James";
const sender = "Om king";
const email = `Hey \ 
${recipient} ! \ 
How is it going? Cheers \
${sender}\. `;
console.log(email);

//practice .json file
/*localStorage.setItem("idol","www.omking.com");
localStorage.getItem("idol");
localStorage.clear();
console.log(localStorage);*/
 










//practice div-test1
const divTest1 = document.querySelector(".div-test1");

divTest1.addEventListener("click",function openBox(){
    divTest1.textContent = "I have open the box";
})

//practice
//const welcomeEl = document.getElementById("welcome-el");

//function greetUser(greeting,name){
//welcomeEl.textContent = `${greeting} ${name}`; 

//}
//greetUser("Howdie", "Om");

function add(num1,num2){
  return num1+num2;

}
console.log(add(3,4));
console.log(add(9,102));



function getFirst(arr){
return arr[0];
}
let firstCard = getFirst(["mike","luke"])
console.log(firstCard);

//fistbuzz
for (let i=1; i<100; i++){
  if(i % 3 === 0 && i % 5 ===0){
    console.log("FizzBuzz");
 } else if (i % 3 === 0){
    console.log("fizz");
 }else if (i % 5 === 0){
  console.log("Buzz");
 }else{
  console.log(i);
 }
}

//Practice write a function that takes any number of 
//arguments and returns the sum  of all arguments


function func() {
  console.log(arguments);
  let sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log(sum)
  return sum;
}
func(3,4,5,6,);

//Or

function add(...args){// spreads it in an array
  return args.reduce(function(acc, cur){
    return acc+ cur;
  } )
}
console.log(add(3,4,8));
//0r

function sumTot(...args){
  // can be function sumTot(a, b,...args){
  // where a is 3, b is 4 and an args array  
  let sum = 0;
  for(let i = 0; i<args.length; i++){
   sum += args[i];

  }
  return sum;
  
}
console.log(sumTot(3,4,5,6));

//write a function that takes  two strings A and B
//returns whether b is in a in  a case-insensitive way

function stringL(string1,string2){
let stringCheck = string1.toLowerCase();
return stringCheck.includes(string2.toLowerCase());
}

console.log(stringL("What is this","what"));

//Write a function that takes an array of objects and 
//returns an array  of the objects "none" only if the property 
//exists.

/*function getNames(param){
 let result = [];
 
 for (let i = 0; i<param.length; i++){
  result.push(param[i].name);
 }
 return totalS;
}
console.log(getNames([
 {name:"luke",age: 24,name:"mike"} 
]

));*/

function getNames(param){
 let result = [];
 
 for (let i = 0; i<param.length; i++){
  if(param[i].hasOwnProperty("name")){
  result.push(param[i].name);
 }
}
 return result;
}
console.log(getNames([
 {name:"luke",age: 24,name:"mike"} 
]

));

// practice  let and const template string
const player = "Per";
const  opponent = "Nick";
const  game = "Amazing Fighther";
let  points = 0;
let  hasWon = false;

//playing the game
points += 100;
hasWon = true;

//Announcing the winner
if (hasWon){
  console.log(`${player} got ${points} points and won the ${game} game.`);
}else {
  console.log(`The winner is ${opponent} ! ${player} lost the game`);
}

//practice array
let myCourses = ["Learn CSS","UI design","Intro to clean Code"];

/*function showArray(array){
let renderArray = [];
for (let i=0; i<array.length; i++){
  renderArray += array[i];
}
return renderArray;
}
console.log(showArray(myCourses));*/

function showArray(array){

for (let i=0; i<array.length; i++){
  console.log(array[i]);
}

}
showArray(myCourses);

// practice saving to local storage.

const nameArr = ["weird","power"];
localStorage.setItem("starKey",JSON.stringify(nameArr));

JSON.parse(localStorage.getItem("starKey"));

//Practice fetch the button add eventlistener 
//Log Janes score 

let data = [
  { player:"Jane",
    score : 52

 },
 { player:"Mark",
    score : 41

}
]

const scoreBtn = document.getElementById("score-btn");

scoreBtn.addEventListener("click",function(){
console.log(data[0].score)
})

//Practice it should return  the description and array
let valueLoop = [];
function generateSentence(desc,arr){
  const lastIndex = arr.length -1;
  for (let i=0;i<arr.length; i++ ){
    if(i===lastIndex){
      valueLoop += arr[i];
    }else {
      valueLoop += arr[i] + " , ";
    }
} 
 
 console.log(`The ${arr.length}${desc} are ${valueLoop} ` ) 
}
  
generateSentence(" largest Countries",["China","USA","India"]);

function generateSentence(desc,arr){
let baseString = `The ${arr.length}${desc} are`;
const lastIndex =arr.length -1;
for(let i=0; i<arr.length; i++){
  if(i === lastIndex){
    baseString += arr[i]
  }else{
    baseString += arr[i] + " ,"
  }
}

return baseString
}

const sentence = generateSentence("largest countries",["USA","India","China"]);
console.log(sentence);

