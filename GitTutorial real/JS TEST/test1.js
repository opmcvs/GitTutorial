// Create a String
const name = "W3Schools";

// List all Elements
let text = ""
for (const x of name) {
  text += x+ "<br>" ;
}
document.getElementById("par").innerHTML = text;

function square(num){
  return num+ num;
}

function displaySquare(fn){
//return ("this is the answer"+ (5))
 // return (`this is the answer    ${5}`);
  return ("this is the answer"+ fn(5)); 
}
console.log(displaySquare(square));

(function (x){ //IIFE and closures
  return(function (y){
    console.log(x);
  })(3);
})(7);

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

const myCar = new Car("Ford", 2014);
document.getElementById("demo").innerHTML =
myCar.name + " " + myCar.year;

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age(x) {
  
    return x - this.year;
  }
}

let date = new Date();
let year = date.getFullYear();

let myCar = new Car("Ford", 2014);
document.getElementById("demo").innerHTML=
"My car is " + myCar.age(year) + " years old.";