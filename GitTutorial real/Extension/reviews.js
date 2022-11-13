let randomRev = [
{ id:1,
   name: "Name1",
   job: "developer",
   img: "https://www.google.com/search?q=images&oq=images&aqs=chrome..69i57j0i433i512j0i131i433i512l3j69i60l3.3706j0j7&sourceid=chrome&ie=UTF-8#imgrc=3du_EqKvbNmtvM",
   text: "just some text",
},

{ id:2,
    name: "Name2",
    job: "developer",
    img: "https://www.pexels.com/photo/silhouette-of-a-man-playing-basketball-13820499/",
    text: "just some text",
 },
 { id:3,
    name: "Name3",
    job: "developer",
    img: "/imageshtml/basket.jpg",
    text: "just some text",
 },

 { id:4,
    name: "Name4",
    job: "developer",
    img: "/imageshtml/testshoe.jpg",
    text: "just some text",
 },
]
//select items
const img= document.getElementById("personshoe-img")
const author= document.getElementById("author")
const job= document.getElementById("job")
const info = document.getElementById("info")

const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const randomBtn = document.querySelector(".random-btn")
// set starting item
let currentItem = 2

//load initial item
window.addEventListener("DOMContentLoaded",function (){
 showPerson(currentItem)
})
// show person based on item
function showPerson(person){
const item = randomRev[[person]]
img.src = item.img
job.textContent = item.job
info.textContent = item.text
}
// show next person
nextBtn.addEventListener('click', function (){
   currentItem++
   if(currentItem > randomRev.lenght -1){
      currentItem =0
   }
   showPerson(currentItem)
})

//show prev person

prevBtn.addEventListener('click', function(){
currentItem--
if(currentItem < 0){
currentItem = randomRev.lenght-1
}

})
// show random person
randomBtn.addEventListener('click', function(){
   currentItem = Math.floor(Math.random()*randomRev.lenght)
showPerson(currentItem)
}
)