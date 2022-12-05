// Create a String
const name = "W3Schools";

// List all Elements
let text = ""
for (const x of name) {
  text += x+ "<br>" ;
}
document.getElementById("par").innerHTML = text;