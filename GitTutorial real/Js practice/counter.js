const  myAge = 38;
const totalAge = myAge * 7;
console.log (totalAge);

//function test(){
   // const name1 = document.getElementById("count-el")
    //name1.innerHTML = "Howdy Cowdboy";
//}

//test();

//invoking functions
let lapsCompleted = 0;
function totalLaps(){
lapsCompleted += 1;
console.log(lapsCompleted);
}
totalLaps();
totalLaps();

//increment 
let incrementBtn= 0;// needs to be global scope so can 
// invoke each time click.
const saveel=document.getElementById("save-el")
const countel = document.getElementById("count-el")
const saveBTN = document.getElementById("save-btn");


function  increment() {
    incrementBtn += 1;
 countel.innerText= incrementBtn;
}

// function save to log out  the count when its called.
function save (){
console.log(incrementBtn);

let countStr = incrementBtn +" "+ "-";
saveel.innerText += " " + countStr;
//.textContent gets all elements including script style.
//why incrementBtn as already change and scope is used when manipulating.
countel.innerText = 0 ;
incrementBtn =0 ;
}


