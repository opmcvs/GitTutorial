const add = (function (x) {
  let counter = 0;
  x= 0 ;
  return function () {
    for(let i = 0; i< x.length; i++){
      counter += x[i];
    }
    counter += 1; 
    return counter;}
}) ();
console.log(add(4))
function myFunction(){
  document.getElementById("demo").innerHTML = add();
}


const addNumber = (function (){
  let counter = 0;
  return function (){
    counter += 1;
    return counter;
  }
})