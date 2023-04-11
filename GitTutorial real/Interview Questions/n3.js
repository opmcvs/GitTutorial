// Create a String
const name1 = "W3Schools";

// List all Elements
let text = "";
for (const x of name1) {
  text += x+ "<br>" ;
}
document.getElementById("par").innerHTML = text;










function square(num){
  return num+ num;
}


const test7 = ((x) => (function (y) {
  console.log(x);
})(3))(7);
console.log(test7);

const test9 =  ((x)=>{
  function luke (y){
    
  }
})



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
  return function () {
    counter += 1; 
    return counter;}
})();

const adds = (function (){
  let counter = 0;
  return function (){
    counter ++;
    return counter;
  }
})



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
console.log(moreThanTwo);






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
console.log(names1);
const names2 = students.map((stu)=>{
  return stu.name.toUpperCase();
})

// next question return only students who score 80+
let grades =[];
for (let i =0; i<90;i++){
  grades.push (students[i].marks);
}



//using filter
const details = students.filter((stu)=> stu.marks <90);



//calculate all the marks of the students.
const sumTotal = students.reduce((acc,curr)=> acc + curr.marks,0);
console.log(sumTotal);



// names of students who only scored above 85

const detailsMarks = students.filter((stu)=> stu.marks<90).map
((stu)=>stu.name);

const detailMarks = students.filter((stu)=>{ 
  return stu.marks <90
 }).map((stu)=>{
   return stu.name})

console.log(detailMarks)




//those who got less than 60 will get 20 more marks then the total
const totalOp = students.map((stu => {
  if (stu.marks<60){
    stu.marks += 20;
  }
  return stu;
})).filter((stu) => stu.marks > 60).reduce
((acc,curr)=> acc + curr.marks,0);

const totalOP = students.map((stu)=>{
if (stu.marks <60){
  stu.marks+= 20;
}
return stu;
}).filter((stu)=>{
  stu.marks >60
}).reduce((acc , curr)=>{
  acc +curr. marks
},0)


// interview questions
// https://www.youtube.com/watch?v=0ltJGE5Y4Mk

// count vowels inside a string
// const findVowels = (str)=>{
//   const vowels = [ 'a','u','o','i','e',];
//   let count = 0;
//   for (let char of str){
//     if(vowels.includes(char)){
//       count++
// ;    }
//   }
//   return count;
// }

// console.log(findVowels('nanna'));

const findVowels = (str)=>{
  const vowels = [ 'a','u','o','i','e',];
  let count = 0;
  for (let i = 0; i<str.length; i++){
    if(vowels.includes(str[i])){
      count++
;    }
  }
  return count;
}

console.log(findVowels('string'));


// using reduce
const findVowels1 = (str)=>{
  const vowels = [ 'a','u','o','i','e',];

  return str.toLoweCase().split('').reduce((acc,curr)=>{
 if(vowels.includes(curr)){
  acc++;
 }
return acc;
},0)

};

//using Ternary operator
 const findVowels2 = (str)=>{
  const vowels = ['a','e','i','o','u'];

  return str.toLoweCase().split('').reduce((acc,curr)=>{
 
    return vowels.includes (curr)? acc+1:acc;
  },0)
 }

//  reverse each word in a sentence
let answer = ""
const reverseString = (str)=>{
  const rev = [...str]
  for(let i = 0 ;i< str.length-1; i--){
 answer = str[i]
  }
}

 console.log(reverseString("reverse each word"));

// the other option of the hosts
const reverseString1 = (str)=>{
  str.split('').reverse().join('');
}

// define a function that takes an array of strings and 
// returns the most commonly occuring string in that array

// the beginner approach
const commonString = (str)=>{
  const string = {};

  str.forEach((st)=>{
  if(string[st]=== undefined){
    string[st] = 1;
  }else{
    string[st]++;
  }
  });

  let maxEntry;
  let maxValue = 0;

  for(common in string){
    if(string[common] > maxValue){
         maxEntry = common;
         maxValue = string[common];
    }
  }
  return maxEntry;
  console.log(string)
}
console.log(commonString(['a','b','c','a']))

// advance approach
const mostFrequent = (arr)=>{
  const mapping = arr.reduce((acc,el)=>{
    acc[el]= acc [el]? acc[el] + 1:1;
    return acc;
  },{});
  return Object.entries(mapping).reduce((acc,el)=>{
 el[1] > acc[1] ? el: acc
  },[null,0])[0];

}
console.log(mostFrequent(['a','b','c','a']))

// advance interview questions
// https://www.youtube.com/watch?v=-8qfwR-ANDk




















































































// next target :https://www.youtube.com/watch?v=USbiLiF9NDY&list=PLyuRouwmQCjlLW9NjqoBbf9eVaFX4F9UZ