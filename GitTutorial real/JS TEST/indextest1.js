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
// Array before unshift: Red,Blue,Orange
// > Array after unshift : Black,Green,Red,Blue,Orange


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
document.body.innerHTML(div);
}

// to attach an innertext to a div, so it will be rendered only there
//first get the id from the div

//this part here wipes out the div 
//document.getElementById('todo-list'(the div id)).innerHTML='';
 
/*todos.forEach(function (todoTitile){
let element =document.createElement('div');
element.innerText = todoTitle;
let todoList =  document.getElementById('todo-list');
todoList.appendChild(element);

});*/

//Create a shopping cart w/3buttons to add the 4th to clear
// BONUS POINTS if you saved this variable outside the
  // function so you can reuse it and not have to run
  // document.getElementById() every time.
  const cart = document.getElementById('cart');

  // BONUS POINTS if you wrote this function with 1 parameter.
  // Writing separate functions like addApple(), addTomato(),
  // is fine too, but this make the function more reusable.
  function addToCart(food) {
    const cartItem = document.createElement('div');
    cartItem.innerText = food;
    cart.appendChild(cartItem);
  }

  function clearCart() {
    cart.innerHTML = '';
  }
 //covert to cm and another button to inch
// value is a string and strings can't be multiplied. We need
// to convert it into a number before we can multiply it.
  const measurement = document.getElementById('measurement');

  function convertToCm(){
const value = measurement.value;
const convertedValue = +value*2.54;

const result = document.createElement('div');
result.innerText = convertedValue;
document.body.appendChild(result);
 }
 function convertToInch(){
  const value =measurement.value;
  const convertedValue = +value/2.54;
   
  const result= document.createElement('div');
  result.innerText= convertedValue;
  document.body.appendChild(result);
 }
//Date picker so will have due date
const todos3 = [{
title:'Get groceries',
dueDate:'2021-10-04'
},{
title:'wash car',
dueDate:'2021-10-20'
},{
title:'Make dinner',
dueDate:'2021-10-30'
}];

function addTodo2(){
const textbox = document.getElementById('todo-title');
const title = textbox.value;

//const datePicker = document.querySelector('.date');
const datePicker = document.getElementById('date-picker');
const dueDate = datePicker.value;
// how to associate due date with each todo- to the object types

todos3.push({
  title:title, // this title on the right is from the textbox.value
  dueDAte: dueDate // this duedate is from the object array
}); // to create an object here
//render();
}

todos.forEach(function (todo){// this todo is for the parameter of the object array todos
  const element = document.createElement ('div');
  element.innerText = todo.title +'' + todo. duedate;


})
//Write a function cartTotal that takes an array of objects cartArray 
//where each object contains a name, price, and quantity. console.log 
//the total price of the items in the cart

function cartTotal(cartArray){
  let total = 0;

  cartArray.forEach(function(item){
 total += +item.price * item.quantity;

  })
  console.log(total);
}

cartTotal([
  {name: 'apple', price: 4,quantity:2},
  {name: 'orange', price:3, quantity:3}
]);



//IIFE example 

const tentFb = (function fib(n){
  if(n <2){
    return n
  }
  return fib(n-1) + fib(n-2)
}) (10);








//Create a <div id="receipt"></div>. Write a function 
//displayReceipt that takes the same array of objects

//id .appendchild. div
const receipt =document.getElementById('receipt');

function displayReceipt(cartArray){
  //receipt.innerHTML = '';

  cartArray.forEach(function(item){
    const receiptLine = document.createElement('div');
    receiptLine.innerText = item.name + '$' +item.price + '*'+ item.quantity;
    receipt.appendChild(receiptLine);
  });
 // You can also calculate the total using just the loop above, but I like
    // to separate them out so each loop does one thing.
  let cartTotal = 0;
  cartArray.forEach(function(item){
    cartTotal = cartTotal + item.price * item.quantity;
  });

  const totalLine = document.createElement('div');
  totalLine.innerText = 'Cart Total =$' + cartTotal;
  receipt.appendChild(totalLine);
}

displayReceipt([
  {name:'apple',price:4,quantity:2},
  {name:'orange',price:3,quantity:3}
])
 // Reminder you can created any element under the ex.
//todos.forEach(function (todo){
  //delete button here
//})
//TO LINK THIS DELETE BUTTON TO EACH  OBJECT IN ARRAY NEED TO
//CREATE A LINK BY iD IN oBJECT.
const id = new Date().getTime(); // for the new add to do so they can have an Id.
//To create a unique id by using the date.
todos.push({
  title:title,
  dueDate:dueDate,
  id:id
});

// under the render()
 function deleteTodo(event){
  const deleteButton = event.target;
  const idToDelete= deleteButton.id;
  console.log(event);// this event is checking the onclick
 todos= todos.filter(function (todo){
  //filter array doesn't modify the array so need the todos(array variable name) , 
  //it creates a copy of the array so need todos=
  // so change the const todos to let todos
  // if the id of this todo matches idToDelete return False
  // for everything else return True
if(todo.id===idToDelete){
  return false;
} else{
  return true;
}
 });
 //similar to forEach 
 // if the value returns true then ok
 // if false then take it out of the array
 //RENDER(); TO UPDATE THE WEBPAGE
}




 const deleteButton= document.createElement('button');
 deleteButton.innerText ='delete';
 deleteButton.style = 'margin-left: 12px;';
 //linking a style directly in js.
 deleteButton.onclick=deleteTodo;
 // linking an onclick in js but giving it the name of the 
 //function rather then actually running it by adding ()
 // because this is through the Dom or Js.
 deleteButton.id=todo.id;// the parameter and the id of object array.
 element.appendChild(deleteButton); 
 // to add a delete button to all  elements-which is link
 // to a div and create it at the end of it for each div.
 /*get groceries delete
   wash car      delete
   Make dinner   delete 
 */

   //Write a function createCart that takes an object 
   //representing prices of food.

   let total =0;
   function createCart(foodPrices){
    const foods = Object.keys(foodPrices);


    foods.forEach(function(food){
      const cartItem = document.createElement('div');


      const foodPrice = foodPrices[food];
      cartItem.innerText = food +'$'+foodPrice;

      const addButton = document.createElement('button');
      addButton.innerText ='Add';

      addButton.onClick= function (){
        total = total + foodPrice;
      };
      cartItem.appendChild(addButton);

      document.body.appendChild(cartItem);
    });
   }
   createCart({Apple:3,Orange:4,Egg:3});