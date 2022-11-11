const navToggle = document.querySelector(".nav-toggle")
const links = document.querySelector(".links")

navToggle.addEventListener('click', function(){
//console.log(links.classList) shows all the classess in the element(class).
//console.log(links.classList.contains("random")) to check if it is in the classlist
console.log(links.classList.contains("links"))
/*if(links.classList.contains("show-links")){
  links.classList.remove("show-links")
}
else{
    links.classList.add("show-links")
}*/
 links.classList.toggle("show-links") // shorcut it toggles no need for if else statement.
})