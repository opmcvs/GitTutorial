function getRev(str){
    let rev = "";
    for (let i = str.length-1;i>=0;i--){
       rev += str[i];
    }
    return rev;
}
console.log(getRev("om"))


function getRev1(str){
    let rev = "";
    for(i= str.length-1;i>=0;i--){
      rev += str[i];
    }
return rev;
}
console.log(getRev1("demo"))

const revString = (str) =>{
    const arr = str.split("")
    arr.reverse();
    str= arr.join("");
}
console.log(revString("Demo"));






// remove duplicate from the array
let arr = ['a','b','a','c', 'c','d','f']
// option 1

const getUnique = ()=>{
    return [... new Set(arr) ];
}
console.log(getUnique())




// option 2 my test
const getUnique2 = arr.filter((item)=>{
 let itemUnique =""   
if(item === item){
  itemUnique = "";

}else {
    itemUnique = item;
}

 return itemUnique

})

console.log(getUnique2)

// option 3 filter
// index of = tells which position
const getUnique3 =()=>{
    return arr.filter(function(item,pos){
    return arr.indexOf(item)==pos;
})
}
console.log(getUnique3())

// fibonacci series
let number = parseInt(prompt("Enter number"));
let n1 =0, n2=1, next;
let printFibo = ()=>{
    for(let i = 0; i <=number; i++){
        console.log(n1);
        next = n1+n2;
        n1=n2;
        n2 =next;
    }
}
console.log(printFibo())

// swap two variables
let a = prompt("Enter the first variable: ");
let b = prompt("Enter the second variable :");

let temp;

temp = a;
a = b;
b = temp;
console.log(`the value of a after swapping:${a}`);
console.log(`the value of b after swapping ${b}`);


let student= [
    {id:1,
     name:"luke",
     city:"Gen San " },
    {id:1,
     name:"mark",
     city:"Tacloban " }
]

const getMap = student.map((item)=>{
   let  itemInfo = `${item.id} ${item.name}`
return itemInfo
}).join(",")

console.log(getMap)

let arr2 = [4, 8, 7 , 13, 12];
let sum = arr2.reduce(function (x,y){
    return x+y
},0)
console.log(sum);
// create method which will work on array using prototype
Array.prototype.searchBy = function (rx){
    const isPresent = this.find(m =>m ==rx);
    if(isPresent !== undefined){
        return true;

    }else {
        return false;
    }
}
let test= ['john', '1234','john32']
console.log(test.searchBy('john'));

console.log(isNaN(89));

// Math.max() - method to find the largest number 
// function curring is calling a function within a function 
function multiply (num1){
    return function (num2){
        console.log(num1 + num2);
    }
}


// Example forEach
let text = "";
const fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);

document.getElementById("demo").innerHTML = text;
 
function myFunction(item, index) {
  text += index + ": " + item + "<br>"; 
}


// output 0: apple
//        1: orange
//        2: cherry

// Deep equals funtionns compared two parameter which can 
// can be strings, numbers, objects even inside the nested objecs.

function deepEquals(valueOne, valueTwo){
if( typeof valueOne !=='object'&& typeof valueTwo !=='object'){
  const isValueOneNaN = isNaN(valueOne) && typeof valueOne === 'number';
  const isValueTwoNaN = isNaN(valueTwo) && typeof valueTwo === 'number';
if(isValueOneNaN && isValueTwoNaN){
    return true;
}
   return valueOne === valueTwo;
}
if(deepEquals){

}
} 
// }https://www.youtube.com/watch?v=Rs7ARD5TCFU&t=1345s

Object.entries 
// https://www.youtube.com/watch?v=btwFJT_xzdg&t=595s- next 


// -now
function invertTree(node){
    let left = node.left
    let right = node. right 
    node. right  = left
    node.left = right
    invertTree(left)
    invertTree(right)
}

// Palindrome
// https://www.youtube.com/watch?v=uxzDuDd5T_I&list=PLD_PIFu4jYOuMnFRKQbl21_jZvtxsIFuz&index=2