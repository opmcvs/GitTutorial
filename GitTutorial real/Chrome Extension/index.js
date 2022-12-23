let myLeads = ["www.awesome.com","www.power.com","www.school.com"];
const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click",function saveLead(){
     myLeads.push(inputEl.value );
    
    //inputBtn.value = myLeads.push();
    console.log(myLeads);
} )

  
for (let i = 0; i < myLeads.length; i++){
    ulEl.innerHTML += "<li> " + myLeads[i] +"</li>";
    }


















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
const containerEl = document.getElementById("container-el").
innerHTML = `<button>Buy!</button>`;
//containerEl.innerHTML = `<button>Buy!</button>`;





















//practice div-test1
const divTest1 = document.querySelector(".div-test1");

divTest1.addEventListener("click",function openBox(){
    divTest1.textContent = "I have open the box";
})