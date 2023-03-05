// Api - where one application can communicate 
// w/ other applications
// ENDPOINTS - IS JUST THE URL

fetch("https://dog.ceo/api/breeds/list/all").then(function(response){
    return response.json()
}).then(function(data){
    console.log(data)
})

// the above code is old and ugly
// check the message in the developer tools 

// for modern use you need to be inside async function
async function start(){
const response = await fetch("https://dog.ceo/api/breeds/list/all")
const data = await response.json()
 createBreedList(data.message)
}
start()

function createBreedList(breedList){
document.getElementById("breed").innerHTML=`
      <select onchange="loadByBreed(this.value)">
    <option>Choose a dog breed</option>
    ${Object.keys(breedList).map(function (breed){
         return `<option>${breed}</option>`
    }).join('')}
    
    </select>`
    // returning an array base on the object as map()is an array method
    // use the Object.keys it will return an array
    // join() converts an array into on single text. 
}

async function loadByBreed (breed){
//  alert ( breed)
//  breed not equal to itself breed = breed
if(breed != "Choose a dog breed"){
 const  response =  await fetch(`https://dog.ceo/api/breed/${breed}/images`)
// in the fetch connected to api breed 
const data = await response.json()
console.log(data)

}
}