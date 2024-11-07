const contect = document.querySelector(".contact");
const overLay = document.querySelector(".overlay");
const contactUs = document.querySelector(".contact-us");
const gmail = document.querySelector(".mail button");
const close = document.querySelector(".close");

contect.addEventListener("click", (e) => {
  console.log("this is working");
  overLay.classList.add("show-overlay");
  contactUs.classList.add("show-login-form");

  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  (scrollLeft = window.pageXOffset || document.documentElement.scrollLeft),
    // if any scroll is attempted,
    // set this to the previous value
    (window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    });
});

close.addEventListener("click", (e) => {
  overLay.classList.remove("show-overlay");
  contactUs.classList.remove("show-login-form");
  window.onscroll = function () {};
});

gmail.addEventListener("click", (e)=>{
    window.open("https://mail.google.com/")
})