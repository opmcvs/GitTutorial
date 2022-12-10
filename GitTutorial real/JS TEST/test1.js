// Create a String
const name = "W3Schools";

// List all Elements
let text = ""
for (const x of name) {
  text += x+ "<br>" ;
}
document.getElementById("par").innerHTML = text;

function square(num){
  return num+ num;
}

function displaySquare(fn){
//return ("this is the answer"+ (5))
 // return (`this is the answer    ${5}`);
  return ("this is the answer"+ fn(5)); 
}
console.log(displaySquare(square));

(function (x){ //IIFE and closures
  return(function (y){
    console.log(x);
  })(3);
})(7);

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

const myCar1 = new Car("Ford", 2014);
document.getElementById("demo").innerHTML =
myCar1.name + " " + myCar1.year;

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age(x) {
  
    return x - this.year;
  }
}

let date = new Date();
let year = date.getFullYear();

let myCar = new Car("Ford", 2014);
document.getElementById("demo").innerHTML=
"My car is " + myCar.age(year) + " years old.";

//JavaScript Closures
//Remember self-invoking functions? What does this function do?
//The self-invoking function only runs once. It sets the counter to zero (0), 
//and returns a function expression.


const add = (function () {
  let counter = 0;
  return function () {counter += 1; return counter;}
})();

function myFunction(){
  document.getElementById("demo").innerHTML = add();
}
/*Example Explained
The variable add is assigned to the return value of a self-invoking function.

The self-invoking function only runs once. It sets the counter to zero (0), and returns a function expression.

This way add becomes a function. The "wonderful" part is that it can access the counter in the parent scope.

This is called a JavaScript closure. It makes it possible for a function to have "private" variables.

The counter is protected by the scope of the anonymous function, and can only be changed using the add function.

A closure is a function having access to the parent scope, even after the parent function has closed.*/

//MAP  FILTER  REduce
//map
const nums = [1,2,3, 4];
const multiplyThree =  nums.map((num,i,arr) =>{
return num *3;
})
console.log(multiplyThree);

//filter
const nums1 = [1,2,3, 4];
const moreThanTwo = nums1.filter((num1)=>{
returns >2
})
console.log(nums1);

//REduce 
const nums2 = [1,2,3, 4];
//acc= the result of the previous computation 
//if there is no initial value, it takes first element
//of array as value for accumulator
//curr= the current element of the array
const sum= nums2.reduce((acc,curr,i,arr)=>{
return acc + curr;
},0);
console.log(sum);

//map vs forEach
//both are array functions to loop through the array
//for each doesn't return any array
const arr = [2,5,3,4,7];
arr.map

let students = [
  {name:"Piyus", rollNumber:31, marks:80},
  {name:"Jenny", rollNumber:15, marks:89},
  {name:"what ",rollNumber:34,marks:65},
  {name:"where",rollNumber:20,marks:68}

];
let names = [];
for (let i =0;i<students.length;i++){
  names.push(students[i].name.toUpperCase());
}
//to output only the students name in uppercase.

//using map as a one liner
const names1 = students.map((stu)=> stu.name.toUpperCase());
console.log(names);

// next question return only students who score 80+
let grades =[];
for (let i =0; i<90;i++){
  grades.push ([i].grades);
}
//using filter
const details = students.filter((stu)=> stu.marks <90);

//calculate all the marks of the students.
const sumTotal = students.reduce((acc,curr)=> acc + curr.marks,0);
console.log(sumTotal);

// names of students who only scored above 85

const detailsMarks = students.filter((stu)=> stu.marks<90).map
((stu)=>stu.name);

//those who got less than 60 will get 20 more marks then thie total
const totalOp = students.map((stu => {
  if (stu.marks<60){
    stu.marks += 20;
  }
  return stu;
})).filter((stu) => stu.marks > 60).reduce
((acc,curr)=> acc + curr.marks,0);


