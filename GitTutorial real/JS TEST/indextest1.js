//alert('whats up');
let todo1= 'Get grocery';
let todo2= 'wash car';
let todo3= 'make dinner';

//document.body.innerHTML= (todo1 +todo2 +todo3);

//use appendChild so it wont erase everything like document.body

/*function addTodo(todoTitle){
    const element= document.createElement('div');
    element.innerText = todoTitle;
    document.body.appendChild(element);
}
addTodo (todo1);
addTodo (todo2);
addTodo (todo3);*/
//sample function with parameter.
function greeting(firstName){
console.log('hello'+firstName);
}
 greeting('Om');
 //create a button using JS
let button = document.createElement('button');
button.innerText = 'Click me';
document.body.appendChild(button);

//change the title using JS
document.title = 'Some other title';

//converts 1 string parameter to uppercase
function moUpper(str){
    console.log(str.toUpperCase());
}
moUpper('luke');

//converts a parameter to centimeters.
function convert(length){
total=length*2.54
console.log(total);
}
convert(24);

//Array
let todos= ['get groceries','wash car','make dinner' ]
todos.push('another todo');//to add to the array in the last.
todos.pop(); // removes the last array.

todos.forEach(function(todoTitle) {
const element= document.createElement('div');
    element.innerText = todoTitle;
    document.body.appendChild(element);
});

//takes 1 parameter an array and logs with all capitalized

function loUpper(stringArr) {
  let result = [];

  stringArr.forEach(function (str) {
    result.push(str.toUpperCase());
  });

  console.log(result);
}
loUpper(['hello', 'world']);

//prints out 2 times bark bark and meow meow
function arrayDouble(sam){
 const result=[];

 sam.forEach(function (stri){
  result.push(stri);
  result.push(stri);
 });
 console.log(result);
}
arrayDouble(['bark','meow']);

//linking a button 
let todos1 = ['get bag','wash revo','make power'];

todos1.forEach(function(todoTitle1){
let element = document .createElement('div');
element.innerText = todoTitle1;
document.body.appendChild(element);
});

function addTodo1(){
    let textbox = document.getElementById('todo-title');
    let title = textbox.value;
    todos1.push(title);
}
// to change the name of button.
function done(){
    let test2 = document.getElementById('todo-test');
    test2.innerText= 'Done';
}

//clicking the button the number in the div increases by 1
let count = 0;// if you put it inside the function only run once
function counter1(){
const test3 = document.getElementById('counter');

count= count+1;
test3.innerText = count;
}

//takes the value of textbox puts in div and render in webpage
function enter(){

const inputE = document.getElementById('textbox1');
let title1= inputE.value;

let div = document.createElement('div');
div.innerText = title1;
document.body.appendChild(div);
}

