
const contactButton = document.querySelector(".contact-us");
const contactcontainer = document.querySelector(".contact-container");


const main = document.querySelector(".container");
const nav = document.querySelector("nav");
const footer = document.querySelector("footer");

const mainPage = document.querySelector(".main-page i");

const mainPageButton = document.querySelector('.main-page');


contactButton.addEventListener('click', e =>{
    nav.classList.add("main-hide");
    main.classList.add("main-hide");
    footer.classList.add("main-hide");
    contactcontainer.classList.remove("main-hide")
})

//settin up back to mai page
mainPageButton.addEventListener('click', e =>{
    nav.classList.remove("main-hide");
    main.classList.remove("main-hide");
    footer.classList.remove("main-hide");
    contactcontainer.classList.add("main-hide")
})

//stting up a hover effect
mainPage.addEventListener('mouseover', e =>{
    mainPage.classList.remove('bi-arrow-left-circle')
    mainPage.classList.add('bi-arrow-left-circle-fill')
    
})

mainPage.addEventListener('mouseout', e =>{
    mainPage.classList.remove('bi-arrow-left-circle-fill')
    mainPage.classList.add('bi-arrow-left-circle')
    
});

menu.addEventListener("click", e => {
  menuContent.classList.remove("main-hide")
})