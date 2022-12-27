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
//get the leads form the local storage
const leadsFromLocalStorage =JSON.parse(localStorage.getItem("myLeads")) ;
console.log(leadsFromLocalStorage);

if (leadsFromLocalStorage){
myLeads = leadsFromLocalStorage;
render(myLeads);
}

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