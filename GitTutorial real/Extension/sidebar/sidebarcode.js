const toggleBtn= document.querySelector(".toggle")
const closeBtn = document.querySelector(".close-btn")
const sidebar = document.querySelector(".sidebar")

//toggleBtn.addEventListener
toggleBtn.addEventListener('click',function(){
 //console.log(sidebar.classList)
 /*if(sidebar.classList.contains('show-sidebar')){
    sidebar.classList.remove('show-sidebar')
 }
 else{ 
    sidebar.classList.add('show-sidebar')
 }*/

 sidebar.classList.toggle("show-sidebar")
})

    // sideBar.classList.toggle("show-sidebar")

    closeBtn.addEventListener('click',function(){ 
      sidebar.classList.remove("show-sidebar")

    })
