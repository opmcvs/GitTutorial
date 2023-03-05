const ourForm = document.getElementById("ourForm");
const ourField = document.getElementById("ourField");
const ourList = document.getElementById("ourList");

ourForm.addEventListener("submit",(e)=>{
e.preventDefault()
createItem(ourField.value)
})

function createItem(x){
  let ourHTML = `<li>${x}<button onclick="deleteItem(this)">Delete</button></li> ` 
// this is use in the deleteItem because the webbrowswer points that object
// that's calling it in this case the li element.
  ourList.insertAdjacentHTML("beforeend",ourHTML)
ourField.value =""
ourField.focus()  
}

function deleteItem(elementDelete){
elementDelete.parentElement.remove()
// parentElement as to remove the whole <li>
}