let myLeads = [];
const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");

inputBtn.addEventListener("click",function saveLead(){
     myLeads.push(inputEl.value );
    
    //inputBtn.value = myLeads.push();
    console.log(myLeads);
} )























//practice div-test1
const divTest1 = document.querySelector(".div-test1");

divTest1.addEventListener("click",function openBox(){
    divTest1.textContent = "I have open the box";
})