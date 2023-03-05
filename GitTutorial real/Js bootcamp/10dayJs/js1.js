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
const meows = {
    speices:"cat",
    eyeColor:" red",
    foods:{
      favorite:"tuna",
      leastfavorite: "oranges"
    },
    jump (){
        alert("what's up")
    }
 }
 meows.jump();
 meows.foods.favorite;

//  day 4 arrays
const myPets = [
   {name:'meow',
    species: 'now'  },
   {name:'berksalot',
    species: 'I dont know'} 
]
console.log(myPets[1].species)
// prints out "I don't know"


// myPets.push[{kill: 'I dont know'} ]
console.log(myPets)

const myNumber = [ 1,2,3];
console.log(myNumber);

const myWords = ["Red","Blue","Green"]
myWords.push("yellow")
myWords.splice(0,1)
// for splice method.
// first parameter is the index
// second parameter  is how many items you want remove 
// starting from that index.

let mynNumber1 = 7.68
consolge.log(myNumber.toFixed())
// to round up the number.

// Day 5 Making decisions
const strawberryCount =  20
document.write("congrats!")

if(strawberryCount>9){
   document.write("congrats")
}else{
   document.write("Sorry")
}

let strawberryC = 2 
while(strawberryC <200){
   document.write("There are "+strawberryC+ "strawberies")

   // so it prints each sentence on a line 
   document.write("There are "+strawberryC+ "strawberies.<br>")

   strawberryC = strawberryC +1
   // strawberryC ++
}

// Day 6 Higher Order Function- accepts a function as arguement
//  and  or returns a function 
//  in other languages can't pass a fucntion 
function createMultiplier(multiplier){
return function (x){
   return x * multiplier
}
}
let doubleMe = createMultiplier(2);
let tripleMe = createMultiplier(3);
let quadrupleMe = createMultiplier(4);

document.write(tripleMe(5))
// output would be 5* 3 = 15

const myColors = ['red','orange','yellow']
myColors.forEach(saySomething)

function saySomething(color){
 document.write(`The color ${color} is a great color`)
}

// const newColor = myColors.map((color) =>{
//    return `${color} this is a great color`
// })


// Day 7 Returning  vS Mutating
let pets = [
   {name: 'meowalat',
 species: 'cat',
     age:2  },
{name: 'barksalar',
 species: 'dog',
     age: 3  },
{name: 'purrsload',
 species: 'cat',
     age: 8  },
]

pets.push({name: 'puppster',
            species: 'dog',
               age: 1  },)
 console.log(pets)              

//  array.map()-and array.filter() they return 
//  a value they don't mutate the array.---- this is questionable

const pet = pets.map((nameOnly)=>{
 return nameOnly.name
})

const petDog = pets.filter((canine)=>{
   const canineName = canine.species
   return canineName == "dog"
})
console.log(petDog)
// prints out {name: 'barksalar',species: 'dog', age: 3 } 
//             {name: 'puppster', species: 'dog', age: 1  }
const getDog = pets.filter((x)=>{
   return x.species === 'dog'
})
console.log(getDog)

// filter out only dogs that are less babies
const babyDog = pets.filter ((x)=>{
   return x.age <3
} 
)
const answer = pets.filter(petDog).filter(babyDog).map(pet)
// prints out puppster


let outTest = pets.map(nameOnly)
function nameOnly(x){
   return x.name
}

let dogs = pets.filter(onlyDogs)
 function onlyDogs(x){
   return x.species =='dog'
}

function onlyBabies(x){
   return x.age<3
}


const babyDogNames = pets.filter(onlyDogs).filter(onlyBabies).map
(nameOnly)
console.log(babyDogNames)
// prints out puppster


// Day 8 scopes -for variables
// and context - for objects

// scopes- 1.global 2.function 3.block scopes
// block - like if statements, objects and others {}
// move upwards 
// let to change of course and then just the var
//  to modify or mutate it.
// let uses block scope var uses function scope

// and context - for objects
let john = {
   firstName: "John",
   lastName :"Doe",
   driveCar(){
      console.log(`${this.firstName} ${this.lastName} is driving`)
//  this. keyword does not point to the enclosing obj or let John in this case
//  points towards the obj.executing the function 
// aka executing or calling the function
// so the john is calling so this 
//  so the function is calling but no object so point to global window

   }
}

john.driveCar()

function breathe(){
    console.log(`${this.firstName} ${this.lastName} is breathing`)
}
breathe.call(john)
// to bypass the limitation of this. as it will point to the global function.
// Or use an arrow function as it is not part of its keys function 

driveCar(){
      let iamFunction =() =>console.log(this)
}
// Day 9Miscellanous must know
// function with out name -its not going to get hoisted 
// Template literals - ``