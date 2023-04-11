const people = [
{ 
    name: 'bod',
    age: 20, 
    position: 'developer'
},
{ 
    name: 'anna',
    age: 25, 
    position: 'developer'
},
{ 
    name: 'sussy',
    age: 30, 
    position: 'the boss'
}

]
// additional info. 
const ages = (person)=> person.age*2;

const getAge = people.map((person)=>{
  return person.age;
})
console.log(getAge)

// returning an Object
// the Object keys can be name anything. 
const newPeople = people.map ((item )=>{
return {
       name:item.name.toUpperCase(),
       OldAge: item.age +20
        }
})
console.log(newPeople);


const names = people.map((person)=>{
    return `<h2>${person.name}</h2>`
})
const result = socument.querySelector('#result');

result.innerHTML = names.join(''); 

// no.2 Unique Values - https://www.youtube.com/watch?v=yxT1lgupUrY&list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ&index=2

const menu = [
    {
        name: 'pancakes',
        category: 'breakfast',
    },
        {
        name: 'burger',
        category: 'lunch',
    },
        {
        name: 'steak',
        category: 'dinner',
    },
         {
        name: 'bacon',
        category: 'breakfast',
    },
]

// first iterate over them then get the values
const categories = menu.map((item)=>{
    return item.category;
    
})
console.log(categories);

const categories1 =['all',...new Set (menu.map((item)=>{
    return item.category;
    
}))] 
console.log(categories1 );


// Now to create a button for each unique categories
const result = document.querySelector('.result');
result.innerHTML = categories1.map((category)=>{
    return `<button>${category}</button>`;
}).join('');


const menu1 = [
    {
        name: 'pancakes',
        category: 'breakfast',
    },
        {
        name: 'burger',
        category: 'lunch',
    },
        {
        name: 'steak',
        category: 'dinner',
    },
         {
        name: 'bacon',
        category: 'breakfast',
    },
]

const categories2 =  ['all',...new Set (menu1.map((item)=>{
return item.name;
}))]

console.log(categories2)

const result = document.querySelector('.result');
result.innerHTML= categories2.map((category)=>{
  return `<button>${category}</button>`
}).join('');

// no.3 Dynamic Object keys
// the competitor of dot notation for keys 
// It's called square bracket notation
 
// no. 4 Filter and find methods
const people1 = [
{ 
    name: 'bod',
    age: 20, 
    position: 'developer'
},
{ 
    name: 'anna',
    age: 25, 
    position: 'developer'
},
{ 
    name: 'sussy',
    age: 30, 
    position: 'the boss'
}

]

// looking for young people
const youngPeople = people1.filter((person)=>{
if (person.age < 30){
    return person;
}
})

// looking for  position to match like developer
const developers = people1.filter((person)=>{
    return person.position === 'developer';
})

// using find 
const peter = people1.find((person)=>{
    return person.name === 'peter'
})
console.log(peter);
//  instead of using .filter as it will return the object array
// you can console.log(anna[0].position); 
// output only DEVELOPER not the whole object.


// no.5 Reduce basics   
const staff = [
    {name:'bod',age: 20 , position:'developer',salary:100},
    {name:'peter',age: 25 , position:'designer',salary:300},
    {name:'susy',age: 30 , position:'the boss',salary:400},
    {name:'anna',age: 35 , position:'intern',salary:10},

];
//  calculate the total salary daily
const dailyTotal = staff.reduce((acc, curr)=>{
acc += curr.salary
    return acc
},0)

// no.6 reduce - objects
const cart = [
    {
        title: 'samsung galaxy s7',
        price: 599.99,
        amount:1,
    },
        {
        title: 'google pixel',
        price: 499.99,
        amount:2,
    },
        {
        title: 'xiami redmi',
        price: 669.99,
        amount:4,
    },
        {
        title: 'intel',
        price: 399.99,
        amount:3,
    }
 

]
// destructing 
// let total = cart.reduce((acc,curr)=>{
// let {totalItems,cartTotal} = cart.reduce(acc,curr)=>{

let total = cart.reduce((acc,curr)=>{
const {amount,price} = curr; 
// instead of  const amount = curr.amount
// instead of  const price = curr.price

acc.totalItems += amount
acc.cartTotal += amount * price

return acc; 

},{totalItems : 0,
   cartTotal : 0   })
