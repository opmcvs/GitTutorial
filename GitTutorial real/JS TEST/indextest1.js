//alert('whats up');
let todo1= 'Get grocery';
let todo2= 'wash car';
let todo3= 'make dinner';

//document.body.innerHTML= (todo1 +todo2 +todo3);

//use appendChild so it wont erase everything like document.body

function addTodo(todoTitle){
    const element= document.createElement('div');
    element.innerText = todoTitle;
    document.body.appendChild(element);
}
addTodo (todo1);
addTodo (todo2);
addTodo (todo3);
//sample function with parameter.
function greeting(firstName){
console.log(hello+firstName);
}
 greeting('Om');
 //create a button using JS
let button = document.createElement('button');
button.innerText = 'Click me';
document.body.appendChild(button);

//change the title using JS
document.title = 'Some other title';

//converts 1 string parameter to uppercase
function toUpper(str){
    console.log(str.toUpper());
}
toUpper(luke);

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
function toUpper(stringsam){
const result=[];

stringsam.forEach(function(str){
result.push(str.toUpper());
});
console.log(result);
}
toUpper(['hello','world']);