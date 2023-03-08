const stringName =  (string)=>{
for(i=0; i<string.lenght; i+2)
    return string[i].toUpperCase
}

console.log(stringName)

alert("hello")


const camelL = (string)=>{
    let camelString = "";
    for (let i=0; i<string.length;i++){
        if(i % 2 === 0){
            camelString+= string[i].toUpperCase();
        }else{
            camelString+= string[i].tolowerCase(); 
        }
    }
    return camelString;
}

console.log(camelL("hello"));
console.log(camelL("Monster"));
console.log(camelL("what up"));

//  to turn string to an array = Array from (string)
// string here is  a parameter

let divCounter = 0;
let unknownFour = "";
let fixedHTML = "";

for (let i=0; i<string.length; i++){
    if(string[i] === '<'){
        for (let j = 1; j <5; j++){
            unknownFour += string[i +j];
        }
    }
  if(unknownFour ==="div>"){
    divCounter++;
    if(divCounter % 2 === 0){
   fixedHTML += string[i] +"/";
   unknownFour = "";
   continue;
    }
  }
   
  fixedHTML += string[i];
  unknownFour = "";

return  fixedHTML;

}

// for (let i = 0, len = cars.length, text = ""; i < len; i++) {
//   text += cars[i] + "<br>";
// }

for (key in object) {
  // code block to be executed
}



const person = {fname:"John", lname:"Doe", age:25}; 

let txt = "";
for (let x in person) {
  txt += person[x] + " ";
}

document.getElementById("demo").innerHTML = txt;
// outPut- John Doe 25

// Array.forEach()

{/* <h2>JavaScript Array.forEach()</h2>
<p>Calls a function once for each array element.</p> */}

{/* <p id="demo"></p> */}


const numbers = [45, 4, 9, 16, 25];

let txt1 = "";
numbers.forEach(myFunction);
document.getElementById("demo").innerHTML = txt1;

function myFunction(value, index, array) {
  txt1 += value + "<br>"; 
}

const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x;
}

// remove duplicate from the array
let arr = ['a','b','a','c', 'c','d','f']
// option 1

const getUnique = ()=>{
    return [... new Set(arr) ];
}

// option 2 my test
const getUnique2 = arr.filter((item)=>{
if (item!=""){
}else {
    item
}
 return item

})

console.log(getUnique2)

// option 3 filter
const getUnique3 =()=>{
    return arr.filter(function(item,pos){
    return arr.indexOf(item)=== pos;
})
}
console.log(getUnique3)