// take note returning an obj.
cartTotal = parseFloat(cartTotal.toFixed(2))
console.log(total);



// Final output
let {totalItems,cartTotal} = cart.reduce((acc,curr)=>{
const {amount,price} = curr

acc.totalItems += amount
acc.cartTotal += amount * price

return acc; 

},{totalItems : 0,
   cartTotal : 0   })

 cartTotal = parseFloat(cartTotal.toFixed(2))

console.log(totalItems,cartTotal);

const url = 'https://api.github.com/users/john-smilga/repos?per_page=100'

const fetchRepos = async () =>{
const response = await fetch(url);
const data = await response.json()

const newData = data.reduce((acc, curr)=>{
  const {language}= curr; 
  if(acc[language]){
    acc[language] = acc [language] + 1
  }else {
    acc [language]=1
  }
  
return acc
},{})


}
fetchRepos()

// other option 
const newData = data.reduce((acc, curr)=>{
  const {language}= curr; 
  if (language) {
    acc[language] = acc[language] +1 || 1
  }

return acc
},{})



console.log(fetchRepos())

// no.7 Destructuring Array
const fruits = ['orange','banana','lemon'];
const friends = ['john', 'peter','bob','anna','kelly'];

// the traditional way 
const fruit1 = fruits[0];
const fruit2 = fruits[1];
const fruit3 = fruits[2];

const [john,] = friends// or can name john  to lolo
// const [mike,,peter,] = friends you can skip by leaving the comman blank.


let first = 'bob';
let second = 'john';

let temp = second;
second = first;
first = temp;

console.log(first, second); 
// output john bob

// you can do the same thing w/destructuring
[second,first] = [first,second]

// no. 8  destructuring object.
const bob = {
    first:'bob',
    last:'sanders',
    city: 'chicago',
    siblings:{
        sister:'jane',
    } 
}
const {last:shakeAndBake}= bob;
// the out put will be sanders

const {siblings:{sister:favoriteSister}} = bob;
console.log(favoriteSister);
// output will be jane

function printPerson (person){
    const {first,last} = person
    console.log(first,last);
}
printPerson(bob)
// output - bob sanders

// or you can destructure the object in the parameter
function printPerson1 ({first,last}){
    console.log(first,last);

}

// no.9 Rest Operator
// always should be placed at the end.
//arrays
const fruits1 = ['apple','orange', 'lemon','banana'];
const [first1,...rest]= fruits;
// the rest can be named what ever you want but convention is
console.log(first,restofTheFruits);
// output apple [ orange,lemon,banana]
const specificFruit = restofTheFruits.find((fruit)=>{
   return fruit === 'lemon';
    
})
console.log(specificFruit)
// output- lemon

// objects rest operator
const person1 =  {name:'john',lastName:'smith',job:'developer'}
const {name,...restOfPersonality} = person1;
console.log(name);
// output- john

// if this way output is - developer{then the rest of the info}
const {job,...restOfPersonality} = person1;

// using functions
const getAverage = (name,...scores) =>{
    console.log(name);
    console.log(scores);

    const average = scores.reduce((acc,curr)=>{
        return acc += curr
    },0)/scores.length;
console.log(average);
}
getAverage(person.name,89,76,81,100);


// using spread 
const testScores = [23,45,67,89];
getAverage(person.name,...testScores);

// no.10 Spread operator
// use in string
const udemy = 'udemy';
const letters = [...udemy];
// output - [u,d,e,m,y]
const boys = ['john','peter','bob'];
const girls = ['susan','anna',];
const bestFriend1 = 'arnold'

const friends1 = [...boys,bestfriend1,...girls];
// output - all infos in the array
// and the bestfriend1 will be included in the girls array

const newFriends = friends1;
newFriends[0]= 'nancy'
// now both the arrays have change the index 0 to nancy
// but if we only want the chnage to apply to the newFriends

const newFriends = [...friends]
newFriends[0]= 'nancy'


const persone = {name:'john',job:'developer'};
const newPerson = {...persone,city:'chicago',name:'peter'};
// once you add a comma you can add a new one or override 
// property with the same obj.key.

// no.11 Array.from






















































