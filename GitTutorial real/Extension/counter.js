let count=0
const value= document.getElementById("value")
// can be also like this even though it is an id
//const value = document.quesrySelector("#value")
const btns = document.querySelectorAll( '.btn')
console.log(btns);

btns.forEach(function(btn) {
 console.log(btn)
btn.addEventListener('click', function(e){// to check which button
    console.log(e.currentTarget) // to check which button in consoel
    console.log(e.currentTarget.classList) // to check the class of each element
    const styles = e.currentTarget.classList // to setup an if statement so each instance of button click can be isolated.
if(styles.contains("decrease")){
 count--
 

}else if(styles.contains("increase")){
    count++
}else{
    count=0
}
if(count >0){
value.style.color = "darkgreen"
}
if(count <0){
 value.style.color ="red"   
}

if(count === 0){
    value.style.color = "pink" 
}
value.textContent = count // is the span property set in html
})


})