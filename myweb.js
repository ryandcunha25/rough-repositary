burger = document.querySelector(".burger")
navbar = document.querySelector(".navbar")
// navbar = document.getElementById(".navbar").style.backgroundColor="black";
rightNav = document.querySelector(".rightNav")
navlist = document.querySelector(".nav-list")


burger.addEventListener("click", ()=>{
rightNav.classList.toggle('v-class');
navlist.classList.toggle('v-class');
navbar.classList.toggle('navh');
})

