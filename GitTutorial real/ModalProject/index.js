const modalBtn = document.querySelector(".modal-btn")
const modal= document.querySelector(".modal-overlay")
const closeBtn = document.querySelector(".close-btn")

modalBtn.addEventListener('click',function(){
    console.log(modal.classList)
modal.classList.add("open-modal")

})

closeBtn.addEventListener('click',function(){
    console.log(closeBtn.classList)

modal.classList.remove("open-modal")
modal.classList.add("open-modals")

})  