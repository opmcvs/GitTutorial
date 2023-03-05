function getRev(str){
    let rev = "";
    for (let i = str.length-1;i>=0;i--){
       rev += str[i];
    }
    return rev;
}
console.log(getRev("om"))


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