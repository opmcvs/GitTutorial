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
       OldAge: item.age =20
        }
})
console.log(newPeople);


