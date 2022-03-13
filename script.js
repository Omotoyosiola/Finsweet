const menuBtn = document.querySelector('.menu-btn') 
const navlinks = document.querySelector('.nav-links')

menuBtn.addEventListener('click',()=>{
    navlinks.classList.toggle ('mobile-menu')
})

const accordion = document.getElementsByClassName('collapsible');

for (i=0; i<accordion.length; i++){
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active')
    })
}