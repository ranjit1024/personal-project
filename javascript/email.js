const submnit = document.querySelector("#submit");

const overlay = document.querySelector('.overlay');
const successContainer = document.querySelector('.success-container');

let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
let numberRegax = /\d{10}/;
function sendMail() {
  let params = {
    fname: document.querySelector("#firstname").value,
    lname: document.querySelector("#lastname").value,
    mail: document.querySelector("#email").value,
    number: document.querySelector("#number").value,
  };
  let emailValidate = emailRegex.test(params.mail);
  let numberValidate = numberRegax.test(params.number);

  console.log(params.mail)
  if(params.fname && params.lname && params.mail && params.number){
    
    if(!emailValidate){
      document.querySelector("#email").style.border = "1.2px solid red"
    }
    if(!numberValidate){
      document.querySelector("#number").style.border = "1.2px solid red";
      document.querySelector(".error").style.opacity = 1;
    }
    else{
      // emailjs
      //   .send("service_8b6wpj9", "template_wcysl3o", params)
      //   .then((res) => {
          
          
      //   })
      //   .catch((err) => console.log(err));
      overlay.classList.add("show-overlay");
      successContainer.classList.add("show-success")
     

    }
  }
}
submnit.addEventListener("click", sendMail)