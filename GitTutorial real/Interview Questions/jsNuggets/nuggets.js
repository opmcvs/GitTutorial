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


















































