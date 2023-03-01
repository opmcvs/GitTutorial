//  the data that pass the function -arguement.
 function doubeln (num1){
  return num1 *2
 }
 doubeln();

 function doubleMe(num1){
    return num1*2
 }
 
 let returnNumber = doubleMe(5) + doubleMe(10);
 alert(returnNumber);

 let meow = {
    speices:"cat",
    eyeColor:" red",
    jump: function (){
        alert("Hi dude")
    }
 }

 meow.speices
 meow.jump()
//   species,eyecolor- property object
// method belongs to an object. 

// New 
const ourInput = document.getElementById("ourInput");
const ourHeader = document.getElementById("ourHeader");
ourInput.addEventListeneer('input',amazing)

function amazing(){
  ourHeader.textContent = ourInput.value + `is cool`;
}

// https://www.youtube.com/playlist?list=PLpcSpRrAaOaoIqHQddZOdbRrzr5dJtgSs

// js - when click do this response
// node.js - when they visit this url  show this content.
// mongoDB- please save this data into the database.

// Day 2 Functions

function greet(x){
return alert(`Howdy there ${x}`)
}
greet ("dude");


function tripleMe (x){
   return x * 3
}

let myFav = tripleMe(12);
alert(myFav);

//  day 3 objects
